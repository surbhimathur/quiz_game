import React, { useState } from 'react'

import Button from '@mui/material/Button';
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from 'react-router-dom';

function Questions({currQues,setCurrQues,questions,options,correct,score,setScore,setQuestions}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    var he =require('he');             // npm i he for installation
    const navigate =useNavigate();
    
    //this function checks whether chosen option is correct or not. then it will display correct answer css and wrong answer css.
    const handleSelect=(i)=>{
      if(selected===i && selected===correct){
          return "select";      
        } 
        else if(selected===i && selected !== correct){
                return "wrong";
            }
            else if(i===correct){
            return "select";
            }
        
    };
    
    //this function checks that if chosen option is correct then it will update score.
    const handleCheck=(i)=>{
        setSelected(i);
        if(i===correct)
        setScore(score + 1);
        setError(false);
    };
    
    //this function is for next button coding that checks various conditions.
     const handleNext=()=>{
         if(currQues > 8)
         {
            navigate("/result");
         }
         else if(selected){
             setCurrQues(currQues +1)
             setSelected()
         }
         else{
             setError("Please select an option first");
         }
     };
    
     //this function is for quit button 
     const handleQuit=()=>{
        setCurrQues(0);
        setQuestions();
     };
     
  return (
    <div className="questions">   {/* question box*/}
        <h2>Question {currQues + 1}</h2>    {/* question number*/}
        <div className="single_question">
            <p className="question_name">{he.decode(questions[currQues].question)}</p>  {/*he.decode used for converting special codes('#120f) data coming from trivia api */} 
            <div className="options">   {/* options box*/}
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
            {
                options && 
                options.map(i=>(
                    <button className={`option_name ${selected && handleSelect(i)}`} onClick={()=> handleCheck(i)} key={i} disabled={selected}>{he.decode(i)}</button>
                ))
            }      
            </div>
            
          <div className="controls">
              <Button variant="contained" onClick={handleQuit}  style={{width:'40%',backgroundColor:"crimson",fontSize:"16px", fontFamily: 'Cormorant Garamond',border:'2px solid white'}} href="/">
              Quit
              </Button>
              <Button variant="contained" onClick={handleNext} style={{width:'55%',backgroundColor:"#6043a0",fontSize:"16px",fontFamily: 'Cormorant Garamond',border:'2px solid white'}} >
              Next Question
              </Button>
          </div>
            
        </div>
    </div>
  )
}

export default Questions