const parseByDay = (eventData) => {
  console.log('event data:', eventData.eventData);
  // console.log('is Array? ', Array.isArray(eventData));
  //return an array of objects 
  //each object represents one timestamp
  //    within that, there is a property for each variant.

  let parsedData = eventData.map(event => {
    let formattedDate = event.time_stamp.slice(0, 10);
    return {
      ...event,
      time_stamp: formattedDate
    }
  })

  //NOW merge the timestamps into one object each.
  
  //start by populating an object with the timestamps to keep track of count of events for each variant for that timestamp 

  //so as we go through each event, IF a key exists for that date, then we should conditionally add the event data based on the variant

  // IF key does not exist, add the key and the corresponding variant data
  let obj = {};
  parsedData.forEach(event => {
    if (obj[event.time_stamp]) {
      obj[event.time_stamp] = {
        ...obj[event.time_stamp], 
      }
    } else {
      obj[event.time_stamp] = {

      }
    }
  })


  return parsedData;

};

const visualizerUtils = {
  parseByDay,
};

export default visualizerUtils;

// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
// ]