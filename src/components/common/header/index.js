import { WarningOutlined } from "@ant-design/icons";
import React from "react";
import { Popconfirm } from "antd";

import {
  HeaderContainer,
  NavigationContainer,
  Logo,
  NavItem,
  UserInfo,
  UserName,
  UserAvatar,
} from "./styles";
import { SentimeterIcon, ArrowDownIcon, AvatarIcon } from "assets/SVGs";
import { logoutUser } from "utils";

function Header() {
  const handleLogout = () => {
    logoutUser();
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <Logo>
        <SentimeterIcon />
      </Logo>
      <NavigationContainer>
        <NavItem href="#">
          <span>Dashboards</span>
          <ArrowDownIcon />
        </NavItem>
        <NavItem href="#">
          <span>Analysis</span>
          <ArrowDownIcon />
        </NavItem>
      </NavigationContainer>
      <UserInfo>
        <Popconfirm
          title="Confirm Logout"
          description="Are you sure to logout?"
          onConfirm={handleLogout}
          okText="Yes"
          icon={<WarningOutlined />}
        >
          <p>Logout</p>
        </Popconfirm>
        <UserName>Muhammad Usman</UserName>
        <UserAvatar>
          <AvatarIcon />
        </UserAvatar>
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;
