import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';
import { MESSAGE_CIRCLE_SM, SHARE } from '../../../styles/CommonIcons';

export default function UserBtns() {
  // 팔로우 상태를 useState로 관리(임시)
  const [isFollow, setIsFollow] = useState(false);
  return (
    <BtnsWrapper>
      <BtnSmall>
        <img src={MESSAGE_CIRCLE_SM} alt='채팅 시작하기 버튼' />
      </BtnSmall>
      {isFollow ? (
        <Button whiteBtn mBtn>
          언팔로우
        </Button>
      ) : (
        <Button mBtn>팔로우</Button>
      )}
      <BtnSmall>
        <img src={SHARE} alt='공유하기 버튼' />
      </BtnSmall>
    </BtnsWrapper>
  );
}

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
