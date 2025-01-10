import styled from "styled-components";

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  #chart-container {
    display: flex;
    flex-direction: column;

    #headline {
      font-size: 18px;
      color: #353535;
    }

    canvas {
      margin-top: 2rem;
    }
  }
`;