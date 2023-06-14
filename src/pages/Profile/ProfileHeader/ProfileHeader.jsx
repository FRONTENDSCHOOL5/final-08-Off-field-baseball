import React from 'react';
import styled from 'styled-components';
import UserBtns from './UserBtns';
import MyBtns from './MyBtns';
import { BASIC_PROFILE_LG } from '../../../styles/CommonIcons';
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

export default function ProfileHeader({
  followingCount,
  followerCount,
  username,
  accountname,
  image,
  intro,
  team,
}) {
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
  let myTeamImg = '';
  myTeam.forEach((item) => {
    if (item.name === team) {
      myTeamImg = item.img;
    }
  });

  return (
    <ProfileHeaderWrapper>
      <UserHeader>
        <Follow>
          <strong>{followerCount}</strong>
          <p>Followers</p>
        </Follow>
        <img src={BASIC_PROFILE_LG} alt='유저 프로필 이미지' />
        <Follow followings>
          <strong>{followingCount}</strong>
          <p>Followings</p>
        </Follow>
      </UserHeader>
      <MyTeamShow>
        <img src={myTeamImg} srcSet='' alt='내가 응원하는 팀' />
        <span>{team} 응원중!</span>
      </MyTeamShow>
      <UserInfo>
        <h2>{username}</h2>
        <p className='id'>@{accountname}</p>
        <p className='text'>{intro}</p>
      </UserInfo>
      {/* <UserBtns /> */}
      <MyBtns />
    </ProfileHeaderWrapper>
  );
}

const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  margin: 10px -16px 6px;
  border-bottom: 6px solid var(--gray-100);
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 110px;
    aspect-ratio: 1 / 1;
  }
  margin-bottom: 8px;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  strong {
    font-size: 1.8rem;
    font-weight: bold;
  }

  p {
    color: var(--gray-400);
  }
  ${({ followings }) => followings && `strong { color: var(--gray-400)}`};
`;

const MyTeamShow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-300);
  border-radius: 10px;
  padding: 4px;
  width: 150px;
  margin: 0 auto;
  justify-content: center;
  gap: 4px;
  cursor: default;
  img {
    width: 20px;
  }

  span {
    color: var(--gray-400);
  }

  margin-bottom: 9px;
`;

const UserInfo = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 24px;
  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 6px;
  }
  p {
    color: var(--gray-400);
  }

  p.id {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }

  p.text {
    font-size: 1.4rem;
  }
`;
