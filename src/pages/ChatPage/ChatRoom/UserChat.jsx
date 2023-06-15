import React from 'react';
import styled from 'styled-components';
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';

const UserChat = (props) => {
  return (
    <Wrapper>
      <img
        className='profileImg'
        src={BASIC_PROFILE_SM}
        alt='대화 상대의 프로필 사진입니다.'
      />
      <MessageContent>
        {!props.isImg ? (
          <MessageText>{props.children}</MessageText>
        ) : (
          <MessageImg src={props.img} />
        )}
      </MessageContent>
    </Wrapper>
  );
};

export default UserChat;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  .profileImg {
    width: 42px;
    height: 42px;
  }
`;

const MessageContent = styled.p`
  display: inline-block;
  max-width: 240px;
`;

const MessageText = styled.p`
  background-color: white;
  border: 1px solid var(--gray-300);
  color: #000;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  padding: 12px;
  border-radius: 0 10px 10px 10px;
`;

const MessageImg = styled.img`
  width: 240px;
  height: 240px;
  background-size: cover;
  background-color: var(--primary-color);
  background-position: center;
  border-radius: 1rem;
  border: none;
  padding: 0;
`;
