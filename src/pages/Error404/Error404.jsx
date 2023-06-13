import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { ERROR_404 } from '../../styles/CommonImages';

const Error404 = () => {
  return (
    <ErrorLayout>
      <img src={ERROR_404} alt='에러 화면입니다.' />
      <p>페이지를 찾을 수 없습니다 :(</p>
      <Button padding='13px 0' fontWeight='500'>
        이전 페이지
      </Button>
    </ErrorLayout>
  );
};

export default Error404;

const ErrorLayout = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 13px;
    width: 200px;
    height: auto;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.4rem;
    color: #767676;
  }

  Button {
    width: 120px;
  }
`;
