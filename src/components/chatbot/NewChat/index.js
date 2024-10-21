import React from 'react';
import ChatSuggestions from './ChatSuggestions';
import InputBox from './InputBox';

import { ChatContainer } from './styles';

const NewChat = () => {
  return (
    <ChatContainer>
      <ChatSuggestions />
      <InputBox />
    </ChatContainer>
  );
}

export default NewChat;