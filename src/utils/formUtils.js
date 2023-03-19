const getDateRange = (startDate, endDate) => {
  let dateArray = [startDate];
  let currDate = startDate;

  while (currDate < endDate) {
    const dateCopy = new Date(currDate);
    currDate = dateCopy.setDate(dateCopy.getDate() + 1);
    let date = new Date(currDate);
    if (!dateArray.includes(date)) dateArray.push(date);
  }

  return dateArray;
};

const processExperiments = (scheduledFeatures, currentExperiments)=> {
  let scheduledExperiments = scheduledFeatures.filter(feature => feature.type_id === 3);
  let existingExperiments = currentExperiments.concat(scheduledExperiments);
  return existingExperiments.map((experimentObj) => {
    return {
      startDate: new Date(experimentObj.start_date),
      endDate: new Date(experimentObj.end_date),
      userPercentage: experimentObj.user_percentage,
      id: experimentObj.id
    };
  });
}

const populateSpaceUsedObject = (dateArr, experiments) => {
  let obj = {}
  dateArr.forEach((date) => {
    let dateName = date.toISOString();
    if (!obj[dateName]) obj[dateName] = 0;
    experiments.forEach((exp) => {
      if (date >= exp.startDate && date <= exp.endDate) {
        obj[dateName] += exp.userPercentage;
      }
    });
  });
  return obj;
};

const calculateSpaceAvailable = (dateArray, existingExperiments) => {
  const spaceUsed = populateSpaceUsedObject(dateArray, existingExperiments);
  let maxUsed = 0;
  for (const key in spaceUsed) {
    if (spaceUsed[key] > maxUsed) {
      maxUsed = spaceUsed[key];
    };
  }
  const available = (1 - maxUsed).toFixed(2);
  return available;
};

const processDayDateSelector = (date) => {
  return date.toString().split(' ').slice(0, 4).join("")
};

const getNextDayDateSelector = (currentDate) => {
  const dateCopy = new Date(currentDate);
  let tomorrow = dateCopy.setDate(dateCopy.getDate() + 1);
  return new Date(tomorrow);
};

const typeSelector = (_, action) => {
  switch (action.type) {
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    default:
      throw new Error;
  }
};

const validVariantWeights = (variantArr) => {
  let totalUsers = 0;
  variantArr.forEach((obj) => totalUsers += obj.weight);
  if (totalUsers === 1) return true;
  alert(`User total is ${Math.floor(totalUsers * 100)}%. Please adjust user percentages so that total is precisely 100%`);
  return false;
};

const distinctVariantValues = (variantArr) => {
  let values = [];
  for (let i = 0; i < variantArr.length; i++) {
    let currValue = variantArr[i].value.toLowerCase();
    if (!values.includes(currValue)) {
      values.push(currValue)
    } else {
      alert(`Each variant value must be distinct. You have two or more values of ${currValue}`);
      return false;
    }
  }
  return true;
};

const processVariantData = (variantObjArr, experimentId) => {
  let variantCopies = [];
  variantObjArr.forEach((obj) => {
    if (obj.value !== "" && obj.weight !== "") {
      variantCopies.push({...obj});
    }
  });

  variantCopies = variantCopies.map((obj) => {
    return {
      ...obj,
      weight: Number(obj.weight) / 100,
      feature_id: experimentId
    };
  });

  return variantCopies;
};

const processDateForUpdate = (date) => {
  return new Date(date).toLocaleDateString();
};

const formUtils = {
  getDateRange,
  processExperiments,
  calculateSpaceAvailable,
  processDayDateSelector,
  getNextDayDateSelector,
  typeSelector,
  validVariantWeights,
  distinctVariantValues,
  processVariantData,
  processDateForUpdate
};

export default formUtils;