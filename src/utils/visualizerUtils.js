const parseByDay = (eventData, featureAnalysis) => {
  console.log('event data:', eventData);
  console.log('feature analysis ', featureAnalysis);
  // console.log('is Array? ', Array.isArray(eventData));
  //return an array of objects 
  //each object represents one timestamp
  //    within that, there is a property for each variant.

  let variantNameMap = {};
  let sortedDataObj = {};

  featureAnalysis.forEach(variant => {
    let variantId = variant.id;
    variantNameMap[variantId] = variant.value;
  })

  eventData.forEach(event => {
    let formattedDate = event.time_stamp.slice(0, 10);
    let variantName = variantNameMap[event.variant_id];
    if (!sortedDataObj[formattedDate]) {
      sortedDataObj[formattedDate] = {};
      sortedDataObj[formattedDate][variantName] = 1;
    } else {
      sortedDataObj[formattedDate][variantName] = sortedDataObj[formattedDate][variantName] + 1 || 1 ;
    }
  })

  console.log("object sorted: ", sortedDataObj);
  // let parsedData = eventData.map(event => {
  //   let formattedDate = event.time_stamp.slice(0, 10);
  //   if (!sortedDataObj[formattedDate]) {
  //     sortedDataObj[formattedDate] = {};
  //   }
  //   let variantName = variantNameMap[event.variant_id];
  //   return {
  //     variant: variantName,
  //     time_stamp: formattedDate
  //   }
  // })



  //NOW merge the timestamps into one object each.

  //start by populating an object with the timestamps to keep track of count of events for each variant for that timestamp 

  //how do we get the VARIANT NAME added? 
  /*
  variant: clicks
    {
      '2023-03-12': {
        9: 5, 
        10: 1
      }, 
  
      '2023-03-13': {
  
      },
  
      '2023-03-14': {
  
      }
    }
  */
  //so as we go through each event, IF a key exists for that date, then we should conditionally add the event data based on the variant

  // IF key does not exist, add the key and the corresponding variant data


  // let obj = {};
  // parsedData.forEach(event => {
  //   if (obj[event.time_stamp]) {


  //   } else {
  //     obj[event.time_stamp] = {

  //     }
  //   }
  // })


  return sortedDataObj;

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