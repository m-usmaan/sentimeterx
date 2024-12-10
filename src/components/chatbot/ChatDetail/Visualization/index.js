import { Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchChatVisualization } from "components/chatbot/apis";

const ChatVisualization = ({ data, unique_uuid }) => {
  const [config, setConfig] = useState(data);
  const [loading, setLoading] = useState(false);

  const populateData = async () => {
    setLoading(true);
    await fetchChatVisualization(unique_uuid)
      .then((response) => {
        setConfig(response.data.visualization);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!config) {
      populateData();
    }
    /* eslint-disable-next-line */
  }, []);

  return loading ? <Spin /> : !config ? <Empty /> : <div>{config}</div>;
};

export default ChatVisualization;
