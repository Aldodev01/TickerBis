import axios from "axios";

export const contextApi = axios.create({
  baseURL: "https://v1.imezi.com:2000",
  // baseURL: API_BASEURL_PROD,
  // baseURL: API_BASEURL_LOCAL,
});
