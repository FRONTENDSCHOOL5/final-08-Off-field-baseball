import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

const MyChat = (props) => {
  const { myTeam } = useContext(UserContext);
  return (
    <Wrapper>
      <MessageTime>{props.time}</MessageTime>
      <MessageContent>
        {!props.isImg ? (
          <MessageText myTeam={myTeam}>{props.children}</MessageText>
        ) : (
          <MessageImg src={props.img} myTeam={myTeam} />
        )}
      </MessageContent>
    </Wrapper>
  );
};

export default MyChat;

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

const MessageContent = styled.div`
  display: inline-block;
  max-width: 240px;
`;

const MessageText = styled.p`
  background-color: ${(props) =>
    props.isValid
      ? 'var(--primary-color-' + (props.myTeam || 'default') + ')'
      : 'var(--gray-300)'};
  color: white;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  padding: 12px;
  border-radius: 10px 0 10px 10px;
`;

const MessageImg = styled.img`
  width: 240px;
  aspect-ratio: 1 / 1.5;
  object-fit: cover;
  background-size: cover;
  background-color: ${(props) =>
    props.isValid
      ? 'var(--primary-color-' + (props.myTeam || 'default') + ')'
      : 'var(--gray-300)'};
  border-radius: 1rem;
  border: none;
  padding: 0;
`;

const MessageTime = styled.p`
  color: var(--gray-400);
  margin-bottom: 2px;
`;
