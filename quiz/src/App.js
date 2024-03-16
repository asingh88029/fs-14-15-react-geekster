import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Question from './Question';

function App() {

  const [questionData, setQuestionData] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(()=>{
    // API Call
    const local_data = localStorage.getItem("data");
    
    if(local_data){
      setQuestionData(JSON.parse(local_data))
      return
    }

    fetch("https://opentdb.com/api.php?amount=10&type=multiple").then(res=>res.json()).then(data=>{
      const questions = data.results.map((que, index)=>{
        return {
          question_no : index + 1,
          question : que.question,
          options : [...que.incorrect_answers, que.correct_answer],
          correct_answer : que.correct_answer,
          status : 0 // 0 - unattempted, 1 - attempeted, 2 - Right Answer, 3 - Wrong Answer
        }
      })
      setQuestionData(questions)
      localStorage.setItem("data", JSON.stringify(questions))
    })

  },[])

  return (
    <div>
      <h1>QUIZ APP</h1>
      {questionData.length && <Question questionData={questionData} setQuestionData={setQuestionData} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex}/>}
    </div>
  );
}

export default App;
