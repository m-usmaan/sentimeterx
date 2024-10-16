import React from 'react';
import { HeaderContainer, NavigationContainer, Logo, NavItem, UserInfo, UserName, UserAvatar } from './styles';
import { SentimeterIcon, ArrowDownIcon, AvatarIcon } from 'assets/SVGs';

function Header() {
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
        <UserName>Muhammad Usman</UserName>
        <UserAvatar>
          <AvatarIcon />
        </UserAvatar>
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;