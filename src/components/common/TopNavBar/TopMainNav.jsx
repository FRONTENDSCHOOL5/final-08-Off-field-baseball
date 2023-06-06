import React from 'react';
import styled from 'styled-components';
import { TopNavBar, SearchBtn } from './Styled';
import { SEARCH } from '../../../styles/CommonIcons';

export default function TopMainNav() {
  return (
    <TopNavBar>
      <TopNavH1>구장 밖 야구 피드</TopNavH1>
      <SearchBtn>
        <img src={SEARCH} alt='검색 창 열기 버튼' />
      </SearchBtn>
    </TopNavBar>
  );
}

const TopNavH1 = styled.h1`
  font-size: 1.8rem;
`;
