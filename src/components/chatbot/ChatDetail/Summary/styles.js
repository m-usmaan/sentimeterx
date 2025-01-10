import COLORS from "constants/colors";
import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
`;

export const SummaryDetailContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  flex-direction: column;

  #headline {
    font-size: 18px;
    color: #353535;
  }

  ul {
    font-size: 16px;
    .comparison-card {
      margin-left: 2ch;
      color: ${COLORS.LIGHT_GRAY}
    }

    li {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }

  #footer {
    margin-top: 2rem;
    font-size: 15px;
    color: ${COLORS.LIGHT_GRAY};
    strong {GRAY
      color: ${COLORS.LIGHT_GRAY};
    }
  }
`;

export const ComparisonGraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin-top: 10px;
  background-color: white;
  height: 50px;
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 10px 5px 10px;

  #label {
    font-size: 11px;
  }
`;