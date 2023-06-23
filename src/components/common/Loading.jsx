import React from 'react';
import styled from 'styled-components';
import { LOADING } from '../../styles/CommonImages';

const Loading = () => {
  return (
    <Background>
      <img src={LOADING} alt='로딩중 입니다' />
      <p>잠시만 기다려 주세요.</p>
    </Background>
  );
};

export default Loading;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: auto;
  }

  p {
    text-align: center;
    color: var(--gray-400);
    margin-top: 20px;
    font-size: 1.2rem;
  }
`;
