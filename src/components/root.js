import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from 'components/common/Sidebar';
import Topbar from "./common/Topbar";
import { layoutStyle, contentStyle, headerStyles } from "./styles";

function MainContent() {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout style={layoutStyle}>
      <Sider width="20%">
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={headerStyles}><Topbar /></Header>
        <Content style={contentStyle}><Outlet /></Content>
      </Layout>
    </Layout>
  );
}

export default MainContent;
