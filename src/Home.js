import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Categories from "./Categories";
import ErrorMessage from "./ErrorMessage";
import Quizimage from "../src/quizimage.webp";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Home({name,setName,fetchQuestions}) {
  const[category,setCategory]=useState("");
  const[error,setError]=useState(false);
  
const navigate =useNavigate(); //using instead of useHistory

  const handleSubmit=()=>{
    if(!category||!name){
      setError(true);
      return;
    }
    else
    {
      setError(false);
      fetchQuestions(category);
      console.log(category);
      navigate("/quiz");
      
    }
  };
  
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 home_image">
                <img src={Quizimage} alt="quiz image"/>
            </div>
            <div className="col-12 homepage_data">
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                <div className="username">
                <TextField  id="filled-basic" fullWidth label="Enter Your Name" variant="filled" 
                style={{
                  backgroundColor:'#a681b7',
                  borderRadius:'10px' 
                }}
                InputLabelProps={{
                style: { color: 'white' },
                 }}
                 onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <h2 className="select_category" >Choose a Category </h2>
                <div className="categories">
                
                {Categories.map((cat)=>(
                  <div className="category">
                    <img src={cat.image} alt="music" />
                    <div className="category_data">
                 <input type="radio" name="cate" value={cat.value} key={cat.category} onChange={(e)=>setCategory(e.target.value)} />
                  <h4 className="category_name" >{cat.category}</h4> 
                    </div>
                    </div>
                ))}
                    
                </div>
                <div className="buttons" size="large">
                  <Button variant="contained"  style={{
                    backgroundColor:"#6043a0",
                    fontFamily: 'Poppins', 
                    fontSize:'18px',
                  }}
                  onClick={handleSubmit}>
                    Start Quiz
                  </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home