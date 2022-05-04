import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Header />
     <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/result" element={<Result />} />    
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
