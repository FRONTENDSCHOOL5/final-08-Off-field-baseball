import React from 'react';
import styled from 'styled-components';
import UserBtns from './UserBtns';
import MyBtns from './MyBtns';

export default function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      {/* <UserBtns /> */}
      <MyBtns />
    </ProfileHeaderWrapper>
  );
}

const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
