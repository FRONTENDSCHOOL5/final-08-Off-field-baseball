import React from 'react';
import styled from 'styled-components';

export default function ContentsLayout({ children }) {
  return <ContentsWrapper>{children}</ContentsWrapper>;
}

const ContentsWrapper = styled.div`
  min-height: 100vh;
  margin-top: 4.8rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.6rem 0;
`;
