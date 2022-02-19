import axios from "axios";

// User
export const apiLogin = (data) =>
  axios.post(`/api/login`, data);
export const apiLogout = () =>
  axios.post(`/api/logout`);
export const apiUserSelf = () =>
  axios.post(`/api/self`);

// Stock
export const apiStockSearchList = (params) =>
  axios.get(`/api/stock`, { params : params })