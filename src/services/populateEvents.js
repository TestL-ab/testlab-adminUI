import axios from "axios";
import { v4 } from "uuid";
const baseUrl = "http://localhost:3000/api";


const variants = [244, 245]; // Variant ids that must exist in the feature database
const weights = [0.5, 0.5]; // Weight for each id -- total 1.0
const interval = 15; // Days experiment will run
const hours = interval * 24;
const numData = 300; // Number of data points to generate

const getVariant = (randomNum) => {
  let runningTotal = 0;
  for (let i = 0; i < variants.length; i++) {
    runningTotal += weights[i];
    if (randomNum <= runningTotal) {
      return i;
    }
  }
};

const makeData = async (num) => {
  for (let i = 1; i <= num; i++) {
    let randomNum = Math.random();
    let variantId = getVariant(randomNum);
    let newUser = {
      id: v4(),
      variant_id: variants[variantId],
      ip_address: "192.168.0.1",
    };
    let user = await createUser(newUser);
    let repeatEvent = (Math.random() < 0.5);
    console.log("outside of while loop");
    while (repeatEvent) {
      console.log("in while loop");
      randomNum = Math.random(); // new random number to distribute interval
      const date = new Date(2023, 3, 1); // current timestamp
      date.setHours(date.getHours() + hours * randomNum); // add random hour within interval
      const newTimestamp = date.toISOString(); // convert to ISO format

      let newEvent = {
        variant_id: variants[variantId],
        user_id: newUser.id,
        time_stamp: newTimestamp,
      };
      console.log(newEvent);

      let test = await createEvent(newEvent);
      if (Math.random() < 0.7) repeatEvent = false;
    }
  }
};

const createUser = async ({ id, variant_id, ip_address }) => {
  try {
    const response = await axios.post(`${baseUrl}/users`, {
      id,
      variant_id,
      ip_address,
    });
    return response.data;
  } catch (error) {
    return error.data;
  }
};

const createEvent = async ({ variant_id, user_id, time_stamp }) => {
  try {
    const response = await axios.post(`${baseUrl}/events`, {
      variant_id,
      user_id,
      time_stamp,
    });
    return response.data;
  } catch (error) {
    return error.data;
  }
};

// makeData(numData);


export default makeData;