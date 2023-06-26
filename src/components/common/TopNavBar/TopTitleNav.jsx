import React from 'react';
import { TopNavBar, LeftArrow } from './Styled';
import { ARROW_LEFT } from '../../../styles/CommonIcons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TopTitleNav = ({ loc }) => {
  const navigate = useNavigate();
  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        <TopNavH2>{loc}</TopNavH2>
      </TopNavBar>
    </>
  );
};

export default TopTitleNav;

const TopNavH2 = styled.h2`
  font-size: 1.4rem;
  flex-grow: 1;
  margin-left: 0.8rem;
`;
