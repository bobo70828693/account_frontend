import axios from "axios";
import jwtToken from "./jwt"

axios.interceptors.request.use(
  function(config) {
    if (jwtToken.getToken()) {
      config.headers.Authorization = 'Bearer ' + jwtToken.getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);