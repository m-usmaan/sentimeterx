import { Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchChatFeedbackQuotes } from "components/chatbot/apis";

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

  return loading ? <Spin /> : !quotes ? <Empty /> : <div>{quotes}</div>;
};

export default ChatFeedbackQuotes;
