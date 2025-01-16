import styled from "styled-components";
import COLORS from "constants/colors";
import { Flex, Tabs as AntdTabs } from "antd";

export const InputContainer = styled.form`
  border-radius: 9px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const InputHeader = styled(Flex)`
  border-radius: 9px 9px 0 0;
  background-color: ${COLORS.LIGHTER_GRAY};
  gap: 5%;
  padding: 1% 2%;
`;

export const DatasetInfo = styled(Flex)`
  padding: 5px;
  width: 50%;
`;

export const Label = styled.span`
  color: ${COLORS.GRAY};
`;

export const FilterInfo = styled(Flex)`
  gap: 3%;
  width: 50%;
  position: relative;
`;

export const FiltersContainer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const Tabs = styled(AntdTabs)``;
