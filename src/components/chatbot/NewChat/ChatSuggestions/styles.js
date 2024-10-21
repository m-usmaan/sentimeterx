import styled from 'styled-components';
import COLORS from 'constants/colors';

export const SuggestionsContainer = styled.div`
  max-height: 90%;
  display: flex;
  flex-direction: column;
`;

export const WelcomeContainer = styled.div`
  h1 {
    background: linear-gradient(90deg, #62A5E5, ${COLORS.DARK_BLUE});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    margin: 0;
  }
  h2 {
    margin: 0;
    color: #CECECE;
    font-weight: 600;
  }
`;

export const SuggestionsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 2% 0;
`;

export const SuggestionCard = styled.div`
  max-width: 40%;
  min-width: 40%;
  border-radius: 6px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  padding: 3%;
  display: flex;
  cursor: pointer;
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

export const Note = styled.div`
  color: ${COLORS.GRAY};

  a {
    color: #62A5E5;
    font-weight: 600;
  }
`;