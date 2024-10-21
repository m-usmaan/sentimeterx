import React from 'react';
import styled from 'styled-components';
import { WelcomeMessage, Note } from './styles';

const SuggestionsContainer = styled.div`
  ${'' /* background-color: orange; */}
`;

const SuggestionRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const SuggestionCard = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  width: 100%;
  padding: 27px 29px;
  display: flex;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 18px;
    padding: 20px;
  }
`;

const SuggestionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 67px;
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

const SuggestionContent = styled.div`
  display: flex;
  margin-left: 20px;
  flex-grow: 1;
  flex-direction: column;
  font-weight: 500;
`;

const SuggestionTitle = styled.h3`
  font-size: 17px;
  line-height: 29px;
  margin: 0;
`;

const SuggestionText = styled.p`
  color: #4c4c4c;
  font-size: 19px;
  line-height: 28px;
  margin: 9px 0 0;
`;

const suggestions = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df8632c0f1414157a9bec51431d281d5c35ec0cb7af065a5613cc2ef0e689358?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To identify problems',
    text: 'What are the most common issues people face?',
    color: '#2fb54c',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bbd32c71ac35d98788b35dd131649c93d1a13370ceaa9759f6e2890e3c6b516c?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To suggest improvement actions',
    text: 'What are the most common requests?',
    color: '#fcbb1b',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dedfcd2f3d29322b13ba10965d3d1a9e2179eeebe2f77b066c7120707dd6b4a6?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To evaluate score impact',
    text: 'What themes impact the score?',
    color: '#62a5e5',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b6e5937377ab84e90fcf050815a11874d677db299045360a59fb1a6b3c2372a?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To compare segments',
    text: 'Compare positive to negative feedback.',
    color: '#e20015',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fcedda5c82013b5fffdcc2db8c10f1cf032331159ca55f266c186b3fe45d501b?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To see sentiment and feedback',
    text: 'What do customers mention the most?',
    color: '#57439e',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49d8c642fbb256d38427d99f8c42a7a44a329e11dda4ce6bab12f9a4301aefa2?placeholderIfAbsent=true&apiKey=c1c84e4685234ce282d9bb2fac8cee71',
    title: 'To track change over time',
    text: 'Compare this month to last month.',
    color: '#909090',
  },
];

function ChatSuggestions() {
  return (
    <SuggestionsContainer>
      <WelcomeMessage>How can I help you today?</WelcomeMessage>
      {[0, 1, 2].map((rowIndex) => (
        <SuggestionRow key={rowIndex}>
          {suggestions.slice(rowIndex * 2, rowIndex * 2 + 2).map((suggestion, index) => (
            <SuggestionCard key={index}>
              <SuggestionIcon loading="lazy" src={suggestion.icon} alt={suggestion.title} />
              <SuggestionContent>
                <SuggestionTitle style={{ color: suggestion.color }}>{suggestion.title}</SuggestionTitle>
                <SuggestionText>{suggestion.text}</SuggestionText>
              </SuggestionContent>
            </SuggestionCard>
          ))}
        </SuggestionRow>
      ))}
      <Note>
        <strong>Note:</strong> Try to ask about specific themes and dimensions. Eg. "What people were saying about [Updates] in [September]". You can also refer to the{' '}
        <span style={{ fontWeight: 600, textDecoration: 'underline', color: '#62a5e5' }}>
          Example question
        </span>{' '}
        for guidance.
      </Note>
    </SuggestionsContainer>
  );
}

export default ChatSuggestions;