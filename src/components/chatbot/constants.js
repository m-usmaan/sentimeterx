export const CREATE_CHAT_API_URL = "/chats/";
export const ALL_CHATS_API_URL = "/chats/";
export const CHAT_DETAIL_API_URL = (unique_uuid) => `/chats/${unique_uuid}/`;
export const PIN_CHAT_API_URL = (unique_uuid) => `${CHAT_DETAIL_API_URL(unique_uuid)}toggle-pinned/`;