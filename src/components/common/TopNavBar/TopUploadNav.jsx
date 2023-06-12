import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';

export default function TopUploadNav({ btnTxt }) {
  return (
    <>
      <ExtendTopUploadNav>
        <button>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        <UploadBtn>{btnTxt}</UploadBtn>
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

const UploadBtn = styled.button`
  max-width: 90px;
  width: 100%;
  height: 32px;
  font-size: 1.4rem;
  background-color: var(--primary-color);
  border-radius: 32px;
  color: #fff;
`;
