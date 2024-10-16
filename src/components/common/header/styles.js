import styled from 'styled-components';

import COLORS from 'components/constants/colors';

export const HeaderContainer = styled.header`
  grid-row: 1;       /* Place it in the first row */
  grid-column: 2;    /* Place it in the second column */
  background-color: ${COLORS.DARK_BLUE};
  display: grid;
  grid-template-columns: 15% 65% 20%; /* Set widths for each child */
  font-family: Poppins, sans-serif;
  color: ${COLORS.WHITE};
  justify-content: space-between;
  padding: 15px 0;
  font-family: "Poppins", sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 50px;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 25px;
  line-height: 34px;
`;

export const NavItem = styled.a`
  display: flex;
  gap: 4px;
  color: inherit;
  text-decoration: none;
  font-family: inherit;

  svg {
    margin: auto 0;
    height: 20px;
    width: 20px;
  }
`;

export const NavIcon = styled.img`
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 19px;
  margin: auto 0;
`;

export const ActiveNavItem = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 38px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  padding-right: 20px;
`;

export const UserName = styled.span`
  font-family: inherit;
`;

export const UserAvatar = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    height: 50px;
  }
`;