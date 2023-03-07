import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const getExperimentEventData = async (experimentId) => {
  const response = await axios.get(`${baseURL}/events/experiment/${experimentId}/variants/event_data`);
  console.log("event data in service:", response);
  return response.data;
};

const visualizerService = { getExperimentEventData }

export default visualizerService;