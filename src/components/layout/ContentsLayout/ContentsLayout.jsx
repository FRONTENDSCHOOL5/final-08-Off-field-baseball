import React from 'react';
import styled from 'styled-components';

export default function ContentsLayout({ children }) {
  return <ContentsWrapper>{children}</ContentsWrapper>;
}

const ContentsWrapper = styled.div`
  min-height: 100vh;
  padding: 6.8rem 1.6rem 6rem;
  display: flex;
  flex-direction: column;
`;
