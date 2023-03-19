import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const getExperimentEventData = async(experimentId) => {
  try {
    const response = await axios.get(`${baseURL}/events/feature/${experimentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getFeatureAnalysis = async(featureId) => {
  try {
    const response = await axios.get(`${baseURL}/analysis/feature/${featureId}`);
    return response.data;
  }catch(error) {
    throw error;
  }
}
/*
[{id:9, value: 'Test', weight: '0.15'}, 
{id:10, value:'Test2', weight:'0.85'}]
*/
const weightsToString = (featureAnalysis) => {
  let outputString = '';
  featureAnalysis.forEach(variant => {
    outputString += `${variant.value} is exposed to ${variant.weight*100} % of users enrolled in experiment`
  })
  //take as input feature analysis 
}

const visualizerService = { getExperimentEventData, getFeatureAnalysis, weightsToString }

export default visualizerService;