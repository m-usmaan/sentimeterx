import { getRequest, deleteRequest } from "utils/axiosClient";
import { ALL_CHATS_API_URL, CHAT_DETAIL_API_URL, PIN_CHAT_API_URL } from "./constants";

export const allChats = async (page = 1) => getRequest(ALL_CHATS_API_URL(page));
export const fetchChat = async (unique_uuid) => getRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const deleteChat = async (unique_uuid) => deleteRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const pinChat = async (unique_uuid) => getRequest(PIN_CHAT_API_URL(unique_uuid));
