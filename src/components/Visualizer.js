import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import visualizerService from '../services/visualizerService';
import DataDisplayToggle from './DataDisplayToggle';
import VisualizerNav from './VisualizerNav';


  const Visualizer = () => {
  const experimentId = 5; // will use code on line below when router is working and params are supplied
  // const { experimentId } = useParams(); // will need this for real routes in useeffect below
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);
  const DISPLAYS = ["Raw Graph", "User Click Percentages"]
  const [currentDisplay, setCurrentDisplay] = useState(DISPLAYS[0]);

  useEffect(() => {
     visualizerService
      .getExperimentEventData(experimentId)
      .then(response => {
        setEventData(response)
      })
      .catch(error => {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      });
  }, [])

  return (
    <div>
      {error
      ? <div className="error">
          <p>An error occurred: {error}</p> {/* not sure how we want to handle errors but this works for now */}
        </div>
      :
      <React.Fragment>
        <DataDisplayToggle
          clickData={eventData}
          currentDisplay={currentDisplay}
          displays={DISPLAYS}
        />
        <VisualizerNav
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          displays={DISPLAYS}
        />
      </React.Fragment>
      }
    </div>
  );
};

export default Visualizer;