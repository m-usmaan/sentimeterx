import { ALL_CONVERSATIONS_URL, HOME_URL, PINNED_CONVERSATIONS_URL } from "./urls";
import { ChatIcon, DiscoverIcon, PinIcon } from 'assets/SVGs';
import NewChat from "components/chatbot/NewChat";
import AllChats from "components/chatbot/AllChats";
import ChatDetail from "components/chatbot/ChatDetail";

const ROUTES = [
  {
    path: HOME_URL,
    Icon: DiscoverIcon,
    text: 'Discover Chats',
    element: <NewChat />
  },
  {
    path: ALL_CONVERSATIONS_URL,
    Icon: ChatIcon,
    text: 'All Conversations',
    element: <AllChats />
  },
  {
    path: 'chats/:id',
    Icon: ChatIcon,
    text: 'Chat',
    element: <ChatDetail />
  },
  {
    path: PINNED_CONVERSATIONS_URL,
    Icon: PinIcon,
    text: 'Pin Conversations',
    element: <div>Pin Conversations</div>
  }
];

export default ROUTES;