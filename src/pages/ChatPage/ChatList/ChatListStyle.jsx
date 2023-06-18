import React from 'react';
import styled from 'styled-components';
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';
import { useNavigate } from 'react-router-dom';

const ChatListStyle = (props) => {
  const navigate = useNavigate();

  return (
    <ProfileStyle>
      <div className='wrapper' onClick={() => navigate(props.navigate)}>
        <img src={BASIC_PROFILE_SM} alt='프로필사진 입니다.' />
        {props.isNew && <div className='new'></div>}
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
    position: relative;
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
    color: var(--gray-400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    color: var(--gray-200);
    align-self: flex-end;
    padding-bottom: 3px;
  }

  .new {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--primary-color);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
`;
