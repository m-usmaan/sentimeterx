import React from "react";
import ChatSuggestions from "./ChatSuggestions";
import InputBox from "./InputBox";
import { useSelector } from "react-redux";

import { Container, WelcomeContainer } from "./styles";

const NewChat = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Container>
      <WelcomeContainer>
        <h1>Hello, {user.last_name}</h1>
        <h2>How can I help you today?</h2>
      </WelcomeContainer>
      <ChatSuggestions />
      <InputBox />
    </Container>
  );
};

export default NewChat;
