import React from 'react'

const Question = ({questionData, setQuestionData, currentQuestionIndex, setCurrentQuestionIndex}) => {
  return (
    <div>
        <h4>Question{questionData[currentQuestionIndex].question_no} : {questionData[currentQuestionIndex].question}</h4>
        {questionData[currentQuestionIndex]?.options?.map(option=><button>{option}</button>)}
    </div>
  )
}

export default Question