import React, { useEffect, useState } from "react";
import COLORS from "constants/colors";
import { toast } from "react-toastify";
import {
  InputContainer,
  InputHeader,
  DatasetInfo,
  Label,
  FilterInfo,
  FiltersContainer,
  Tabs
} from "./styles";
import { fetchAllDataSets, fetchDataSetFilters } from "components/chatbot/apis";
import { Select, Button, DatePicker, ConfigProvider, List } from "antd";
import { FilterFilled, SyncOutlined, DownOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const initialFilters = [
  {
    key: "date",
    label: "Date",
    children: <RangePicker />,
  },
];

const InputBox = () => {
  const [dataSets, setDataSets] = useState([]);
  const [selectedDatasets, setSelectedDatasets] = useState([]);
  const [datasetsLoading, setDatasetsLoading] = useState(false);

  const [datasetFilters, setDatasetFilters] = useState(initialFilters);
  const [filtersLoading, setFiltersLoading] = useState(false);

  const [visible, setVisible] = useState(false);

  const populateData = async () => {
    setDatasetsLoading(true);
    await fetchAllDataSets()
      .then((response) => {
        setDataSets(response.data);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setDatasetsLoading(false);
      });
  };

  useEffect(() => {
    populateData();
  }, []);

  const handleDatasetChange = async (values) => {
    setSelectedDatasets(values);
    if (values.length === 1) {
      setFiltersLoading(true);
      await fetchDataSetFilters(values[0])
        .then((response) => {
          const filters = Object.entries(response.data[0]).map(
            ([key, values]) => ({
              key,
              label: key,
              children: (
                <List
                  size="small"
                  bordered
                  dataSource={values}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                  style={{backgroundColor: COLORS.WHITE}}
                />
              ),
            })
          );
          setDatasetFilters(initialFilters.concat(filters));
        })
        .catch((error) => {
          toast.error(`${error.response.status}: ${error.response.statusText}`);
        })
        .finally(() => {
          setFiltersLoading(false);
        });
    } else {
      setDatasetFilters([]);
    }
  };

  return (
    <InputContainer onSubmit={(e) => e.preventDefault()}>
      <InputHeader>
        <DatasetInfo align="center">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Datasets..."
            options={dataSets.map((dataset) => ({
              label: dataset.title,
              value: dataset.id,
            }))}
            disabled={datasetsLoading}
            size="large"
            maxTagCount="responsive"
            placement="topRight"
            onChange={handleDatasetChange}
            suffixIcon={
              datasetsLoading ? <SyncOutlined spin /> : <DownOutlined />
            }
          />
        </DatasetInfo>
        <FilterInfo gap={15} align="center">
          <Label>
            <strong>Filters:</strong>
          </Label>
          <Button
            onClick={() => setVisible(!visible)}
            icon={filtersLoading ? <SyncOutlined spin /> : <FilterFilled />}
            disabled={selectedDatasets.length !== 1 || filtersLoading}
          >
            All
          </Button>
          <FiltersContainer style={{ display: visible ? "" : "none" }}>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    inkBarColor: COLORS.DARK_BLUE,
                    itemSelectedColor: COLORS.DARK_BLUE,
                    itemHoverColor: COLORS.DARK_BLUE,
                    itemColor: COLORS.LIGHT_GRAY,
                    itemActiveColor: COLORS.DARK_BLUE,
                    horizontalItemPadding: "12px",
                    horizontalMargin: 0,
                  },
                }
              }}
            >
              <Tabs
                defaultActiveKey="1"
                items={datasetFilters}
                tabBarStyle={{
                  backgroundColor: COLORS.WHITE,
                  borderBottom: `1px solid ${COLORS.LIGHTER_GRAY}`,
                }}
              />
            </ConfigProvider>
          </FiltersContainer>
        </FilterInfo>
      </InputHeader>
    </InputContainer>
  );
};

export default InputBox;
