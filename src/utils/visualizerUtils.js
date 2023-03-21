const parseByDay = (eventData, variantNameMap) => {
  let sortedDataObj = {};

  eventData.forEach(event => {
    let formattedDate = formatDate(event.time_stamp);
    let variantName = variantNameMap[event.variant_id];
    if (!sortedDataObj[formattedDate]) {
      sortedDataObj[formattedDate] = {};
      sortedDataObj[formattedDate][variantName] = 1;
    } else {
      sortedDataObj[formattedDate][variantName] = sortedDataObj[formattedDate][variantName] + 1 || 1;
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
  return sortDateArr(finalParsedArr)
};

const formatDate = (dateString) => {
  let arr = dateString.split('-');
  arr = arr.map((num, idx) => {
    let int = parseInt(num);
    return String(int);
  })
  let finalStr = arr.slice(1).join('/');
  return finalStr
}

const sortDateArr = (arr) => {
  arr.sort(function (a, b) {
    var dateA = a.date;
    var dateB = b.date;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
  return arr;
}

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
