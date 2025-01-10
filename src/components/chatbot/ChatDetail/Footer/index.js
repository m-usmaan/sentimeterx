import React from "react";

import { FooterContainer } from "./styles";

const Footer = ({ stats }) => {
  return (
    <FooterContainer>
      <strong>Comments:</strong> {stats.comments ? stats.comments : "..."}
      <br />
      <br />
      <strong>Datasets:</strong> {stats.datasets ? stats.datasets : "..."}
    </FooterContainer>
  );
};

export default Footer;
