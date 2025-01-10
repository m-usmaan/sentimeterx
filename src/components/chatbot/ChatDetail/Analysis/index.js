import { Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AnalysisContainer } from "./styles";
import { ReactComponent as SIcon } from "assets/icons/s.svg";
import { fetchChatAnalysis } from "components/chatbot/apis";

const ChatAnalysis = ({ data, unique_uuid }) => {
  const [analysis, setAnalysis] = useState(data);
  const [loading, setLoading] = useState(false);

  const populateData = async () => {
    setLoading(true);
    await fetchChatAnalysis(unique_uuid)
      .then((response) => {
        setAnalysis(response.data.detailed_analysis);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!analysis) {
      populateData();
    }
    /* eslint-disable-next-line */
  }, []);

  return loading ? (
    <Spin />
  ) : !analysis ? (
    <Empty />
  ) : (
    <AnalysisContainer>
      <SIcon />
      <div id="analysis-container">
        <strong id="headline">{analysis.analysis.headline}</strong>
        <p>{analysis.analysis.detail}</p>
      </div>
    </AnalysisContainer>
  );
};

export default ChatAnalysis;
