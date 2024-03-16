import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SliderWithInfo from "../component/SliderWithInfo";
import Select from "../component/Select";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../component/PieChart";
import { Pagination } from '@mui/material';

Chart.register(CategoryScale);


const Home = () => {  

  const [homevalue, setHomeValue] = useState(1700);  
  const [downPaymentValue, setDownPaymentValue] = useState(180);  
  const [loanAmountValue, setLoanAmountValue] = useState(1520);  
  const [interestValue, setInterestValue] = useState(2); // Yearly
  const [tenureParent, setTenureParent] = useState();
  const [monthlyInterest, setMonthlyInterest] = useState();

  const [chartData, setChartData] = useState({
    labels: ["Principal", "Interest"], 
    datasets: [
      {
        label: "Monthly Payment",
        data: [homevalue, 230],
        backgroundColor: [
          "#F00F00",
          "#FCFCFC",  
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })


  
  useEffect(()=>{
    // Update the downPaymentValue : 20% of current homevalue
    const downPayment = homevalue * 0.20
    setDownPaymentValue(downPayment)

    // Update the loanAmountValue : homevalue - downPaymentValue
    const loanAmount = homevalue - downPaymentValue
    setLoanAmountValue(loanAmount)
  },[homevalue])


  useEffect(()=>{
    const r = interestValue/12;
    const n = tenureParent * 12;
    const EMI = (loanAmountValue * r * (1 + r)^n) / ((1 + r)^n - 1)
    setMonthlyInterest(EMI)
  },[loanAmountValue, interestValue, tenureParent])

  return (
    <>
        <Navbar/>
        <div
            style={{
                display:'flex'
            }}
        >
            {/* Sliders */}
            <div style={{width: '50%', padding: '0px 10px'}}>
                <SliderWithInfo title={"Home Value"} symbol={"$"} setValue={setHomeValue} value={homevalue} min={1000} max={10000}/>
                <SliderWithInfo title={"Down Payment"} symbol={"$"} setValue={setDownPaymentValue} value={homevalue-loanAmountValue} min={0} max={homevalue}/>
                <SliderWithInfo title={"Loan Amount"} symbol={"$"} setValue={setLoanAmountValue} value={homevalue-downPaymentValue} min={0} max={homevalue}/>
                <SliderWithInfo title={"Interest Rate"} symbol={"%"} setValue={setInterestValue} value={interestValue} min={2} max={18}/>
                <Select setTenureParent={setTenureParent}/>
            </div>
            {/* Graph */}
            <div style={{width: '50%'}}>
                <PieChart chartData={chartData} />
                <p>{monthlyInterest}</p>
                <Pagination count={10} page={4} onChange={(e, pageNo)=>{
                  console.log("Page", pageNo)
                }} />
            </div>
        </div>
    </>
  )
}

export default Home;
