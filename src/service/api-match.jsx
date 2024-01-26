import axios from "axios";

const apiMatchInstance = axios.create({
  baseURL: "http://localhost:8080/match",
});

export default apiMatchInstance;
