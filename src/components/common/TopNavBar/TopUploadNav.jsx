import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

export default function TopUploadNav() {
  return (
    <>
      <TopNavBar>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        {/* 임시 사이즈 */}
        <Button type='submit' style={{ width: '90px' }}>
          저장
        </Button>
      </TopNavBar>
    </>
  );
}
