import COLORS from "constants/colors";
import styled from "styled-components";

export const ChatDetailContainer = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-areas: 
    'nav nav'
    'header header'
    'sidebar main';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 20% 1fr;
`;

export const NavigationHeaderContainer = styled.header`
  background-color: #E2EFFB;
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

export const ChatNavigationContainer = styled.div`
  display: flex;
  width: 15%;
  gap: 10%;
  align-items: center;
  justify-content: end;

  p {
    font-size: 12px;
    color: ${COLORS.GRAY}
  }
  svg {
    height: 13px;
    width: 13px;
    cursor: pointer;
  }
`;

export const ChatDetailHeaderContainer = styled.div`
  grid-area: header;
  border-bottom: 2px solid #ECE9E9;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1.5% 2.5%;
  align-items: center;
  gap: 2%;
  color: ${COLORS.GRAY};
  background-color: #F5F5F5;

  span {
    font-size: 11px;
  }
`;

export const ChatDetailSidebarContainer = styled.nav`
  grid-area: sidebar;
  border-right: 2px solid #ECE9E9;
  padding: 5%;
  background-color: #F5F5F5;
  border-radius: 0 0 0 10px;
`;

export const ChatDetailContentContainer = styled.aside`
  grid-area: main;
  background-color: #F5F5F5;
  border-radius: 0 0 10px 0;
  padding: 2%;
`;