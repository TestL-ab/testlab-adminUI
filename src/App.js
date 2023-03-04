import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ExperimentForm from './components/ExperimentForm';
import Home from './components/Home'
import experimentService from './services/experimentService';

import visualizerService from './services/visualizerService';
import Visualizer from './components/Visualizer';

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
      <Visualizer />
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
