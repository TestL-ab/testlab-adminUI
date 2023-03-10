const parseExperiments = (experiments, setCurrentToggles, setCurrentRollOuts, setCurrentExperiments, setScheduledFeatures, setPastExperiments) => {
  let currToggles = [];
  let currRollOuts = [];
  let currExperiments = [];
  let scheduled = [];
  let past = [];

  const currentDate = new Date();

  experiments.forEach(obj => {
    const startDate = new Date(obj.start_date);
    const endDate = new Date(obj.end_date);
    if (currentDate >= startDate && currentDate <= endDate) {
      switch(obj.type_id) {
        case 1: {
          currToggles.push(obj);
          break;
        } case 2: {
          currRollOuts.push(obj);
          break;
        } case 3: {
          currExperiments.push(obj);
          break;
        }
      }
    } else if (currentDate < startDate) {
      scheduled.push(obj);
    } else if (currentDate > endDate && obj.type_id === 3) {
      past.push(obj);
    }
  })

  setCurrentToggles(currToggles);
  setCurrentRollOuts(currRollOuts);
  setCurrentExperiments(currExperiments);
  setScheduledFeatures(scheduled);
  setPastExperiments(past);
};

const experimentUtils = { parseExperiments };

export default experimentUtils;