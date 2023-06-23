import React, { useState } from 'react';
import styled from 'styled-components';
import TopChatNav from '../../../components/common/TopNavBar/TopChatNav';
import MyChat from './MyChat';
import UserChat from './UserChat';
import Comment from '../../../components/common/Comment/Comment';
import ChatImg4 from '../../../assets/images/test.jpg';
import { LOTTE_SMALL } from '../../../styles/CommonIcons';

const ChatRoom = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TopChatNav username='최강롯데' />
      <ChatRoomStyle>
        <MessageWrapper>
          <UserChat profile={LOTTE_SMALL} time='09:50'>
            안녕하세요 글러브 아직 파시나요
          </UserChat>
          <UserChat profile={LOTTE_SMALL} time='09:51'>
            사진 좀 볼 수 있을까요?
          </UserChat>
          <MyChat time='10:30'>안녕하세요</MyChat>
          <MyChat time='10:32' isImg img={ChatImg4}></MyChat>
        </MessageWrapper>
      </ChatRoomStyle>
      <Comment value={value} setValue={setValue} />
    </>
  );
};

export default ChatRoom;

const ChatRoomStyle = styled.div`
  background-color: var(--gray-100);
  padding: 4.8rem 0 0;
  display: flex;
  flex-direction: column;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 109px);
  padding: 0 1.6rem 2rem;
  justify-content: flex-end;
  overflow-y: hidden;
`;
