import COLORS from "constants/colors";
import styled from "styled-components";

export const AnalysisContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  #analysis-container {
    display: flex;
    flex-direction: column;

    #headline {
      font-size: 18px;
      color: #353535;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin-top: 2rem;
      color: ${COLORS.LIGHT_GRAY}
    }
  }
`;