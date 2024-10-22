import React from "react";
import { DatePicker } from 'antd';
import dayjs from 'dayjs';


import { AllChatsContainer, ChatsList, ChatsListContainer, FiltersContainer, ListItem } from "./styles";
import { PinIcon, RightAngleIcon } from "assets/SVGs";
import COLORS from "constants/colors";


const AllChats = () => {
  const chats = [
    {
      id: 1,
      title: 'How to improve customer satisfaction?',
      isPinned: true,
      date: new Date()
    },
    {
      id: 2,
      title: 'Why is customer feedback important?',
      isPinned: false,
      date: new Date(2024, 8, 9)
    },
    {
      id: 3,
      title: 'What is a customer journey map?',
      isPinned: false,
      date: new Date(2024, 7, 15)
    },
    {
      id: 4,
      title: 'How do I handle customer complaints effectively?',
      isPinned: false,
      date: new Date(2023, 10, 22)
    },
    {
      id: 5,
      title: 'What are the best CX tools for small businesses?',
      isPinned: true,
      date: new Date(2024, 0, 3)
    },
    {
      id: 6,
      title: 'How to create a customer-centric culture?',
      isPinned: false,
      date: new Date(2023, 11, 10)
    },
    {
      id: 7,
      title: 'Why is omnichannel support critical for CX?',
      isPinned: true,
      date: new Date(2023, 6, 19)
    },
    {
      id: 8,
      title: 'What is the role of AI in improving CX?',
      isPinned: false,
      date: new Date(2024, 3, 14)
    },
    {
      id: 9,
      title: 'How to reduce customer churn rate?',
      isPinned: false,
      date: new Date(2024, 2, 27)
    },
    {
      id: 10,
      title: 'What metrics are essential for measuring CX?',
      isPinned: true,
      date: new Date(2023, 8, 30)
    },
    {
      id: 11,
      title: 'How do customer personas impact CX strategy?',
      isPinned: false,
      date: new Date(2024, 4, 12)
    },
    {
      id: 12,
      title: 'What are the top CX trends for 2024?',
      isPinned: false,
      date: new Date(2023, 9, 5)
    },
    {
      id: 13,
      title: 'How to personalize customer experiences?',
      isPinned: false,
      date: new Date(2023, 7, 1)
    },
    {
      id: 14,
      title: 'What is the importance of real-time support in CX?',
      isPinned: true,
      date: new Date(2024, 1, 21)
    },
    {
      id: 15,
      title: 'How does employee engagement affect CX?',
      isPinned: false,
      date: new Date(2024, 5, 30)
    },
    {
      id: 16,
      title: 'What is customer effort score (CES) and why is it important?',
      isPinned: false,
      date: new Date(2023, 2, 17)
    },
    {
      id: 17,
      title: 'How can data analytics improve CX strategy?',
      isPinned: true,
      date: new Date(2024, 7, 6)
    },
    {
      id: 18,
      title: 'How to ensure consistency in CX across channels?',
      isPinned: false,
      date: new Date(2024, 9, 15)
    },
    {
      id: 19,
      title: 'How to build long-term customer loyalty?',
      isPinned: false,
      date: new Date(2023, 3, 12)
    },
    {
      id: 20,
      title: 'How do chatbots enhance customer experience?',
      isPinned: false,
      date: new Date(2024, 6, 8)
    },
    {
      id: 21,
      title: 'What is the difference between CX and UX?',
      isPinned: true,
      date: new Date(2023, 4, 19)
    },
    {
      id: 22,
      title: 'How can proactive support improve CX?',
      isPinned: false,
      date: new Date(2024, 0, 25)
    },
    {
      id: 23,
      title: 'Why is NPS a valuable metric for CX?',
      isPinned: true,
      date: new Date(2023, 11, 3)
    },
    {
      id: 24,
      title: 'How to create seamless mobile experiences for customers?',
      isPinned: false,
      date: new Date(2024, 2, 13)
    },
    {
      id: 25,
      title: 'What role does empathy play in CX?',
      isPinned: false,
      date: new Date(2023, 9, 20)
    }
  ];
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const pinnedIconOptions = {
    borderColor: COLORS.DARK_BLUE,
    fillColor: COLORS.DARK_BLUE
  }
  const { RangePicker } = DatePicker;
  const rangePresets = [
    {
      label: 'Last 7 Days',
      value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
      label: 'Last 30 Days',
      value: [dayjs().add(-30, 'd'), dayjs()],
    },
    {
      label: 'Last 90 Days',
      value: [dayjs().add(-90, 'd'), dayjs()],
    },
  ];
  return (
    <AllChatsContainer>
      <FiltersContainer>
        <RangePicker placeholder={["From", "To"]} variant="filled" presets={rangePresets} placement="bottomRight" maxDate={dayjs()} />
      </FiltersContainer>
      <ChatsListContainer>
        <ChatsList>
          {
            chats.map((obj) => {
              return (
                <ListItem key={obj.id}>
                  <input type="checkbox" value={obj.id}></input>
                  <PinIcon {...(obj.isPinned && pinnedIconOptions)} />
                  <RightAngleIcon />
                  <p>{obj.title}</p>
                  <span>{obj.date.toLocaleDateString('en-US', dateOptions)}</span>
                </ListItem>
              );
            })
          }
        </ChatsList>
      </ChatsListContainer>
    </AllChatsContainer>
  );
}

export default AllChats;