import { useEffect, useState } from 'react';
import './App.css';
import experimentService from './services/experimentService';
import experimentUtils from './utils/experimentUtils';
import SideNav from './components/SideNav';
import ScheduledList from './components/lists/SheduledList';
import CurrentToggleRollList from './components/lists/CurrentToggleRollList';
import CurrentExperimentsList from './components/lists/CurrentExperimentsList';
import PastExperimentsList from './components/lists/PastExperimentsList';
import Form from './components/Form';

const App = () => {
  const [experiments, setExperiments] = useState([]);
  const [currentToggles, setCurrentToggles] = useState([]);
  const [currentRollOuts, setCurrentRollOuts] = useState([]);
  const [currentExperiments, setCurrentExperiments] = useState([]);
  const [scheduledFeatures, setScheduledFeatures] = useState([]);
  const [pastExperiments, setPastExperiments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=> {
    experimentService
      .getAllExperiments()
      .then(response => {
        setExperiments(response);
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
  }, [])

  return (
    <>
    { error
    ? <p>{error}</p>
    :
    <>
    <Form currentExperiments={currentExperiments} scheduledFeatures={scheduledFeatures} />
      {/* <SideNav /> */}
      <ScheduledList scheduledFeatures={scheduledFeatures} setScheduledFeatures={setScheduledFeatures} />
      {/* <CurrentToggleRollList currentFeatures={currentToggles} setCurrentFeatures={setCurrentToggles} title="Current Toggles" /> */}
      {/* <CurrentToggleRollList currentFeatures={currentRollOuts} setCurrentFeatures={setCurrentRollOuts} title="Current Roll Outs" /> */}
      {/* <CurrentExperimentsList currentFeatures={currentExperiments} setCurrentFeatures={setCurrentExperiments} title="Current Experiments" /> */}
      {/* <PastExperimentsList pastFeatures={pastExperiments} setPastFeatures={setPastExperiments} title="Past Experiments" /> */}
    </>
  }
    {/* <Visualizer /> */}
    </>
  );
}

export default App;