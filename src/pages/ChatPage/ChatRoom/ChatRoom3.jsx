import React, { useState } from 'react';
import styled from 'styled-components';
import TopChatNav from '../../../components/common/TopNavBar/TopChatNav';
import MyChat from './MyChat';
import UserChat from './UserChat';
import Comment from '../../../components/common/Comment';
import ChatImg1 from '../../../assets/images/chat-img1.jpg';

import { IMG_BUTTON, HANHWA_SMALL } from '../../../styles/CommonIcons';

const ChatRoom = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TopChatNav username='여기한화하나요' />
      <ChatRoomStyle>
        <MessageWrapper>
          <UserChat profile={HANHWA_SMALL} time='20:51'>
            안녕하세요 직거래 가능하신가요?
          </UserChat>
          <MyChat time='21:30'>넵 사직에서 가능해요</MyChat>
          <MyChat time='21:32' isImg img={ChatImg1}></MyChat>
          <UserChat profile={HANHWA_SMALL} time='21:45'>
            네네 그럼 직거래로 하겠습니다 내일 경기 전에 괜찮으신가요?
          </UserChat>
          <MyChat time='22:02'>네 그럼 내일 뵐게요!!</MyChat>
        </MessageWrapper>
      </ChatRoomStyle>
      <Comment value={value} setValue={setValue}>
        <img src={IMG_BUTTON} alt='이미지 업로드 버튼' />
      </Comment>
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
