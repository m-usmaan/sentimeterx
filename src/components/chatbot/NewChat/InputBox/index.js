import React from 'react';
import { useState } from 'react';
import { InputContainer, InputHeader, DatasetInfo, Label, ChangeButton, DatasetDropdownContainer, Legend, DropdownContainer, Dropdown, DropdownItem, ClearButtonContainer, FilterInfo, FilterIndicator } from './styles';

const InputBox = () => {
  const [dataSet,] = useState('Customer Feedback NPS Survey');
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const datasetTitles = ['Customer Feedback NPS Survey', 'Consumer Online Reviews', 'Complaints', 'App Reviews'];

  return (
    <InputContainer onSubmit={(e) => e.preventDefault()}>
      <InputHeader>
        <DatasetInfo>
          <Label>
            <strong>Data Set: </strong>{dataSet}
          </Label>
          <ChangeButton onClick={() => setDisplayDropdown((display) => !display)}>Change</ChangeButton>
          <DatasetDropdownContainer display={displayDropdown ? "inline" : "none"}>
            <Legend>Select Source</Legend>
            <DropdownContainer>
              <Dropdown>
                {
                  datasetTitles.map((title) => {
                    return (
                      <DropdownItem key={title}>
                        <input type="checkbox" id={title} name="dataset" value={title} className='custom-checkbox'/>
                        <label htmlFor={title}>{title}</label>
                      </DropdownItem>
                    );
                  })
                }
              </Dropdown>
            </DropdownContainer>
            <ClearButtonContainer><button>Clear Selection</button></ClearButtonContainer>
          </DatasetDropdownContainer>
        </DatasetInfo>
        <FilterInfo>
          <Label>
            <strong>Filters:</strong>
          </Label>
          <FilterIndicator />
        </FilterInfo>
      </InputHeader>
    </InputContainer>
  );
}

export default InputBox;