import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import visualizerService from '../services/visualizerService';
import DataDisplayToggle from './DataDisplayToggle';
import VisualizerNav from './VisualizerNav';

// temporary data for display purposes until api endpoint is available
const mockClickData = [
  {
    id: 23,            // variant id, not experiment id
    value: "ryan",
    is_control: false,
    weight: .5,
    total_users: 300,
    click_total: 375, // mathy stuff to get click total from events table
    distinct_user_click_total: 200 // more mathy stuff to get click total where USER ID is distinct from events table
  },
  {
  id: 22,
  value: "red",
  experiment_id: 5,
  distinct_user_events_total: "1",
  event_total: "12",
  experiment_id: 5,
  id: 22,
  is_control: false,
  total_users: "3",
  value: "red",
  weight: "0.5"
  }
]


  const mockDataByDate = [
    {
      date: "date string", // whatever string format is easiest; i can parse as needed
      variant_id: 24,
      users_added: 300, // new users assigned to this variant on this date
      new_clicks: 150, // click events from this variant on this date
    }
  ]
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
        <DataDisplayToggle clickData={eventData} currentDisplay={currentDisplay} displays={DISPLAYS} />
        <VisualizerNav currentDisplay={currentDisplay} setCurrentDisplay={setCurrentDisplay} displays={DISPLAYS} />
      </React.Fragment>
      }
    </div>
  );
};

export default Visualizer;