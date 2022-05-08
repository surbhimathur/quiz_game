import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Categories from "./Categories";
import ErrorMessage from "./ErrorMessage";
import Quizimage from "../src/quizimage.webp";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

//Home page logic
function Home({name,setName,fetchQuestions}) {
  const[category,setCategory]=useState("");
  const[error,setError]=useState(false);
  
const navigate =useNavigate(); //using instead of useHistory to push data from one page to other

//handlesubmit function is called when user clicks on start quiz button. handlesubmit checks whether a catergory and name field is  empty or not  and then navigate to quiz page showing questions of chosen category.
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
            <div className="home_image">       {/* home page image box*/}
                <img src={Quizimage} alt="quiz image"/>
            </div>
            <div className="homepage_data">    {/* home page data box*/}
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                <div className="username">          {/* username textfield box*/}
                <TextField  id="filled-basic" fullWidth label="Enter Your Name" variant="filled" 
                style={{
                  backgroundColor:'white',
                  borderRadius:'10px' ,
                  
                }}
                InputLabelProps={{
                style: { color: '#6043a0', fontWeight:"bold"},
                 }}
                 onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <h2 className="select_category" >Choose a Category </h2>
                <div className="categories">           {/* categories box*/}
                
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
                <div className="buttons" size="large">            {/* start quiz button*/}
                  <Button variant="contained"  style={{
                    background: "linear-gradient(to right, #eb3349, #f45c43)",
                    fontFamily:'Cormorant Garamond', 
                    fontSize:'20px',
                    border:'2px solid white'
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