import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  InputContainer,
  InputHeader,
  DatasetInfo,
  Label,
  ChangeButton,
  DatasetDropdownContainer,
  Legend,
  DropdownContainer,
  Dropdown,
  DropdownItem,
  ClearButtonContainer,
  FilterInfo,
  FilterIndicator,
} from "./styles";
import { dataSets } from "components/chatbot/apis";

const InputBox = () => {
  const [_dataSets, setDataSets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState(false);


  const populateData = async () => {
    setLoading(true);
    await dataSets()
      .then((response) => {
        console.log(response);
        setDataSets(response.data);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <InputContainer onSubmit={(e) => e.preventDefault()}>
      <InputHeader>
        <DatasetInfo>
          <Label>
            <strong>Data Sets</strong>
          </Label>
          <ChangeButton
            onClick={() => setDisplayDropdown((display) => !display)}
            disabled={loading}
          >
            Change
          </ChangeButton>
          <DatasetDropdownContainer
            display={displayDropdown ? "inline" : "none"}
          >
            <Legend>Select Source</Legend>
            <DropdownContainer>
              <Dropdown>
                {_dataSets.map((dataSet) => {
                  return (
                    <DropdownItem key={dataSet.id}>
                      <input
                        type="checkbox"
                        id={dataSet.id}
                        name="dataset"
                        value={dataSet.id}
                        className="custom-checkbox"
                      />
                      <label htmlFor={dataSet.id}>{dataSet.title}</label>
                    </DropdownItem>
                  );
                })}
              </Dropdown>
            </DropdownContainer>
            <ClearButtonContainer>
              <button>Clear Selection</button>
            </ClearButtonContainer>
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
};

export default InputBox;
