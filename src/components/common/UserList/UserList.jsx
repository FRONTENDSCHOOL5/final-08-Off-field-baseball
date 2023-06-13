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

  // 받아온 마이 팀 데이터와 일치하는 이미지를 로드하도록 하는 배열
  const myTeam = [
    { id: '1', name: '두산 베어스', img: BEARS },
    { id: '2', name: '키움 히어로즈', img: HEROES },
    { id: '3', name: 'LG 트윈스', img: TWINS },
    { id: '4', name: 'NC 다이노스', img: DINOS },
    { id: '5', name: 'KIA 타이거즈', img: TIGERS },
    { id: '6', name: '삼성 라이온즈', img: LIONS },
    { id: '7', name: 'SSG 랜더스', img: LANDERS },
    { id: '8', name: '롯데 자이언츠', img: GIANTS },
    { id: '9', name: '한화 이글스', img: EAGLES },
    { id: '10', name: 'KT 위즈', img: WIZ },
  ];

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
                <img src={myTeam[7].img} alt='내가 좋아하는 팀 로고' />
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
