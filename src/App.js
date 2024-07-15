import {React,useState} from 'react';
import './App.css';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import Index from './Components/Index';
// import Biology from './Components/Questions/Biology';
import SubjectQuiz from './Components/Questions/SubjectQuiz';

function App() {
  

  return (
    <>
    <Routes>
      <Route path="" element={<Index/>} />
      <Route path="/home" element={<Home />}/>
      {/* <Route path={`/biologyquiz/${1}`} element={<Biology />}/> */}
      <Route path={`/subjectQuiz/:id`} element={<SubjectQuiz/>}/>
    </Routes>
    </>
  );
}

export default App;
