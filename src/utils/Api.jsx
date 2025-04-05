import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchApi = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${endpoint}&key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default fetchApi;
