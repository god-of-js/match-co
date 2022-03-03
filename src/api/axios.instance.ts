import axios from "axios";

const instance = axios.create({
  baseURL: "http://178.63.13.157:8090/mock-api/api",
});

export default instance;
