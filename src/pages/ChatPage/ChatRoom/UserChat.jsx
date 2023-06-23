import React, { useContext } from 'react';
import styled from 'styled-components';
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';
import { UserContext } from '../../../context/UserContext';

const UserChat = (props) => {
  const { myTeam } = useContext(UserContext);
  return (
    <Wrapper>
      <img
        className='profileImg'
        src={props.profile}
        alt='대화 상대의 프로필 사진입니다.'
      />
      <MessageContent>
        {!props.isImg ? (
          <MessageText>{props.children}</MessageText>
        ) : (
          <MessageImg src={props.img} myTeam={myTeam} />
        )}
        <MessageTime>{props.time}</MessageTime>
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

const MessageContent = styled.div`
  display: inline-block;
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

const MessageText = styled.p`
  max-width: 240px;
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
  aspect-ratio: 1 / 1.5;
  object-fit: cover;
  background-size: cover;
  background-color: ${(props) =>
    'var(--secondary-color-' + (props.myTeam || 'default') + ')'};
  border-radius: 1rem;
  border: none;
  padding: 0;
`;

const MessageTime = styled.p`
  color: var(--gray-400);
  margin-bottom: 2px;
`;
