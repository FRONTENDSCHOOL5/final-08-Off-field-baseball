import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';

export default function TopSearchNav() {
  return (
    <>
      <TopNavBar>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        <TopSearchInput placeholder='계정 검색' />
      </TopNavBar>
    </>
  );
}

const TopSearchInput = styled.input`
  max-width: 356px;
  width: 100%;
  height: 32px;
  font-size: 1.4rem;
  border-radius: 32px;
  background-color: var(--gray-100);
  padding: 0.7em 1.4em;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: var(--gray-300);
  }
`;
