import axios from "axios";

import { buildQueryString, getToken } from "utils";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${process.env.REACT_APP_SENTIMETER_BACKEND_API_URL}`;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.interceptors.request.use(
  (request) => {
    const authToken = getToken();
    if (authToken && shouldAddAuthHeader(request.url)) {
      request.headers.Authorization = `Token ${authToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);
// TODO: Check if response is 401 on any request, then unauth user from app and navigate to login (Response interceptor)

export function getRequest(url, queryParams = {}, options = {}) {
  let params = buildQueryString(queryParams);
  if (params) params = `?${params}`;
  return axiosClient
    .get(`${url}${params}`, options)
    .then((response) => response);
}

export function postRequest(url, payload, options = {}) {
  return axiosClient
    .post(`${url}`, payload, options)
    .then((response) => response);
}

export function patchRequest(url, payload, options = {}) {
  return axiosClient
    .patch(`${url}`, payload, options)
    .then((response) => response);
}

export function deleteRequest(url) {
  return axiosClient.delete(`${url}`).then((response) => response);
}

function shouldAddAuthHeader(request_url) {
  const excludedUrls = ["/login"];
  return !excludedUrls.some((url) => request_url.includes(url));
}
