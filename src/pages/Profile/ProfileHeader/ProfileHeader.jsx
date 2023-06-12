import React from 'react';
import styled from 'styled-components';
import UserBtns from './UserBtns';
import MyBtns from './MyBtns';
import { BASIC_PROFILE_LG } from '../../../styles/CommonIcons';

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
      <MyTeamShow />
      {/* <UserBtns /> */}
      <MyBtns />
    </ProfileHeaderWrapper>
  );
}

const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 110px;
    aspect-ratio: 1 / 1;
  }
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

const MyTeamShow = styled.div``;
