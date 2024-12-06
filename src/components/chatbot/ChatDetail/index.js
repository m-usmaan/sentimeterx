import {
  MailOutlined,
  PieChartOutlined,
  EyeOutlined,
  FileDoneOutlined,
  QuestionCircleOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import { Empty, Menu, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ActionIconsContainer,
  NavigationHeaderContainer,
  ChatDetailContainer,
  ChatDetailContentContainer,
  ChatDetailHeaderContainer,
  ChatDetailSidebarContainer,
} from "./styles";
import { UserIcon, PinIcon } from "assets/SVGs";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrow_left.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as ForwardIcon } from "assets/icons/forward.svg";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { ReactComponent as SIcon } from "assets/icons/s.svg";
import { deleteChat, fetchChat, pinChat } from "components/chatbot/apis";
import Loader from "components/common/Loader";
import COLORS from "constants/colors";
import { convertDateTime } from "utils";
import { ALL_CHATS_URL } from "constants/urls";

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
  const navItems = [
    {
      key: "grp",
      type: "group",
      children: [
        {
          key: "summary",
          label: "Summary",
          icon: <MailOutlined />,
        },
        {
          key: "analysis",
          label: "Detailed Analysis",
          icon: <PieChartOutlined />,
        },
        {
          key: "visualization",
          label: "Add a Visualization",
          icon: <EyeOutlined />,
        },
        {
          key: "quotes",
          label: "Feedback Quotes",
          icon: <WechatWorkOutlined />,
        },
        {
          key: "action_plan",
          label: "Create Action Plan",
          icon: <FileDoneOutlined />,
        },
      ],
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
    await deleteChat(unique_uuid).then((response) => {
      navigate(ALL_CHATS_URL);
    }).catch((error) => {
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
  }, []);

  return loading ? (
    <Loader />
  ) : (
    !data ? <Empty /> :
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
            icon={
              <QuestionCircleOutlined style={{color: "red",}} />
            }
          >
            <TrashIcon />
          </Popconfirm>
          <ForwardIcon />
          <DownloadIcon />
        </ActionIconsContainer>
      </NavigationHeaderContainer>
      <ChatDetailHeaderContainer>
        <UserIcon />
        <p>{data["user_query"]}</p>
        <span>{convertDateTime(data["created_at"], dateOptions, true)}</span>
      </ChatDetailHeaderContainer>
      <ChatDetailSidebarContainer>
        <Menu
          style={{
            backgroundColor: "#F5F5F5",
            border: "none",
          }}
          defaultSelectedKeys={["summary"]}
          defaultOpenKeys={["grp"]}
          mode="inline"
          items={navItems}
        />
      </ChatDetailSidebarContainer>
      <ChatDetailContentContainer>
        <SIcon />
      </ChatDetailContentContainer>
    </ChatDetailContainer>
  );
};

export default ChatDetail;
