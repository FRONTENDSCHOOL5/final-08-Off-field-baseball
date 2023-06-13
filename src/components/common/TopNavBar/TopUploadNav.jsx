import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import Button from '../Button/Button';

export default function TopUploadNav({ btnTxt, isValid }) {
  return (
    <>
      <ExtendTopUploadNav>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        <UploadBtn
          bgColor={isValid ? 'var(--primary-color)' : 'var(--secondary-color)'}
          disabled={isValid ? '' : 'disabled'}
          styled
        >
          {btnTxt}
        </UploadBtn>
      </ExtendTopUploadNav>
    </>
  );
}

TopUploadNav.defaultProps = {
  btnTxt: '저장',
};

const ExtendTopUploadNav = styled(TopNavBar)`
  padding: 0.8em 1.6em;
`;

// 임시
const UploadBtn = styled(Button)`
  width: 90px;
`;
