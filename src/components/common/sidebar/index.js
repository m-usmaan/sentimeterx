import React from 'react';

import { SidebarContainer, TopContainer, LogoImage, NewChatButton, Divider, MenuContainer, MenuItem } from './styles';
import HamburgerIcon from "assets/icons/hamburger.svg"
import { default as Link } from 'components/common/IsActiveNavLink';
import ROUTES from 'constants/routes';
import {AddIcon } from 'assets/SVGs';

function Sidebar() {
  return (
    <SidebarContainer>
      <TopContainer>
        <LogoImage loading="lazy" src={HamburgerIcon} alt="hamburger" />
        <NewChatButton>
          <AddIcon />
          <span>New Chat</span>
        </NewChatButton>
      </TopContainer>
      <Divider />
      <MenuContainer>
        {
          ROUTES.map(({ Icon, path, text}) => {
            return (
                <Link to={path} key={path}>
                <MenuItem>
                  <Icon />
                  <span>{text}</span>
                </MenuItem>
              </Link>
            );
          })
        }
      </MenuContainer>
    </SidebarContainer>
  );
}

export default Sidebar;