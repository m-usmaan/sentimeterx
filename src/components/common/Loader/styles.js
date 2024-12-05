import COLORS from "constants/colors";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid ${COLORS.LIGHTER_GRAY};
    border-top: 10px solid ${COLORS.SKY_BLUE_DARKER};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;

export default LoaderContainer;
