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

const visualizerService = { getExperimentEventData, getFeatureAnalysis }

export default visualizerService;