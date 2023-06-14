import React from 'react';
import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import styled from 'styled-components';

export default function TopTitleNav({ loc }) {
  return (
    <>
      <TopNavBar>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {loc === 'followers' ? (
          <TopNavH2>Followers</TopNavH2>
        ) : (
          <TopNavH2>Followings</TopNavH2>
        )}
      </TopNavBar>
    </>
  );
}

const TopNavH2 = styled.h2`
  font-size: 1.4rem;
  flex-grow: 1;
  margin-left: 0.8rem;
`;
