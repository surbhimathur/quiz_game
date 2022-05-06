import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";
import axios from 'axios';
import { useState } from 'react';

function App() {
 const[name,setName]=useState("");
 const [questions, setQuestions] = useState();
 const [score, setScore] = useState(0);
 
 const fetchQuestions = async (category = "") => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }&type=multiple`
  );

  setQuestions(data.results);
};
 
  return (
    <BrowserRouter >
    <div className="App">
      <Header />
     <Routes>
        <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />  
        <Route path="/quiz" element={<Quiz  name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>} /> 
        <Route path="/result" element={<Result name={name} score={score}/>} />    
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
