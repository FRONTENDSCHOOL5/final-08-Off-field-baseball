import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const MyBtns = () => {
  const navigate = useNavigate();
  return (
    <MyBtnsWrapper>
      <Button whiteBtn mBtn onClick={() => navigate('/profile/edit')}>
        프로필 수정
      </Button>
      <Button whiteBtn mBtn onClick={() => navigate('/product/upload')}>
        상품 등록
      </Button>
    </MyBtnsWrapper>
  );
};

export default MyBtns;

const MyBtnsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 12px;
`;
