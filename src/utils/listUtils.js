const processFeatureObjs = (featureArr) => {
  console.log(featureArr);
  return featureArr.map((obj) => {
    let type;
    switch (obj.type_id) {
      case 1: {
        type = "Toggle";
        break
      }
      case 2: {
        type = "Roll-Out";
        break;
      } case 3: {
        type = "Experiment";
        break;
      }
    }

    return {
      ...obj,
      startDate: new Date(obj.start_date).toLocaleDateString(),
      endDate: new Date(obj.end_date).toLocaleDateString(),
      userPercentage: `${100 * obj.user_percentage}%`,
      type,
    };
  });
};

const sortByDate = (featureArr) => {
  return featureArr.sort((a, b) => {
    return new Date(a.start_date) - new Date(b.start_date);
  });
};

const listUtils = { processFeatureObjs, sortByDate };

export default listUtils;