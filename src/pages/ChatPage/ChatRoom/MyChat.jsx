import React from 'react';
import styled from 'styled-components';
import { SYMBOL_LOGO_GRAY } from '../../../styles/CommonImages';

const MyChat = (props) => {
  return (
    <Wrapper>
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

export default MyChat;

const Wrapper = styled.div`
  margin-left: auto;
`;

const MessageContent = styled.div`
  display: inline-block;
  max-width: 240px;
`;

const MessageText = styled.p`
  background-color: var(--primary-color);
  color: white;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 18px;
  padding: 12px;
  border-radius: 10px 0 10px 10px;
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
