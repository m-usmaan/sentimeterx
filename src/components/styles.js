import styled from 'styled-components';

import COLORS from '../constants/colors';


export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 295px 1fr;  /* 250px wide sidebar, and the rest for content */
  grid-template-rows: auto 1fr;      /* Header takes its height, main content fills the rest */
  height: 100vh;                     /* Full viewport height */
`;

export const OutletContainer = styled.div`
  grid-row: 2;       /* Place it in the second row */
  grid-column: 2;    /* Place it in the second column */
  background-color: ${COLORS.WHITE};
  padding: 2%;
`;