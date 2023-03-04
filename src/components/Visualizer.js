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

import visualizerService from '../services/visualizerService';

const Visualizer = () => {
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
      : eventData.map((event) => <p key={event.id}>{event.id}</p>)}
    </div>
  );
};

export default Visualizer;