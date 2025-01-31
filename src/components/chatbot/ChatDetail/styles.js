import COLORS from "constants/colors";
import styled from "styled-components";

export const ChatDetailContainer = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-areas:
    "nav nav"
    "header header"
    "main main";
  grid-template-rows: auto auto 1fr;
  height: 100%;
`;

export const NavigationHeaderContainer = styled.header`
  background-color: #e2effb;
  grid-area: nav;
  margin-bottom: 2px;
  border-radius: 10px 10px 0 0;
  padding: 1.5% 2.5%;
  display: flex;
  align-items: center;
`;

export const ActionIconsContainer = styled.div`
  display: flex;
  width: 85%;
  gap: 1.5%;
  svg {
    height: 13px;
    width: 13px;
    cursor: pointer;
  }
  span {
    display: inline-flex;
  }
`;

export const ChatDetailHeaderContainer = styled.div`
  grid-area: header;
  border-bottom: 2px solid #ece9e9;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1.5% 2.5%;
  align-items: center;
  gap: 2%;
  color: ${COLORS.GRAY};
  background-color: #f5f5f5;

  span {
    font-size: 11px;
  }
`;

export const ChatDetailContentContainer = styled.aside`
  grid-area: main;
  background-color: #f5f5f5;
  border-radius: 0 0 10px 0;

  #content {
    display: grid;
    grid-template-areas:
    "icon detail"
    "icon footer";
    grid-template-rows: auto auto;
    grid-template-columns: auto 1fr;
    gap: 20px;

    #icon {
      grid-area: icon;
    }
    #detail {
      grid-area: detail;
      padding-top: 5px;
    }
    #footer {
      grid-area: footer;
      margin-top: 2rem;
    }
  }
`;
