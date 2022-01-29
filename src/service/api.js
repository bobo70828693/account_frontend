import axios from "axios";

// User
export const apiLogin = (data) =>
  axios.post(`/api/login`, data);
export const apiLogout = () =>
  axios.post(`/api/logout`);
export const apiUserSelf = () =>
  axios.post(`/api/self`);