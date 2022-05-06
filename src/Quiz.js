import React, { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Questions from "./Questions";

function Quiz({name,score,questions,setQuestions,setScore}) {
  const[options,setOptions]=useState();
  const [currQues, setCurrQues] = useState(0);
  
  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions,currQues]);   //everytime when question changes this useeffect block will be executed.
  
console.log(options);
  
  //for shufflling options of question
  const handleShuffle=(optionss)=>{
    return optionss.sort(()=>Math.random() - 0.5);
  };
  
  return (
    <div className="container quiz">
      <div className="welcome"> <h2>Welcome, {name}</h2></div>
      {
        questions ? (
          <>
          <div className="quizinfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          
          <Questions 
            currQues={currQues} 
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
        ):(<CircularProgress style={{margin:100}} color="warning" size={100} thickness={2} />
        
        )}
    </div>
  )
}

export default Quiz