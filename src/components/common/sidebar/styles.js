import styled from 'styled-components';

import COLORS from 'constants/colors';

export const SidebarContainer = styled.aside`
  grid-row: 1 / 3;   /* Span both rows (header and content) to take full height */
  grid-column: 1;    /* Place it in the first column */
  background-color: ${COLORS.SKY_BLUE};
  padding: 15% 9%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  width: 27px;
`;

export const NewChatButton = styled.button`
  border-radius: 50px;
  background-color: ${COLORS.SKY_BLUE_DARK};
  color: ${COLORS.SKY_BLUE_DARKER};
  display: flex;
  margin-top: 24px;
  gap: 13px;
  padding: 4%;
  border: none;
  cursor: pointer;
  width: 50%;
  line-height: 18px;
  font-weight: 600;
  font-style: normal;

  svg {
    height: 18px;
    width: 18px;
  }
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #fff;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  color: ${COLORS.GRAY};
  line-height: 28px;
  font-weight: 600;
  row-gap: 10px;

  a {
    text-decoration: none;
    color: inherit;
    &.active {
      border-radius: 50px;
      background-color: ${COLORS.DARK_BLUE};
      color: ${COLORS.WHITE};
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  gap: 13px;
  padding: 8px 23px;

  svg {
    height: 28px;
    width: 28px;
  }
`;