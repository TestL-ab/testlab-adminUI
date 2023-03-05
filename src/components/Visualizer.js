/*
Need:
- experiment id (via url param or passed via props)
- experiment data/things stored in experiment obj (either passed as prop, or call to API)
- event data (presumably first collected via API call, hopefully later can implement SSC
  to retrieve live data as clicks happen)
- Event data stored in state so can be updated in realtime in future if we can make SSC
  work
*/

import { useState, useEffect } from 'react';

import Graph from './Graph';
import visualizerService from '../services/visualizerService';

// temporary data for display purposes until api endpoint is available
const mockClickData = [
  {
    id: 23,            // variant id, not experiment id
    value: "ryan",
    is_control: false,
    weight: .5,
    total_users: 100,
    click_total: 400, // mathy stuff to get click total from events table
    distinct_user_click_total: 400 // more mathy stuff to get click total where USER ID is distinct from events table
  },
  {
    id: 24,
    value: "not_ryan",
    is_control: true,
    weight: .5,
    total_users: 100,
    click_total: 100,
    distinct_user_click_total: 50,
  }
  ];


  const mockDataByDate = [
    {
      date: "date string", // whatever string format is easiest; i can parse as needed
      variant_id: 24,
      users_added: 300, // new users assigned to this variant on this date
      new_clicks: 150, // click events from this variant on this date
    }
  ]
const Visualizer = ({experimentId}) => {
  const [eventData, setEventData] = useState([]); // array of obj's; sort by variant ID and event
                                        // type; so like [{variant: 21, clickCount: 300}]
                                        // or whatever
  const [error, setError] = useState(null);

  /* with SSC, based on num-dialer app from week 8; this would have real-time updates
  const [ listening, setListening ] = useState(false);

  useEffect( () => {
    if (!listening) {
      const sscEvents = new EventSource('http://localhost:3001/events');

      sscEvents.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setEventData((eventData) => parsedData);
      };

      setListening(true);
    }
  }, [listening, eventData]);
  */

  //WITHOUT SSC (no real-time data updates; would need to refresh or use cronjob/polling)
  useEffect(() => {
     visualizerService
      .getAllEventData()
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
          <p>An error occurred: {error}</p>
        </div>
      :
      <Graph clickData={mockClickData} />
      // eventData.map((event) => <p key={event.id}>{event.id}</p>)
      }
    </div>
  );
};

export default Visualizer;