import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';

export default function TopUploadNav() {
  return (
    <>
      <TopNavBar>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        <UploadBtn>저장</UploadBtn>
      </TopNavBar>
    </>
  );
}

const UploadBtn = styled.button`
  max-width: 90px;
  width: 100%;
  height: 32px;
  font-size: 1.4rem;
  background-color: var(--primary-color);
  border-radius: 32px;
  color: #fff;
`;
