import React from "react";
import { Menu } from 'antd';
import { MailOutlined, PieChartOutlined, EyeOutlined, FileDoneOutlined, WechatWorkOutlined } from '@ant-design/icons';

import { ActionIconsContainer, ChatNavigationContainer, NavigationHeaderContainer, ChatDetailContainer, ChatDetailContentContainer, ChatDetailHeaderContainer, ChatDetailSidebarContainer } from "./styles";
import { UserIcon } from "assets/SVGs";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrow_left.svg";
import { ReactComponent as PinIcon } from "assets/icons/pin.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { ReactComponent as ForwardIcon } from "assets/icons/forward.svg";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { ReactComponent as SIcon } from "assets/icons/s.svg";
import { RightAngleIcon, LeftAngleIcon } from "assets/SVGs";


const ChatDetail = () => {
  const getDateTime = (date) => {

    const timeAgo = (date) => {
      const now = new Date();
      const diffInMs = now - date;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));  // Convert milliseconds to days
      if (diffInDays === 0) return '(today)';
      else if (diffInDays === 1) return '(yesterday)';
      else return `(${diffInDays} days ago)`;
    }
    const formatDateTime = (date) => {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const formattedDate = formatDateTime(date);
    const agoText = timeAgo(date);
    return `${formattedDate} ${agoText}`;
  };
  const items = [
    {
      key: 'grp',
      type: 'group',
      children: [
        {
          key: 'summary',
          label: 'Summary',
          icon: <MailOutlined />,
        },
        {
          key: 'analysis',
          label: 'Detailed Analysis',
          icon: <PieChartOutlined />,
        },
        {
          key: 'visualization',
          label: 'Add a Visualization',
          icon: <EyeOutlined />,
        },
        {
          key: 'quotes',
          label: 'Feedback Quotes',
          icon: <WechatWorkOutlined />
        },
        {
          key: 'action_plan',
          label: 'Create Action Plan',
          icon: <FileDoneOutlined />,
        },
      ],
    },
  ];
  return (
    <ChatDetailContainer>
      <NavigationHeaderContainer>
        <ActionIconsContainer>
          <ArrowLeftIcon />
          <PinIcon />
          <TrashIcon />
          <ForwardIcon />
          <DownloadIcon />
        </ActionIconsContainer>
        <ChatNavigationContainer>
          <p>17 of 50</p>
          <LeftAngleIcon />
          <RightAngleIcon />
        </ChatNavigationContainer>
      </NavigationHeaderContainer>
      <ChatDetailHeaderContainer>
        <UserIcon />
        <p>What do US Customer think about the new return policy?</p>
        <span>{getDateTime(new Date(2024, 8, 29, 11, 40))}</span>
      </ChatDetailHeaderContainer>
      <ChatDetailSidebarContainer>
        <Menu
          style={{
            backgroundColor: '#F5F5F5',
            border: 'none'
          }}
          defaultSelectedKeys={['summary']}
          defaultOpenKeys={['grp']}
          mode="inline"
          items={items}
        />
      </ChatDetailSidebarContainer>
      <ChatDetailContentContainer>
        <SIcon />
      </ChatDetailContentContainer>
    </ChatDetailContainer>
  );
};

export default ChatDetail;