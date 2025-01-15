import {
  MailOutlined,
  PieChartOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import { Empty, Popconfirm, Tabs, ConfigProvider } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ActionIconsContainer,
  NavigationHeaderContainer,
  ChatDetailContainer,
  ChatDetailContentContainer,
  ChatDetailHeaderContainer,
} from "./styles";
import { UserIcon, PinIcon } from "assets/SVGs";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrow_left.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as ForwardIcon } from "assets/icons/forward.svg";
import { deleteChat, fetchChat, pinChat } from "components/chatbot/apis";
import Loader from "components/common/Loader";
import COLORS from "constants/colors";
import { convertDateTime } from "utils";
import { ALL_CHATS_URL } from "constants/urls";
import TabContent from "./TabContent";

const ChatDetail = () => {
  const { unique_uuid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const pinnedIconOptions = {
    borderColor: COLORS.DARK_BLUE,
    fillColor: COLORS.DARK_BLUE,
  };
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const tabItems = [
    {
      key: "summary",
      label: "Summary",
      icon: <MailOutlined />,
    },
    {
      key: "detailed_analysis",
      label: "Detailed Analysis",
      icon: <PieChartOutlined />,
    },
    {
      key: "visualization",
      label: "Visualization",
      icon: <EyeOutlined />,
    },
    {
      key: "feedback_quotes",
      label: "Feedback Quotes",
      icon: <WechatWorkOutlined />,
    },
  ];

  const handlePinChat = async (e) => {
    e.preventDefault();
    await pinChat(unique_uuid).then((response) => {
      setData((prevState) => ({
        ...prevState,
        is_pinned: response.data.is_pinned,
      }));
    });
  };

  const handleDeleteChat = async (e) => {
    e.preventDefault();
    await deleteChat(unique_uuid)
      .then((response) => {
        navigate(ALL_CHATS_URL);
      })
      .catch((error) => {
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      });
  };

  const populateData = async () => {
    setLoading(true);
    await fetchChat(unique_uuid)
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

  useEffect(() => {
    populateData();
    /* eslint-disable-next-line */
  }, [unique_uuid]);

  return loading ? (
    <Loader />
  ) : !data ? (
    <Empty />
  ) : (
    <ChatDetailContainer>
      <NavigationHeaderContainer>
        <ActionIconsContainer>
          {window.history.state.idx > 0 && (
            <span onClick={() => navigate(-1)}>
              <ArrowLeftIcon />
            </span>
          )}
          <span onClick={handlePinChat}>
            <PinIcon {...(data.is_pinned && pinnedIconOptions)} />
          </span>
          <Popconfirm
            title="Delete Chat"
            description="Are you sure to delete this chat?"
            onConfirm={handleDeleteChat}
            okText="Yes"
            okType="danger"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <TrashIcon />
          </Popconfirm>
          <ForwardIcon />
        </ActionIconsContainer>
      </NavigationHeaderContainer>
      <ChatDetailHeaderContainer>
        <UserIcon />
        <p>{data["user_query"]}</p>
        <span>{convertDateTime(data["created_at"], dateOptions, true)}</span>
      </ChatDetailHeaderContainer>
      <ChatDetailContentContainer>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                inkBarColor: COLORS.DARK_BLUE,
                itemSelectedColor: COLORS.DARK_BLUE,
                itemHoverColor: COLORS.DARK_BLUE,
                itemColor: COLORS.LIGHT_GRAY,
                itemActiveColor: COLORS.DARK_BLUE,
              },
            },
          }}
        >
          <Tabs
            items={tabItems.map((item) => ({
              ...item,
              children: (
                <TabContent
                  data={data}
                  unique_uuid={unique_uuid}
                  rack={item.key}
                />
              ),
            }))}
            tabPosition="left"
            style={{ padding: "2rem 0" }}
          />
        </ConfigProvider>
      </ChatDetailContentContainer>
    </ChatDetailContainer>
  );
};

export default ChatDetail;
