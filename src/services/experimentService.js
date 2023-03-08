import axios from 'axios';

const baseURL = 'http://localhost:3000/api/experiment';

const getAllExperiments = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// const getExperiment = async(id) => {
//   const response = await axios.get(`${baseURL}/`)
// }

const createExperiment = async(experiment) => {
  try {
    const response = await axios.post(baseURL, experiment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//update experiment functionality isn't yet defined in the api
// const updateExperiment = async(id, newExperiment) => {
//   await axios.put(`${baseURL}/${id}`, newExperiment);
// }

const deleteExperiment = async (id) => {
  try {
    await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    throw error;
  }
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