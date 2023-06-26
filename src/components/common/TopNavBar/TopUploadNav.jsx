import React, { useContext } from 'react';
import styled from 'styled-components';

import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

const TopUploadNav = ({ btnTxt, isValid, event, selectedTeam }) => {
  const navigate = useNavigate();
  const { myTeam } = useContext(UserContext);
  return (
    <>
      <ExtendTopUploadNav>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        {/* 업로드 버튼 임포트해서 사용 */}
        <Button
          bgColor={
            isValid
              ? 'var(--primary-color-' +
                (selectedTeam || myTeam || 'default') +
                ')'
              : 'var(--secondary-color-' +
                (selectedTeam || myTeam || 'default') +
                ')'
          }
          disabled={isValid ? '' : 'disabled'}
          sBtn
          onClick={event}
        >
          {btnTxt}
        </Button>
      </ExtendTopUploadNav>
    </>
  );
};

TopUploadNav.defaultProps = {
  btnTxt: '저장',
};

export default TopUploadNav;

const ExtendTopUploadNav = styled(TopNavBar)`
  padding: 0.8em 1.6em;
`;
