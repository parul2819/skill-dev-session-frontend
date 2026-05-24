import axios from "axios";
import {API_BASE_URL} from "@utils/constants";

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000
});

api.interceptors.response.use(
  response => response,
  error => {
    const config = error.config;
    config.retryCount = config.retryCount || 0;

    if (error.code === "ECONNABORTED" && config.retryCount < 3) {
      config.retryCount += 1;
      return api(config);
    }

    return Promise.reject(error);
  }
);
//
// const RESTAURANT_API_URL = "/restaurants/";
// const MENU_ITEMS_API_URL = "/menu-items/";

export { RESTAURANT_API_URL };
export default api;
