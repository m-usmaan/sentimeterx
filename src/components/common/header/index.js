import { WarningOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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
import { logout } from "features/users/userSlice";
import { removeToken } from "utils";
import { logoutUser } from "features/users/apis";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    await logoutUser()
      .then((response) => {
        removeToken();
        dispatch(logout());
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {});
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
        <UserName>{user.full_name}</UserName>
        <UserAvatar>
          <AvatarIcon /> {/* TODO: Render user avatar */}
        </UserAvatar>
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;
