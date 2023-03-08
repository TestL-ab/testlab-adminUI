import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const getExperimentEventData = async(experimentId) => {
  try {
    const response = await axios.get(`${baseURL}/events/experiment/${experimentId}/variants/event_data`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const visualizerService = { getExperimentEventData }

export default visualizerService;