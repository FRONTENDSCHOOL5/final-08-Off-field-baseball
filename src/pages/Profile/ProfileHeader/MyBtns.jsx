import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button/Button';

export default function MyBtns() {
  return (
    <MyBtnsWrapper>
      <Button whiteBtn mBtn>
        프로필 수정
      </Button>
      <Button whiteBtn mBtn>
        상품 등록
      </Button>
    </MyBtnsWrapper>
  );
}

const MyBtnsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 12px;
`;
