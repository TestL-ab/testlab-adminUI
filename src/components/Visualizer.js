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
  useEffect(() => {
     visualizerService
      .getAllEventData()
      .then(response => setEventData(response));
  }, [])

  return (
    <div>
      {eventData.map((event) => <p key={event.id}>{event.id}</p>)}
    </div>
  );
};

export default Visualizer;