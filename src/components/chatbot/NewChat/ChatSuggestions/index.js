import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  SuggestionsContainer,
  SuggestionsCards,
  SuggestionCard,
  SuggestionIcon,
  SuggestionContent,
  SuggestionTitle,
  SuggestionText,
} from "./styles";
import { chatSuggestions, createChat } from "components/chatbot/apis";

function ChatSuggestions() {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const populateData = async () => {
    setLoading(true);
    await chatSuggestions()
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    populateData();
  }, []);

  const handleCreate = async (user_query) => {
    await createChat({ user_query })
      .then((response) => {
        navigate(`/chats/${response.data.unique_uuid}`);
      })
      .catch((error) =>
        toast.error(`${error.response.status}: ${error.response.statusText}`)
      );
  };

  return (
    <SuggestionsContainer>
      {loading ? (
        <Spin />
      ) : (
        <SuggestionsCards>
          {suggestions.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              onClick={() => handleCreate(suggestion.text)}
            >
              <SuggestionIcon
                loading="lazy"
                src={suggestion.icon}
                alt={suggestion.category}
              />
              <SuggestionContent>
                <SuggestionTitle style={{ color: suggestion.color }}>
                  {suggestion.label}
                </SuggestionTitle>
                <SuggestionText>{suggestion.text}</SuggestionText>
              </SuggestionContent>
            </SuggestionCard>
          ))}
        </SuggestionsCards>
      )}
    </SuggestionsContainer>
  );
}

export default ChatSuggestions;
