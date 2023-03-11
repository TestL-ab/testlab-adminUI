const processFeatureObjs = (featureArr) => {
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

const processDescription = (description, rowLength) => {
  let rows = description.split(" ").reduce((acc, word) => {
    if (acc.length === 0) {
      return [word];
    }
    const currentRow = acc[acc.length - 1];
    if ((currentRow + " " + word).length <= rowLength) {
      acc[acc.length - 1] = currentRow + " " + word;
    } else {
      acc.push(word);
    }
    return acc;
  }, [])

  return rows;
}


const listUtils = { processFeatureObjs, sortByDate, processDescription };

export default listUtils;