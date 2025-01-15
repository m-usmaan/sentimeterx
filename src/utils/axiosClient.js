import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { buildQueryString, getToken } from "utils";
import { logout } from "features/users/userSlice";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${process.env.REACT_APP_SENTIMETER_BACKEND_API_URL}`;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    const reqInterceptor = (request) => {
      const authToken = getToken();
      if (authToken && shouldAddAuthHeader(request.url)) {
        request.headers.Authorization = `Token ${authToken}`;
      }
      return request;
    };

    const resInterceptor = (response) => {
      return response;
    };

    const errInterceptor = (error) => {
      if (error.response.status === 401) {
        toast.error("Session expired. Please login again.");
        dispatch(logout());
      }
      return Promise.reject(error);
    };

    const requestInterceptors = axiosClient.interceptors.request.use(
      reqInterceptor,
      errInterceptor
    );
    const responseInterceptors = axiosClient.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    setIsSet(true);

    return () => {
      axiosClient.interceptors.request.eject(requestInterceptors);
      axiosClient.interceptors.response.eject(responseInterceptors);
    };
  }, [dispatch]);

  return isSet && children;
};

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
