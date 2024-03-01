import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import CoursePlanner from '../component/CoursePlanner';

export default () => {

  // let timer = 60;
  // const [timer, setTimer] = useState(60);

  // const interval = setInterval(()=>{

  //   if(timer<=0){
  //     clearInterval(interval)
  //   }


  //   // timer = timer - 1;

  //   // document.getElementById("timer").innerText = timer;

  //   setTimer(timer-1)

  // },1000)

  return (
    <>
      <Navbar/>
      <div style={{
        textAlign: 'center'
      }}>
        {/* <h2>You are at the Payment Page</h2>
        <h1 id="timer">{timer}</h1> */}
      </div>
      <CoursePlanner/>
    </>
  )
}
