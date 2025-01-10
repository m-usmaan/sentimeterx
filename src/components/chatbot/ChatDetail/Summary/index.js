import { Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  ComparisonGraph,
  SummaryContainer,
  SummaryDetailContainer,
} from "./styles";
import { ReactComponent as SIcon } from "assets/icons/s.svg";
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

  const scoreColorMap = {
    1: "green",
    0: "orange",
    "-1": "red",
  };

  return loading ? (
    <Spin />
  ) : !summary ? (
    <Empty />
  ) : (
    <SummaryContainer>
      <SIcon />
      <SummaryDetailContainer>
        <strong id="headline">{summary.summary.headline}</strong>
        <ul id="comparison">
          {summary.summary.comparison.map((obj) => {
            return (
              <li className="comparison-card" key={obj.decription}>
                <span>{obj.description}</span>
                <ComparisonGraph>
                  <p id="label">{obj.chart.label_1}</p>
                  <strong>
                    <p
                      id="value"
                      style={{ color: scoreColorMap[obj.score]}}
                    >
                      {obj.chart.value_1}
                    </p>
                  </strong>
                </ComparisonGraph>
              </li>
            );
          })}
        </ul>
        <div id="footer">
          <strong>Comments:</strong> {summary.comments}
          <br />
          <br />
          <strong>Datasets:</strong> {summary.datasets}
        </div>
      </SummaryDetailContainer>
    </SummaryContainer>
  );
};

export default ChatSummary;
