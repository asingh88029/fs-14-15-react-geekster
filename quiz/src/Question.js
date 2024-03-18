import React from 'react';

const PrevBTN = ({onClick})=>{
  return (
    <div>
      <button 
        onClick={()=>{
          onClick()
        }}
      >
        Prev
      </button>
    </div>
  )
}

const NextBTN = ({onClick})=>{
  return (
    <div>
      <button
        onClick={()=>{
          onClick()
        }}
      >
        Next
      </button>
    </div>
  )
}

const SubmitBTN = ({onClick})=>{

  return (
    <div>
      <button
        onClick={()=>{
          onClick()
        }}
      >Submit QUIZ</button>
    </div>
  )

}

const Question = ({questionData, setQuestionData, currentQuestionIndex, setCurrentQuestionIndex}) => {
  return (
    <div>
        <h4>Question{questionData[currentQuestionIndex].question_no} : {questionData[currentQuestionIndex].question}</h4>
        {questionData[currentQuestionIndex]?.options?.map(option=><div><button>{option}</button></div>)}
        {currentQuestionIndex!=0 && 
        <PrevBTN onClick={()=>{
          setCurrentQuestionIndex(prevValue=>prevValue-1)
        }}/>}
        {currentQuestionIndex==questionData.length-1 ? <SubmitBTN onClick={()=>{}}/> : <NextBTN onClick={()=>{setCurrentQuestionIndex(prevValue=>prevValue+1)}}/> }
    </div>
  )
}

export default Question