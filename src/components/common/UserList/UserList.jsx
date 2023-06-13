import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';
import Button from '../Button/Button';
import {
  LANDERS,
  GIANTS,
  WIZ,
  EAGLES,
  LIONS,
  TIGERS,
  TWINS,
  DINOS,
  BEARS,
  HEROES,
} from '../../../styles/CommonImages';

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
        <Container>
          {loc === 'follow' ? (
            <>
              <TeamLogo>
                <img src={GIANTS} alt='내가 좋아하는 팀 로고' />
              </TeamLogo>
              {isFollow ? (
                <Button whiteBtn fontSize='1.2rem' style={{ width: '56px' }}>
                  취소
                </Button>
              ) : (
                <Button
                  fontSize='1.2rem'
                  style={{ width: '56px', height: '28px' }}
                >
                  팔로우
                </Button>
              )}
            </>
          ) : (
            <TeamLogo>
              <img src={GIANTS} alt='내가 좋아하는 팀 로고' />
            </TeamLogo>
          )}
        </Container>
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

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const TeamLogo = styled.div`
  img {
    width: 40px;
    object-fit: contain;
  }
`;
