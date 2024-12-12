import { Empty, Spin } from "antd";
import * as mpld3 from "mpld3";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ChartContainer } from "./styles";
import { fetchChatVisualization } from "components/chatbot/apis";


const ChatVisualization = ({ data, unique_uuid }) => {
  const [config, setConfig] = useState(data);
  const [loading, setLoading] = useState(false);
  const [rendered, setRendered] = useState(false);

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
    setRendered(true);
    /* eslint-disable-next-line */
  }, []);

  return loading ? (
    <Spin />
  ) : !config ? (
    <Empty />
  ) : (
    <ChartContainer>
      <style></style>
      <div id={`fig_${config.id}`}></div>
      {rendered && (
        <script>
          function (){" "}
          {
            !(function (mpld3) {
              mpld3.draw_figure(`fig_${config.id}`, config);
            })(mpld3)
          }
        </script>
      )}
    </ChartContainer>
  );
};

export default ChatVisualization;
