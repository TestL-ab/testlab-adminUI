const parseByDay = (eventData, variantNameMap) => {
  console.log("parsing by day");
  console.log("variantNameMap: ", variantNameMap);
  let sortedDataObj = {};

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
//parse back to array of objects with appropriate properties

/*
{date: 'today', 
varian1: 50, 
variant2: 1000
}
*/
  let finalParsedArr = [];
  for (let timestamp in sortedDataObj) {
    let dataPoint = {};
    dataPoint["date"] = timestamp;
    for (let varName in sortedDataObj[timestamp]) {
      dataPoint[varName] = sortedDataObj[timestamp][varName]
    }
    finalParsedArr.push(dataPoint);
  }
  return finalParsedArr;

};

const createVariantNameMap = (featureAnalysis) => {
  console.log("feature Analysis passed", featureAnalysis);
  let variantNameMap = {};
  featureAnalysis.forEach(variant => {
    let variantId = variant.id;
    variantNameMap[variantId] = variant.value;
  })
  return variantNameMap;
}

const themeColors = [
    // testLabBlueGray, 
    // testLabDarkBlue,
    // "#OF3654", 
    // "#EFF2F4", 
    "#2A2493", 
    "#FF00C8", 
    "#19D038",
    "#D2772B"
  

];

const visualizerUtils = {
  parseByDay,
  createVariantNameMap,
  themeColors
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