import axios from "axios";

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = "https://api.themoviedb.org/3/tv";

axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
