import styled from "styled-components";
import { Flex } from "antd";

export const SuggestionsContainer = styled(Flex)`
  padding: 4% 0;
`;

export const SuggestionCard = styled.div`
  width: 40%;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  padding: 3%;
  display: flex;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    z-index: 1;
  }
`;

export const SuggestionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 67px;
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

export const SuggestionContent = styled.div`
  display: flex;
  margin-left: 20px;
  flex-grow: 1;
  flex-direction: column;
  font-weight: 500;
`;

export const SuggestionTitle = styled.h3`
  font-size: 17px;
  line-height: 29px;
  margin: 0;
`;

export const SuggestionText = styled.p`
  color: #4c4c4c;
  font-size: 19px;
  line-height: 28px;
  margin: 9px 0 0;
`;
