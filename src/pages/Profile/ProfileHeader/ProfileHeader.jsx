import React from 'react';
import styled from 'styled-components';
import UserBtns from './UserBtns';
import MyBtns from './MyBtns';
import { BASIC_PROFILE_LG } from '../../../styles/CommonIcons';
import { GIANTS } from '../../../styles/CommonImages';

export default function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      <UserHeader>
        <Follow>
          <strong>2950</strong>
          <p>Followers</p>
        </Follow>
        <img src={BASIC_PROFILE_LG} alt='유저 프로필 이미지' />
        <Follow followings>
          <strong>115</strong>
          <p>Followings</p>
        </Follow>
      </UserHeader>
      <MyTeamShow>
        <img src={GIANTS} srcSet='' alt='내가 응원하는 팀' />
        <span>롯데 자이언츠 응원중!</span>
      </MyTeamShow>
      <UserInfo>
        <h2>최강롯데</h2>
        <p className='id'>@Unbeatable_Lotte</p>
        <p className='text'>
          롯데 자이언츠 팬입니다. 여긴 자기 소개가 들어가요
        </p>
      </UserInfo>
      <UserBtns />
      {/* <MyBtns /> */}
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
