import { Avatar, List, Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchChatFeedbackQuotes } from "components/chatbot/apis";
import { QuotesContainer } from "./styles";

const ChatFeedbackQuotes = ({ data, unique_uuid }) => {
  const [quotes, setQuotes] = useState(data);
  const [loading, setLoading] = useState(false);

  const populateData = async () => {
    setLoading(true);
    await fetchChatFeedbackQuotes(unique_uuid)
      .then((response) => {
        setQuotes(response.data.feedback_quotes);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!quotes) {
      populateData();
    }
    /* eslint-disable-next-line */
  }, []);

  return loading ? (
    <Spin />
  ) : !quotes ? (
    <Empty />
  ) : (
    <QuotesContainer>
      <strong id="headline">{quotes.query}</strong>
      <List
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 20px 5px 20px",
          maxHeight: "500px",
          overflow: "auto"
        }}
        pagination={{
          position: "top",
          align: "end",
          pageSize: 5
        }}
        dataSource={quotes.reviews}
        renderItem={(item, index) => (
          <List.Item key={index} extra={<pre style={{color: "gray"}}>{item.timestamp}</pre>}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={item.customer_id}
              description={item.text}
            />
          </List.Item>
        )}
      />
    </QuotesContainer>
  );
};

export default ChatFeedbackQuotes;
