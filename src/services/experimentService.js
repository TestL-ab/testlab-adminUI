import axios from 'axios';

const baseURL = 'http://localhost:3000/api/experiment';

const getAllExperiments = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data)
}

// const getExperiment = async(id) => {
//   const response = await axios.get(`${baseURL}/`)
// }

const createExperiment = async(experiment) => {
  const response = await axios.post(baseURL, experiment);
  return response.data;
}

//update experiment functionality isn't yet defined in the api
// const updateExperiment = async(id, newExperiment) => {
//   await axios.put(`${baseURL}/${id}`, newExperiment);
// }

const deleteExperiment = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
}


const createVariants = async (id, variantsArr) => {
  //manipulate array into proper object for API request
  const response = await axios.post(`${baseURL}/${id}/variants`, variantsArr);
  return response.data;
}

const updateVariants = async (id, variantsArr) => {
  //manipulate array into proper object for API request
  const response = await axios.put(`${baseURL}/${id}/variants`, variantsArr);
  return response.data;
}

const experimentService = {
  getAllExperiments,
  createExperiment,
  deleteExperiment,
  createVariants,
  updateVariants

}

export default experimentService;