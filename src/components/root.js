import { Layout } from "antd";
import React from "react";
// import { Outlet } from "react-router-dom";

// import { MainContentContainer, OutletContainer } from './styles';
import Sidebar from 'components/common/Sidebar';
// import Header from 'components/common/Header';

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

function MainContent() {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout style={layoutStyle}>
      <Sider width="20%">
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout>
  );
}

export default MainContent;
