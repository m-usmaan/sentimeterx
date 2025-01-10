import { Button, Divider, Flex } from "antd";
import { default as AntdIcon } from "@ant-design/icons";
import React from "react";
import { HamburgerIcon } from "assets/SVGs";
import {
  bottomContainerStyles,
  dividerStyle,
  mainContainerStyles,
  newChatButtonStyle,
  topContainerStyles,
  MenuContainer,
} from "./styles";
import { PlusOutlined } from "@ant-design/icons";
import { HOME_URL } from "constants/urls";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";

import { default as Link } from "components/common/IsActiveNavLink";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Flex align="start" style={mainContainerStyles} vertical>
      <Flex style={topContainerStyles} gap="large" vertical>
        <AntdIcon component={HamburgerIcon} />
        <Button
          style={newChatButtonStyle}
          size="large"
          shape="round"
          icon={<PlusOutlined />}
          onClick={() => navigate(HOME_URL)}
        >
          New Chat
        </Button>
      </Flex>
      <Divider style={dividerStyle} />
      <MenuContainer style={bottomContainerStyles} vertical gap="middle">
        {ROUTES.filter((route) => route.index).map(({ Icon, path, text }) => {
          return (
            <Link to={path} key={path}>
              <Icon />
              <span id="label">{text}</span>
            </Link>
          );
        })}
      </MenuContainer>
    </Flex>
  );
}

export default Sidebar;
