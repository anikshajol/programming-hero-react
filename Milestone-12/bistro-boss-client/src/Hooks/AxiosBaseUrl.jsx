import axios from "axios";

const AxiosBaseUrl = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default AxiosBaseUrl;
