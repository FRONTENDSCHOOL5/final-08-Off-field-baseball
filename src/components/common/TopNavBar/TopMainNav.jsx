import React from 'react';
import styled from 'styled-components';
import { TopNavBar, LeftArrow, MoreBtn, SearchBtn } from './Styled';

const TopNavH1 = styled.h1`
  font-size: 18px;
  color: #fff;
`;

export default function TopMainNav() {
  return (
    <TopNavBar>
      <TopNavH1>구장 밖 야구</TopNavH1>
    </TopNavBar>
  );
}
