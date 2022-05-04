import Quizimage from "../src/quizimage.webp";
import React from 'react'
import TextField from '@mui/material/TextField';

function Home() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 home_image">
                <img src={Quizimage} />
            </div>
            <div className="col-12 homepage_data">
                <div className="username">
                <TextField required id="standard-basic" fullWidth label="Name" variant="standard"  />
                </div>
                <div className="categories">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home