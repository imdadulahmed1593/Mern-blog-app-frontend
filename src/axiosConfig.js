import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api/",
  baseURL: "https://blog-app-api-wf9d.onrender.com/api/",
});

export default instance;
