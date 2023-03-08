import { useEffect, useState } from 'react';
import './App.css';
import experimentService from './services/experimentService';
import ScheduledList from './components/SheduledList';
import SideNav from './components/SideNav';

const App = () => {
  const [experiments, setExperiments] = useState([]);
  const [currentToggles, setCurrentToggles] = useState([]);
  const [currentRollOuts, setCurrentRollOuts] = useState([]);
  const [currentExperiments, setCurrentExperiments] = useState([]);
  const [scheduledFeatures, setScheduledFeatures] = useState([]);
  const [pastExperiments, setPastExperiments] = useState([]);

  const parseExperiments = (experiments) => {
    let currToggles = [];
    let currRollOuts = [];
    let currExperiments = [];
    let scheduled = [];
    let past = [];

    const currentDate = new Date();

    experiments.forEach(obj => {
      const startDate = new Date(obj.start_date);
      const endDate = new Date(obj.end_date);
      if (currentDate >= startDate && currentDate <= endDate) {
        switch(obj.type_id) {
          case 1: {
            currToggles.push(obj);
            break;
          } case 2: {
            currRollOuts.push(obj);
            break;
          } case 3: {
            currExperiments.push(obj);
            break;
          }
        }
      } else if (currentDate < startDate) {
        scheduled.push(obj)
      } else if (currentDate > endDate && obj.type_id === 3) {
        past.push(obj);
      }
    })

    setCurrentToggles(currToggles);
    setCurrentRollOuts(currRollOuts);
    setCurrentExperiments(currExperiments);
    setScheduledFeatures(scheduled);
    setPastExperiments(past);
  }

  useEffect(()=> {
    experimentService
      .getAllExperiments()
      .then(response => {
        setExperiments(response);
        parseExperiments(response);
      });
  }, [])

  // console.log("currentToggles: ", currentToggles);
  // console.log("currentRollouts: ", currentRollOuts);
  // console.log("currentExperiments: ", currentExperiments);
  // console.log("scheduledFeatures: ", scheduledFeatures);
  // console.log("pastExperiments: ", pastExperiments);
  return (
    // <SideNav />
    <ScheduledList scheduledFeatures={scheduledFeatures} />
  );
}

export default App;


// import ExperimentForm from './components/ExperimentForm';
// import Home from './components/Home'
// import Visualizer from './components/visualizer/Visualizer'
// import {BrowserRouter, Routes, Route } from 'react-router-dom';

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/newExperiment" element={<ExperimentForm/>}/>
    //     <Route path="/visualizer/:experimentId" element={<Visualizer />} />
    //   </Routes>
    //   {/* <SideNav /> */}
    //   <ScheduledList />
    //   {/* <Visualizer /> */}
    // </BrowserRouter>
    // // <div>
    // //   <h1>Admin UI</h1>
    // //   <ExperimentForm/>
    // // </div>
    // // <div className="test">
    // //   <h1>Test</h1>
    // //   <ExperimentForm></ExperimentForm>
    // // </div>