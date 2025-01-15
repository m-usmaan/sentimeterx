import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    "icon detail"
    "icon footer";
  grid-template-rows: auto auto;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 0 3%;

  #icon {
    grid-area: icon;
  }
  #detail {
    grid-area: detail;
    padding-top: 5px;
  }
  #footer {
    grid-area: footer;
    margin-top: 2rem;
  }
`;
