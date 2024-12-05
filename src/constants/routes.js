import { ALL_CHATS_URL, CHAT_DETAIL_URL, HOME_URL, PINNED_CHATS_URL } from "./urls";
import { ChatIcon, DiscoverIcon, PinIcon } from 'assets/SVGs';
import NewChat from "components/chatbot/NewChat";
import AllChats from "components/chatbot/AllChats";
import ChatDetail from "components/chatbot/ChatDetail";

const ROUTES = [
  {
    path: HOME_URL,
    Icon: DiscoverIcon,
    text: 'Discover Chats',
    element: <NewChat />,
    index: true
  },
  {
    path: ALL_CHATS_URL,
    Icon: ChatIcon,
    text: 'All Conversations',
    element: <AllChats />,
    index: true
  },
  {
    path: CHAT_DETAIL_URL,
    Icon: ChatIcon,
    text: 'Chat',
    element: <ChatDetail />,
    index: false
  },
  {
    path: PINNED_CHATS_URL,
    Icon: PinIcon,
    text: 'Pin Conversations',
    element: <AllChats pinned={true} />,
    index: true
  }
];

export default ROUTES;