import { DatePicker, Input } from "antd";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  AllChatsContainer,
  ChatsList,
  ChatsListContainer,
  FiltersContainer,
  ListItem,
} from "./styles";
import { PinIcon, RightAngleIcon } from "assets/SVGs";
import { allChats } from "components/chatbot/apis";
import { default as Link } from "components/common/IsActiveNavLink";
import Loader from "components/common/Loader";
import COLORS from "constants/colors";
import { convertDateTime } from "utils";

const AllChats = ({ pinned }) => {
  const { Search } = Input;
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const pinnedIconOptions = {
    borderColor: COLORS.DARK_BLUE,
    fillColor: COLORS.DARK_BLUE,
  };
  const { RangePicker } = DatePicker;
  const rangePresets = [
    {
      label: "Last 7 Days",
      value: [dayjs().add(-7, "d"), dayjs()],
    },
    {
      label: "Last 30 Days",
      value: [dayjs().add(-30, "d"), dayjs()],
    },
    {
      label: "Last 90 Days",
      value: [dayjs().add(-90, "d"), dayjs()],
    },
  ];

  const fetchData = useCallback(
    async (pageNumber = 1) => {
      let params = { page: pageNumber };
      if (pinned !== undefined) params["pinned"] = pinned;
      const response = await allChats(params);
      return response;
      /* eslint-disable-next-line */
    },
    [pinned]
  ); // TODO: Add page in dependency array

  const populateData = () => {
    setLoading(true);
    fetchData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSearch = (value, _e, info) => setSearchString(value.toLowerCase());
  const filteredList = data.filter((obj) =>
    obj.user_query.toLowerCase().includes(searchString)
  );

  useEffect(() => {
    populateData();
    /* eslint-disable-next-line */
  }, [pinned]); // TODO: Add page in dependency array

  return loading ? (
    <Loader />
  ) : (
    <AllChatsContainer>
      <FiltersContainer>
        <Search
          placeholder="Search..."
          allowClear
          onSearch={onSearch}
          style={{ width: 400 }}
        />
        <RangePicker
          placeholder={["From", "To"]}
          variant="filled"
          presets={rangePresets}
          placement="bottomRight"
          maxDate={dayjs()}
        />
      </FiltersContainer>
      <ChatsListContainer>
        <ChatsList>
          {filteredList.map((obj) => {
            return (
              <Link to={`/chats/${obj.unique_uuid}`} key={obj.unique_uuid}>
                <ListItem key={obj.unique_uuid}>
                  <input type="checkbox" value={obj.unique_uuid}></input>
                  <PinIcon {...(obj.is_pinned && pinnedIconOptions)} />  {/* TODO: Add onclick event here */}
                  <RightAngleIcon />
                  <p>{obj.user_query}</p>
                  <span>{convertDateTime(obj.created_at, dateOptions)}</span>
                </ListItem>
              </Link>
            );
          })}
        </ChatsList>
      </ChatsListContainer>
    </AllChatsContainer>
  );
};

export default AllChats;
