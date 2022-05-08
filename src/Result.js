import React, { useEffect } from 'react'

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Result({name,score}) {
  
  const navigate=useNavigate;
  
  useEffect(() => {
    
  if(!name){
 navigate("/");
  }
   
    
  }, [name,navigate]);
  
  return (
    <div className="result">      {/* results box displaying final score*/}
      <span className="result_title">
        Final Score : {score}
      </span>
      <Button variant="contained" color="secondary" size="large" style={{ alignSelf:"center",marginTop:40,fontFamily:'Cormorant Garamond',fontSize:'18px',border:'2px solid white'}} href="/">
        Go to Homepage
      </Button>       {/* back to homepage button*/}
    </div>
  )
}

export default Result