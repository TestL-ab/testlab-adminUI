import axios from 'axios';
// import { response } from 'express';

const baseURL = 'http://localhost:3000/api/events';

const getAllEventData = async() => {
  try {
    const response = await axios.get(baseURL);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

const visualizerService = { getAllEventData }

export default visualizerService;