import React from 'react';
import styled from 'styled-components';
import { BASIC_PROFILE_SM } from '../../styles/CommonIcons';

const ChatListStyle = (props) => {
  return (
    <ProfileStyle>
      <div className='wrapper'>
        <img src={BASIC_PROFILE_SM} alt='프로필사진 입니다.' />
        <div className='text'>
          <p className='user-name'>{props.userName}</p>
          <p className='last-chat'>{props.lastChat}</p>
        </div>
      </div>
      <p className='date'>{props.date}</p>
    </ProfileStyle>
  );
};

export default ChatListStyle;

const ProfileStyle = styled.div`
  /* margin: 0 16px 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  img {
    width: 42px;
    height: auto;
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    overflow: hidden;
    cursor: pointer;
  }
  // 커서 포인터 영역을 프로필 사진과 텍스트 영역까지로 지정했습니다.

  .text {
    overflow: hidden;
  }

  .user-name {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .last-chat {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    color: #dbdbdb;
    align-self: flex-end;
    padding-bottom: 3px;
  }
`;
