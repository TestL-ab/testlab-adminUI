import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ExperimentForm from './components/ExperimentForm';
import Home from './components/Home'
import experimentService from './services/experimentService';

function App() {
  const [experiments, setExperiments] = useState([]);

  useEffect(()=> {
    experimentService
      .getAllExperiments()
      .then(experiments => {
        console.log(experiments);
        setExperiments(experiments);
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newExperiment" element={<ExperimentForm/>}/>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>Admin UI</h1>
    //   <ExperimentForm/>
    // </div>
    // <div className="test">
    //   <h1>Test</h1>
    //   <ExperimentForm></ExperimentForm>
    // </div>
  );
}

export default App;
