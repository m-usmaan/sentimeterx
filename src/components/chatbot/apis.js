import { getRequest, deleteRequest, postRequest } from "utils/axiosClient";
import {
  ALL_CHATS_API_URL,
  CHAT_SUGGESTIONS_API_URL,
  CREATE_CHAT_API_URL,
  CHAT_ANALYSIS_API_URL,
  CHAT_FEEDBACK_QUOTES_API_URL,
  CHAT_DETAIL_API_URL,
  CHAT_SUMMARY_API_URL,
  CHAT_VISUALIZATION_API_URL,
  DATASETS_API_URL,
  PIN_CHAT_API_URL,
} from "./constants";

export const allChats = async (queryParams = {}) => getRequest(ALL_CHATS_API_URL, queryParams);
export const chatSuggestions = async (queryParams = {}) => getRequest(CHAT_SUGGESTIONS_API_URL, queryParams);
export const createChat = async (data) => postRequest(CREATE_CHAT_API_URL, data);
export const dataSets = async (queryParams = {}) => getRequest(DATASETS_API_URL, queryParams);
export const fetchChat = async (unique_uuid) => getRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const fetchChatAnalysis = async (unique_uuid) => getRequest(CHAT_ANALYSIS_API_URL(unique_uuid));
export const fetchChatFeedbackQuotes = async (unique_uuid) => getRequest(CHAT_FEEDBACK_QUOTES_API_URL(unique_uuid));
export const fetchChatSummary = async (unique_uuid) => getRequest(CHAT_SUMMARY_API_URL(unique_uuid));
export const fetchChatVisualization = async (unique_uuid) => getRequest(CHAT_VISUALIZATION_API_URL(unique_uuid));
export const deleteChat = async (unique_uuid) => deleteRequest(CHAT_DETAIL_API_URL(unique_uuid));
export const pinChat = async (unique_uuid) => getRequest(PIN_CHAT_API_URL(unique_uuid));
