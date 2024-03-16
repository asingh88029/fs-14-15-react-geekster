import React, { useEffect, useState } from 'react'

const DisplayPriceCard = ({totalPrice}) => {

  const [totalToPay, setTotalToPay] = useState();
  
  useEffect(()=>{
    setTotalToPay(totalPrice())
    console.log("Total Price Updated")
  },[totalPrice])  
    
  return (
    <div>
        <h6>Total To Pay : {totalToPay}</h6>
    </div>
  )
}

export default DisplayPriceCard