import React from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function TopUploadNav({ btnTxt, isValid }) {
  const navigate = useNavigate();
  return (
    <>
      <ExtendTopUploadNav>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        <Button
          bgColor={isValid ? 'var(--primary-color)' : 'var(--secondary-color)'}
          disabled={isValid ? '' : 'disabled'}
          sBtn
        >
          {btnTxt}
        </Button>
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
