import axios from 'axios';

const baseURL = 'http://localhost:3000/api';
// in likelihood I will not want to use this service; I'd want a service that
// only delivers aggregated results based on experiment id, but for now, I
// just want to be sure I've got correct functionality for connecting with API
const getAllEventData = async() => {
  const response = await axios.get(`${baseURL}/events`);
  return response.data;
};
//api endpoint doesnt exist yet; cannot write tests
const getExperimentEventData = async(experimentId) => {
  const response = await axios.get(`${baseURL}/api/events/experiment/${experimentId}`);
  return response.data;
};

const visualizerService = { getAllEventData, getExperimentEventData }

export default visualizerService;