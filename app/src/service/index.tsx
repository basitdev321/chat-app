import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create();
instance.interceptors.request.use(
  async (config) => {
    config.timeout = 10000;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
