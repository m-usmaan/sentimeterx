import { ALL_CONVERSATIONS_URL, HOME_URL, PINNED_CONVERSATIONS_URL } from "./urls";
import { ChatIcon, DiscoverIcon, PinIcon } from 'assets/SVGs';

const ROUTES = [
  {
    path: HOME_URL,
    Icon: DiscoverIcon,
    text: 'Discover Chats',
    element: <div>Chat with me</div>
  },
  {
    path: ALL_CONVERSATIONS_URL,
    Icon: ChatIcon,
    text: 'All Conversations',
    element: <div>All Conversations</div>
  },
  {
    path: PINNED_CONVERSATIONS_URL,
    Icon: PinIcon,
    text: 'Pin Conversations',
    element: <div>Pin Conversations</div>
  }
];

export default ROUTES;