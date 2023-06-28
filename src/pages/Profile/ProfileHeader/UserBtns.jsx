import React from 'react';
import styled from 'styled-components';
import { MESSAGE_CIRCLE_SM, SHARE } from '../../../styles/CommonIcons';
import FollowBtn from '../../../components/common/FollowBtn';

const UserBtns = ({ targetuser, profileData, isfollow }) => {
  return (
    <BtnsWrapper>
      <BtnSmall onClick={() => alert('미구현 기능입니다.')}>
        <img src={MESSAGE_CIRCLE_SM} alt='채팅 시작하기 버튼' />
      </BtnSmall>
      <FollowBtn
        profileData={profileData}
        targetuser={targetuser}
        mBtn
        isfollow={isfollow}
      />
      <BtnSmall onClick={() => alert('미구현 기능입니다.')}>
        <img src={SHARE} alt='공유하기 버튼' />
      </BtnSmall>
    </BtnsWrapper>
  );
};

export default UserBtns;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin: 0 75px;
`;

const BtnSmall = styled.button`
  width: 34px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--gray-300);

  img {
    width: 20px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    margin: 0 auto;
  }
`;
