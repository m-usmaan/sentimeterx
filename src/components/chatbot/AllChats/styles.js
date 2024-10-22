import COLORS from 'constants/colors';
import styled from 'styled-components';

export const AllChatsContainer = styled.section`
  max-height: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 1%;
`;

export const ChatsListContainer = styled.div`
  overflow-y: auto;
  max-height: 78vh;
  padding: 1%;
`;

export const ChatsList = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  background-color: ${COLORS.LIGHTER_GRAY};
  border-radius: 5px;
  padding: 1.5%;
  display: grid;
  grid-template-columns: auto auto auto 1fr auto;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;

  input[type='checkbox'] {
    cursor: pointer;
  }

  svg {
    height: 12px;
    width: 16px;
    cursor: pointer;
  }

  p, span {
    font-size: 14px;
    color: ${COLORS.GRAY};
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    z-index: 1;
  }
`;