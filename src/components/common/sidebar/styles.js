import styled from "styled-components";
import COLORS from "constants/colors";
import { Flex } from "antd";

export const mainContainerStyles = {
  backgroundColor: COLORS.SKY_BLUE,
  height: "100vh",
};

export const topContainerStyles = {
  padding: "15% 9%",
  width: "100%",
};

export const newChatButtonStyle = {
  color: COLORS.SKY_BLUE_DARKER,
  backgroundColor: COLORS.SKY_BLUE_DARK,
  border: "none",
  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
  width: "50%",
  fontSize: "1rem",
  gap: "1rem",
  fontWeight: "500",
};

export const dividerStyle = {
  borderColor: COLORS.WHITE,
  margin: 0,
};

export const bottomContainerStyles = {
  padding: "15% 9%",
  width: "100%",
};

export const MenuContainer = styled(Flex)`
  font-weight: 600;

  a {
    text-decoration: none;
    color: ${COLORS.GRAY};
    display: grid;
    grid-template-columns: 20% 1fr;
    font-size: 1rem;
    padding: 4% 10%;
    width: 100%;

    &.active {
      border-radius: 50px;
      background-color: ${COLORS.DARK_BLUE};
      color: ${COLORS.WHITE};

      svg path {
        fill: ${COLORS.WHITE};
      }
    }

    #label {
      display: flex;
      align-items: center;
    }

    svg {
      height: 25px;
      width: 25px;
    }
  }
`;
