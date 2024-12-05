import { getRequest } from "utils/axiosClient";
import { ALL_CHATS_API_URL } from "./constants";

export const allChats = async (page = 1) => getRequest(ALL_CHATS_API_URL(page));
