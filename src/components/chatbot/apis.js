import { getRequest, deleteRequest, postRequest } from "utils/axiosClient";
import { ALL_CHATS_API_URL, CREATE_CHAT_API_URL, CHAT_DETAIL_API_URL, PIN_CHAT_API_URL } from "./constants";

export const allChats = async (queryParams = {}) => getRequest(ALL_CHATS_API_URL, queryParams);
export const createChat = async (data) => postRequest(CREATE_CHAT_API_URL, data);
export const fetchChat = async (unique_uuid) => getRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const deleteChat = async (unique_uuid) => deleteRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const pinChat = async (unique_uuid) => getRequest(PIN_CHAT_API_URL(unique_uuid));
