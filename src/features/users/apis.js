import { postRequest } from "utils/axiosClient";
import { LOGIN_API_URL, LOGOUT_API_URL } from "./constants";

export const loginUser = async (data) => postRequest(LOGIN_API_URL, data);
export const logoutUser = async (data) => postRequest(LOGOUT_API_URL, data);
