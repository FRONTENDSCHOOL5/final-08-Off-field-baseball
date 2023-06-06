import React from 'react';
import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { ARROW_LEFT, MORE_VERTICAL } from '../../../styles/CommonIcons';

export default function TopBasicNav() {
  return (
    <>
      <TopNavBar>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        <MoreBtn>
          <img src={MORE_VERTICAL} alt='more' />
        </MoreBtn>
      </TopNavBar>
    </>
  );
}
