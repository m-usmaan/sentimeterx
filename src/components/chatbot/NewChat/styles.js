import styled from "styled-components";
import COLORS from "constants/colors";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2% 0;
  margin: auto;
  height: 100%;
`;

export const WelcomeContainer = styled.div`
  h1 {
    background: linear-gradient(90deg, #62a5e5, ${COLORS.DARK_BLUE});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
    font-weight: 700;
    margin: 0;
  }
  h2 {
    margin: 0;
    color: #cecece;
    font-size: 38px;
    font-weight: 700;
  }
`;
