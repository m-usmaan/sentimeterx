import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  SuggestionsContainer,
  SuggestionCard,
  SuggestionIcon,
  SuggestionContent,
  SuggestionTitle,
  SuggestionText,
} from "./styles";
import { chatSuggestions, createChat } from "components/chatbot/apis";

const category_assets = {
  nps: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbd32c71ac35d98788b35dd131649c93d1a13370ceaa9759f6e2890e3c6b516c?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#fcbb1b",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dedfcd2f3d29322b13ba10965d3d1a9e2179eeebe2f77b066c7120707dd6b4a6?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#62a5e5",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b6e5937377ab84e90fcf050815a11874d677db299045360a59fb1a6b3c2372a?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#e20015",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcedda5c82013b5fffdcc2db8c10f1cf032331159ca55f266c186b3fe45d501b?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#57439e",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbd32c71ac35d98788b35dd131649c93d1a13370ceaa9759f6e2890e3c6b516c?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#fcbb1b",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b6e5937377ab84e90fcf050815a11874d677db299045360a59fb1a6b3c2372a?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71",
      color: "#e20015",
    },
  ],
};

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
    <div
      style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SuggestionsContainer wrap>
        {loading ? (
          <Spin style={{ margin: "auto" }} />
        ) : (
          suggestions.map((suggestion, index) => {
            const assets = category_assets[suggestion.category];
            const asset = assets[index % assets.length];
            return (
              <SuggestionCard
                key={suggestion.id}
                onClick={() => handleCreate(suggestion.text)}
              >
                <SuggestionIcon
                  loading="lazy"
                  src={asset.icon}
                  alt={suggestion.category}
                />
                <SuggestionContent>
                  <SuggestionTitle style={{ color: asset.color }}>
                    {suggestion.label}
                  </SuggestionTitle>
                  <SuggestionText>{suggestion.text}</SuggestionText>
                </SuggestionContent>
              </SuggestionCard>
            );
          })
        )}
      </SuggestionsContainer>
    </div>
  );
}

export default ChatSuggestions;
