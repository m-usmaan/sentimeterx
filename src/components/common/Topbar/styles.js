import styled from "styled-components";
import { Button, Dropdown as AntdDropdown } from "antd";
import COLORS from "constants/colors";

export const logoStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const menuStyles = {
  backgroundColor: COLORS.DARK_BLUE,
  color: COLORS.WHITE
};

export const Dropdown = styled(AntdDropdown)`
  color: ${COLORS.WHITE};
  font-size: 16px;
`;

export const LogoutButton = styled(Button)`
  color: ${COLORS.WHITE} !important;
  font-size: 14px;

  &:hover {
    border-color: ${COLORS.WHITE} !important;
  }
`;
