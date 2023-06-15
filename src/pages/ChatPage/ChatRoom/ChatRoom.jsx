import React from 'react';
import styled from 'styled-components';
import TopChatNav from '../../../components/common/TopNavBar/TopChatNav';
import MyChat from './MyChat';
import UserChat from './UserChat';
import Comment from '../../../components/common/Comment/Comment';
import ChatImg2 from '../../../assets/images/chat-img2.jpg';

const ChatRoom = () => {
  return (
    <>
      <TopChatNav />
      <ChatRoomStyle>
        <MessageWrapper>
          <UserChat>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </UserChat>
          <UserChat>안녕하세요 야구 글러브 아직 파시나요</UserChat>
          <MyChat>안녕하세영</MyChat>
          <MyChat isImg img={ChatImg2}></MyChat>
        </MessageWrapper>
      </ChatRoomStyle>
      <Comment />
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
