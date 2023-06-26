import React from 'react';
import styled from 'styled-components';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', () => setScreenSize());

const ContentsLayout = ({ children, height }) => {
  return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.main`
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 6.8rem 1.6rem 6rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default ContentsLayout;
