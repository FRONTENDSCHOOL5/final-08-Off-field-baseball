import React from 'react';
import styled from 'styled-components';
import UserBtns from './UserBtns';
import MyBtns from './MyBtns';
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
import { Link } from 'react-router-dom';

export default function ProfileHeader({
  profileData,
  team,
  intro,
  targetuser,
}) {
  // 로그인한 유저인지 확인
  const myTeam = [
    { id: '1', name: '두산 베어스', name2: 'doosan', img: BEARS },
    { id: '2', name: '키움 히어로즈', name2: 'kiwoom', img: HEROES },
    { id: '3', name: 'LG 트윈스', name2: 'lg', img: TWINS },
    { id: '4', name: 'NC 다이노스', name2: 'nc', img: DINOS },
    { id: '5', name: 'KIA 타이거즈', name2: 'kia', img: TIGERS },
    { id: '6', name: '삼성 라이온즈', name2: 'samsung', img: LIONS },
    { id: '7', name: 'SSG 랜더스', name2: 'ssg', img: LANDERS },
    { id: '8', name: '롯데 자이언츠', name2: 'lotte', img: GIANTS },
    { id: '9', name: '한화 이글스', name2: 'hanhwa', img: EAGLES },
    { id: '10', name: 'KT 위즈', name2: 'kt', img: WIZ },
  ];
  let myTeamImg = '';
  let myTeamName = '';
  const { username, accountname, followerCount, followingCount, image } =
    profileData;

  myTeam.forEach((item) => {
    if (item.name === team || item.name2 === team) {
      myTeamImg = item.img;
      myTeamName = item.name;
    }
  });

  return (
    <ProfileHeaderWrapper>
      <UserHeader>
        <Follow to={`/profile/${accountname}/follower`}>
          <strong>{followerCount}</strong>
          <p>Followers</p>
        </Follow>
        <img src={image} alt='유저 프로필 이미지' />
        <Follow className='followings' to={`/profile/${accountname}/following`}>
          <strong>{followingCount}</strong>
          <p>Followings</p>
        </Follow>
      </UserHeader>
      <MyTeamShow>
        <>
          {myTeamImg === '' ? (
            <span>아직 응원중인 팀이 없습니다.</span>
          ) : (
            <>
              <img src={myTeamImg} srcSet='' alt='내가 응원하는 팀' />
              <span>{myTeamName} 응원중!</span>
            </>
          )}
        </>
      </MyTeamShow>
      <UserInfo>
        <h2>{username}</h2>
        <p className='id'>@{accountname}</p>
        <p className='text'>{intro}</p>
      </UserInfo>
      {accountname === localStorage.getItem('accountname') ? (
        <MyBtns />
      ) : (
        <UserBtns
          targetuser={targetuser}
          profileData={profileData}
          isfollow={profileData.isfollow}
        />
      )}
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
    border-radius: 50%;
    object-fit: cover;
  }
  margin-bottom: 12px;
`;

const Follow = styled(Link)`
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
  &.followings {
    color: var(--gray-400);
  }
`;

const MyTeamShow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-300);
  border-radius: 10px;
  padding: 4px;
  width: 150px;
  height: 26px;
  margin: 0 auto;
  justify-content: center;
  gap: 4px;
  cursor: default;
  img {
    width: 20px;
    height: auto;
  }

  span {
    color: var(--gray-400);
  }

  margin-bottom: 12px;
`;

const UserInfo = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 16px;
  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    color: var(--gray-400);
  }

  p.id {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  p.text {
    font-size: 1.4rem;
  }
`;
