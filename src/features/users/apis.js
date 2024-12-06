import { postRequest } from "utils/axiosClient";
import { LOGIN_API_URL } from "./constants";

export const loginUser = async (data) => postRequest(LOGIN_API_URL, data);
