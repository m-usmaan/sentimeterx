import { Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// import { ReactComponent as SIcon } from "assets/icons/s.svg";
import { fetchChatSummary } from "components/chatbot/apis";

const ChatSummary = ({ data, unique_uuid }) => {
  const [summary, setSummary] = useState(data);
  const [loading, setLoading] = useState(false);

  const populateData = async () => {
    setLoading(true);
    await fetchChatSummary(unique_uuid)
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!summary) {
      populateData();
    }
    /* eslint-disable-next-line */
  }, []);

  return loading ? <Spin /> : !summary ? <Empty /> : <div>{summary}</div>;
};

export default ChatSummary;
