import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-state-api-oyms.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;