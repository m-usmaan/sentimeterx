import React from 'react';
import { Outlet } from "react-router-dom";

import { MainContentContainer, OutletContainer } from './styles';
import Sidebar from 'components/common/Sidebar';
import Header from 'components/common/Header';


function MainContent() {
  return (
    <MainContentContainer>
      <Sidebar />
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainContentContainer>
  );
}

export default MainContent;