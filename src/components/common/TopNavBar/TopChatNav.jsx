import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { ARROW_LEFT, MORE_VERTICAL } from '../../../styles/CommonIcons';

export default function TopChatNav() {
  const navigate = useNavigate();
  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        <TopNavH2>유저 이름</TopNavH2>
        <MoreBtn>
          <img src={MORE_VERTICAL} alt='more' />
        </MoreBtn>
      </TopNavBar>
    </>
  );
}

const TopNavH2 = styled.h2`
  font-size: 1.4rem;
  flex-grow: 1;
  margin-left: 1em;
`;
