import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../Modal/ConfirmModal';

import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { ARROW_LEFT, MORE_VERTICAL } from '../../../styles/CommonIcons';

const TopChatNav = ({ username }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>
        <TopNavH2>{username}</TopNavH2>
        <MoreBtn onClick={() => setIsModalOpen(true)}>
          <img src={MORE_VERTICAL} alt='more' />
        </MoreBtn>
      </TopNavBar>
      {isModalOpen && (
        <ConfirmModal
          title='채팅방 나가기'
          trigger='나가기'
          triggerFunc={() => navigate('/chat')}
          closeModal={() => setIsModalOpen(false)}
        ></ConfirmModal>
      )}
    </>
  );
};

export default TopChatNav;

const TopNavH2 = styled.h2`
  font-size: 1.4rem;
  flex-grow: 1;
  margin-left: 1em;
`;
