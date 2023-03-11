import { useEffect, useState } from 'react';
import './App.css';
import experimentService from './services/experimentService';
import experimentUtils from './utils/experimentUtils';
import SideNav from './components/SideNav';
import ScheduledList from './components/lists/ScheduledList';
import CurrentToggleRollList from './components/lists/CurrentToggleRollList';
import CurrentExperimentsList from './components/lists/CurrentExperimentsList';
import PastExperimentsList from './components/lists/PastExperimentsList';
import Form from './components/Form';

const App = () => {
  const [experiments, setExperiments] = useState([]);
  const [experimentChange, setExperimentChange] = useState(false);
  const [currentToggles, setCurrentToggles] = useState([]);
  const [currentRollOuts, setCurrentRollOuts] = useState([]);
  const [currentExperiments, setCurrentExperiments] = useState([]);
  const [scheduledFeatures, setScheduledFeatures] = useState([]);
  const [pastExperiments, setPastExperiments] = useState([]);
  const [error, setError] = useState(null);

  console.log("experiment change from app: ", experimentChange);
  // console.log(scheduledFeatures);
  useEffect(() => {
    experimentService
      .getAllExperiments()
      .then(response => {
        setExperiments(response);
        setExperimentChange(false);
        experimentUtils.parseExperiments(response,
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
        <>
          <div>
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
              experimentChange={experimentChange} />
            {/* <AllRoutes/> */}
          </div>

          {/* <SideNav /> */}
          {/* <Form currentExperiments={currentExperiments} scheduledFeatures={scheduledFeatures} /> */}
          {/* <ScheduledList scheduledFeatures={scheduledFeatures} setScheduledFeatures={setScheduledFeatures} /> */}
          {/* <CurrentToggleRollList currentFeatures={currentToggles} setCurrentFeatures={setCurrentToggles} title="Current Toggles" /> */}
          {/* <CurrentToggleRollList currentFeatures={currentRollOuts} setCurrentFeatures={setCurrentRollOuts} title="Current Roll Outs" /> */}
          {/* <CurrentExperimentsList currentFeatures={currentExperiments} setCurrentFeatures={setCurrentExperiments} title="Current Experiments" /> */}
          {/* <PastExperimentsList pastFeatures={pastExperiments} setPastFeatures={setPastExperiments} title="Past Experiments" /> */}
        </>
      }
      </>
  );
}

export default App;

    // {/* {error ? <p>{error}</p>
    // :
    // <>
    //   <div>
    //     <SideNav currentToggles={currentToggles} setCurrentToggles={setCurrentToggles} currentRollouts={currentRollOuts} setCurrentRollouts={setCurrentRollOuts} currentExperiments={currentExperiments} setCurrentExperiments={setCurrentExperiments} scheduledFeatures={scheduledFeatures} setScheduledFeatures={setScheduledFeatures} pastExperiments={pastExperiments} setPastExperiments={setPastExperiments}/>
    //     {/* <AllRoutes/> */}
    //     </div>

    //     {/* <SideNav />
    //     <Form currentExperiments={currentExperiments} scheduledFeatures={scheduledFeatures} /> */}
    //     {/* <ScheduledList scheduledFeatures={scheduledFeatures} setScheduledFeatures={setScheduledFeatures} /> */}
    //     {/* <CurrentToggleRollList currentFeatures={currentToggles} setCurrentFeatures={setCurrentToggles} title="Current Toggles" /> */}
    //     {/* <CurrentToggleRollList currentFeatures={currentRollOuts} setCurrentFeatures={setCurrentRollOuts} title="Current Roll Outs" /> */}
    //     {/* <CurrentExperimentsList currentFeatures={currentExperiments} setCurrentFeatures={setCurrentExperiments} title="Current Experiments" /> */}
    //     {/* <PastExperimentsList pastFeatures={pastExperiments} setPastFeatures={setPastExperiments} title="Past Experiments" /> */}
    //   </>
    // }
