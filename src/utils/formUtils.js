const getDateRange = (startDate, endDate) => {
  if (!endDate || !startDate) return [];
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

const formUtils = { getDateRange, processExperiments, calculateSpaceAvailable }
export default formUtils;