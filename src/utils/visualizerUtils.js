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
  console.log("after parseByDay fxn: ", sortedDataObj);
  return sortedDataObj;

};

const createVariantNameMap = (featureAnalysis) => {
  let variantNameMap = {};
  featureAnalysis.forEach(variant => {
    let variantId = variant.id;
    variantNameMap[variantId] = variant.value;
  })
  return variantNameMap;
}

const visualizerUtils = {
  parseByDay,
  createVariantNameMap
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