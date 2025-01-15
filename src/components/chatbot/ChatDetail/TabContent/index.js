import React, { useState } from "react";

import Footer from "../Footer";
import { Content } from "./styles";
import ChatAnalysis from "../Analysis";
import ChatFeedbackQuotes from "../Feedback Quotes";
import ChatSummary from "../Summary";
import ChatVisualization from "../Visualization";
import { ReactComponent as SIcon } from "assets/icons/s.svg";

const TabContent = ({ data, unique_uuid, rack }) => {
  const [stats] = useState({});

  const racks = {
    summary: ChatSummary,
    detailed_analysis: ChatAnalysis,
    visualization: ChatVisualization,
    feedback_quotes: ChatFeedbackQuotes,
  };
  const ActiveRack = racks[rack];

  return (
    <Content>
      <div id="icon">
        <SIcon />
      </div>
      <div id="detail">
        <ActiveRack data={data[rack]} unique_uuid={unique_uuid} />
      </div>
      <div id="footer">
        <Footer stats={stats} />
      </div>
    </Content>
  );
};

export default TabContent;
