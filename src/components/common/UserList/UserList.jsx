import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

export default function UserList({ loc, id, nickname, isFollow }) {
  // 임시로 팔로우 상태를 true로 설정

  return (
    <>
      <UserListItem>
        <Link to='#'>
          <img src={BASIC_PROFILE_SM} alt='' />
          <div className='user-info'>
            <h2>{nickname}</h2>
            <p>{id}</p>
          </div>
        </Link>
        {loc === 'follow' ? (
          <>
            {isFollow ? (
              <Button whiteBtn fontSize='1.2rem' style={{ width: '56px' }}>
                취소
              </Button>
            ) : (
              <Button fontSize='1.2rem' style={{ width: '56px' }}>
                팔로우
              </Button>
            )}
          </>
        ) : null}
      </UserListItem>
    </>
  );
}

const UserListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    gap: 12px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .user-info h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .user-info p {
    font-size: 1.2rem;
    color: var(--gray-400);
  }

  img {
    width: 50px;
    aspect-ratio: 1 / 1;
  }
`;
