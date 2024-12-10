export const ALL_CHATS_API_URL = "/chats/";
export const CREATE_CHAT_API_URL = "/chats/";

export const CHAT_ANALYSIS_API_URL = (unique_uuid) => `/chats/${unique_uuid}/detailed-analysis/`;
export const CHAT_FEEDBACK_QUOTES_API_URL = (unique_uuid) => `/chats/${unique_uuid}/feedback-quotes/`;
export const CHAT_DETAIL_API_URL = (unique_uuid) => `/chats/${unique_uuid}/`;
export const CHAT_SUMMARY_API_URL = (unique_uuid) => `/chats/${unique_uuid}/summary/`;
export const CHAT_VISUALIZATION_API_URL = (unique_uuid) => `/chats/${unique_uuid}/visualization/`;
export const PIN_CHAT_API_URL = (unique_uuid) => `${CHAT_DETAIL_API_URL(unique_uuid)}toggle-pinned/`;
