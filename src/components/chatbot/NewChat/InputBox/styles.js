import styled from 'styled-components';
import COLORS from 'constants/colors';

export const InputContainer = styled.form`
  border-radius: 9px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const InputHeader = styled.div`
  border-radius: 9px 9px 0 0;
  background-color: ${COLORS.LIGHTER_GRAY};
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 5%;
  padding: 1% 2%;
`;

export const DatasetInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;


export const Label = styled.span`
  color: ${COLORS.GRAY};
`;

export const ChangeButton = styled.button`
  border-radius: 9px;
  background-color: ${COLORS.SKY_BLUE_DARKER};
  font-size: inherit;
  color: ${COLORS.WHITE};
  line-height: 2;
  padding: 2px 19px;
  border: none;
  cursor: pointer;
`;

export const DatasetDropdownContainer = styled.fieldset`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  bottom: 2.4rem;
  border-radius: 9px;
  border: none;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: ${COLORS.WHITE};
  width: 230%;
  display: ${(props) => props.display};
`;

export const Legend = styled.div`
  background-color: ${COLORS.SKY_BLUE_DARKER};
  font-weight: 500;
  padding: 20px;
  color: ${COLORS.WHITE};
  border-radius: 9px 9px 0 0;
  font-size: inherit;
  padding: 2% 3%;
  display: flex;
`;

export const DropdownContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const Dropdown = styled.ul``;

export const DropdownItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #CECECE;
  }

  input[type='checkbox'] {
    position: absolute;
    display: none;
    cursor: pointer;
    opacity: 0;
  }

  label {
    align-items: center;
    padding: 3% 4%;
    position: relative;
    color: ${COLORS.GRAY};
    cursor: pointer;
    display: flex;
    gap: 3%;
  }

  input[type='checkbox']:checked + label {
    background-color: ${COLORS.SKY_BLUE};
    font-weight: 600;
    color: ${COLORS.SKY_BLUE_DARKER};
  }

  label::before {
    content: '';
    border: 1px solid ${COLORS.GRAY};
    background-color: ${COLORS.WHITE};
    border-radius: 50%;
    height: 17px;
    width: 17px;
  }

  .custom-checkbox:checked + label::before {
    background-color: ${COLORS.SKY_BLUE_DARKER};
    border: 1px solid ${COLORS.SKY_BLUE_DARKER};
  }

  label::after {
    content: '';
    border: solid ${COLORS.WHITE};
    border-width: 0 2px 2px 0;
    transform: rotate(40deg);
    position: absolute;
    height: 12px;
    width: 5px;
    opacity: 0;
  }

  input[type='checkbox']:checked + label::after {
    opacity: 1;
    left: 21.5px;
    border-radius: 2px;
    top: 14px;
  }
`;

export const ClearButtonContainer = styled.div`
  margin: 3% auto;
  display: flex;
  justify-content: center;

  button {
    font-weight: bold;
    color: ${COLORS.SKY_BLUE_DARKER};
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const FilterInfo = styled.div`
  display: flex;
  gap: 10px;
  font-size: inherit;
  color: ${COLORS.GRAY};
  align-items: center;
`;

export const FilterIndicator = styled.div`
  border-radius: 7px;
  background-color: #fff;
  border: 1px solid #4c4c4c;
  width: 69px;
  height: 29px;
`;