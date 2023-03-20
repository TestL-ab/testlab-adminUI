const parseByDay = (eventData, variantNameMap) => {
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
  let variantNameMap = {};
  featureAnalysis.forEach(variant => {
    let variantId = variant.id;
    variantNameMap[variantId] = variant.value;
  })
  return variantNameMap;
}

const themeColors = [
    "#0f3654", 
    "#8CC3DF", 
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
