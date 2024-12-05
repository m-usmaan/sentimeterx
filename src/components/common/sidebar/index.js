import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SidebarContainer,
  TopContainer,
  LogoImage,
  NewChatButton,
  Divider,
  MenuContainer,
  MenuItem,
} from "./styles";
import HamburgerIcon from "assets/icons/hamburger.svg";
import { default as Link } from "components/common/IsActiveNavLink";
import ROUTES from "constants/routes";
import { AddIcon } from "assets/SVGs";
import { HOME_URL } from "constants/urls";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <SidebarContainer>
      <TopContainer>
        <LogoImage loading="lazy" src={HamburgerIcon} alt="hamburger" />
        <NewChatButton onClick={() => navigate(HOME_URL)}>
          <AddIcon />
          <span>New Chat</span>
        </NewChatButton>
      </TopContainer>
      <Divider />
      <MenuContainer>
        {ROUTES.filter((route) => route.index).map(({ Icon, path, text }) => {
          return (
            <Link to={path} key={path}>
              <MenuItem>
                <Icon />
                <span>{text}</span>
              </MenuItem>
            </Link>
          );
        })}
      </MenuContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
