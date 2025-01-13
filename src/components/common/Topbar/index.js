import Icon, { WarningOutlined, DownOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { SentimeterIcon, AvatarIcon } from "assets/SVGs";
import { logout } from "features/users/userSlice";
import { removeToken } from "utils";
import { logoutUser } from "features/users/apis";
import { Col, Row, Flex, Space } from "antd";
import {
  AppstoreOutlined,
  ApartmentOutlined,
  AntCloudOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { logoStyles, LogoutButton, Dropdown } from "./styles";
import COLORS from "constants/colors";

const navItems = {
  Dashboards: [
    {
      label: "Segments",
      key: "segments",
      icon: <ApartmentOutlined />,
    },
    {
      label: "Word Cloud",
      key: "cloud",
      icon: <AntCloudOutlined />,
    },
  ],
  Analysis: [
    {
      label: "Feedback",
      key: "feedback",
      icon: <MailOutlined />,
    },
    {
      label: "Store Wise",
      key: "store_wise",
      icon: <AppstoreOutlined />,
    },
  ],
};

function Topbar() {
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
    <Row>
      <Col span={2} style={logoStyles}>
        <Icon
          component={SentimeterIcon}
          draggable
          style={{ width: "120px", height: "36px" }}
        />
      </Col>
      <Col span={17} style={{ padding: "0 4%" }}>
        <Flex style={{ gap: "4%" }}>
          {Object.entries(navItems).map(([title, items]) => {
            return (
              <Dropdown
                menu={{
                  items,
                }}
                key={title}
              >
                <a onClick={(e) => e.preventDefault()} href="/">
                  <Space>
                    {title}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            );
          })}
        </Flex>
      </Col>
      <Col span={5}>
        <Flex
          align="center"
          justify="space-between"
          style={{ color: COLORS.WHITE, fontSize: "14px" }}
        >
          <Popconfirm
            title="Confirm Logout"
            description="Are you sure to logout?"
            onConfirm={handleLogout}
            okText="Yes"
            icon={<WarningOutlined />}
          >
            <LogoutButton type="text">Logout</LogoutButton>
          </Popconfirm>
          <p>{user.full_name}</p>
          <Icon
            component={AvatarIcon}
            draggable
            style={{ width: "40px", height: "40px" }}
          />
        </Flex>
      </Col>
    </Row>
  );
}

export default Topbar;
