import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';

export default function MyBtns() {
  return (
    <MyBtnsWrapper>
      <Button whiteBtn>프로필 수정</Button>
      <Button whiteBtn>상품 등록</Button>
    </MyBtnsWrapper>
  );
}

const MyBtnsWrapper = styled.div`
  display: flex;
  margin: 0 64px;
  gap: 12px;
`;
