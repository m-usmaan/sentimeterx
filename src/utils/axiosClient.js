import axios from "axios";

import { EXTRACT_ORGANIZATION_SLUG } from ".";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${process.env.REACT_APP_SENTIMETER_BACKEND_API_URL}`;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.interceptors.request.use((request) => {
  const authToken = localStorage.getItem(
    `${EXTRACT_ORGANIZATION_SLUG()}_token`
  );

  if (authToken) {
    request.headers.Authorization = `Token ${authToken}`;
  }
  return request;
});

export function getRequest(url, options = {}) {
  return axiosClient.get(`${url}`, options).then((response) => response);
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
