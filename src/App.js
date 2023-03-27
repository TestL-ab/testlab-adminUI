import { useEffect, useState } from 'react';
import './App.css';
import experimentService from './services/experimentService';
import experimentUtils from './utils/experimentUtils';
import SideNav from './components/SideNav';

import makeData from './services/populateEvents'


const App = () => {
  const [experiments, setExperiments] = useState([]);
  const [experimentChange, setExperimentChange] = useState(false);
  const [currentToggles, setCurrentToggles] = useState([]);
  const [currentRollOuts, setCurrentRollOuts] = useState([]);
  const [currentExperiments, setCurrentExperiments] = useState([]);
  const [scheduledFeatures, setScheduledFeatures] = useState([]);
  const [pastExperiments, setPastExperiments] = useState([]);
  const [existingNames, setExitstingNames] = useState([])
  const [error, setError] = useState(null);
  makeData();

  useEffect(() => {
    // makeData();
    experimentService
      .getAllExperiments()
      .then(response => {
        setExperiments(response);
        setExperimentChange(false);
        experimentUtils.parseExperiments(response,
          setExitstingNames,
          setCurrentToggles,
          setCurrentRollOuts,
          setCurrentExperiments,
          setScheduledFeatures,
          setPastExperiments);
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      })
  }, [experimentChange]);

  return (
    <>
      {error ? <p>{error}</p>
        :

        <SideNav
          currentToggles={currentToggles}
          setCurrentToggles={setCurrentToggles}
          currentRollouts={currentRollOuts}
          setCurrentRollouts={setCurrentRollOuts}
          currentExperiments={currentExperiments}
          setCurrentExperiments={setCurrentExperiments}
          scheduledFeatures={scheduledFeatures}
          setScheduledFeatures={setScheduledFeatures}
          pastExperiments={pastExperiments}
          setPastExperiments={setPastExperiments}
          setExperimentChange={setExperimentChange}
          experimentChange={experimentChange}
          existingNames={existingNames}
        />
        //     {/* <AllRoutes/> */}
      }
    </>
  );
}

export default App;