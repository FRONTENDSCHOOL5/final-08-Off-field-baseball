import React, { useState } from 'react';
import { TopNavBar, LeftArrow, MoreBtn } from './Styled';
import { ARROW_LEFT, MORE_VERTICAL } from '../../../styles/CommonIcons';
import styled from 'styled-components';
import MoreModal from '../Modal/MoreModal';
import { useNavigate } from 'react-router-dom';

export default function TopBasicNav({ accountname = '' }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopNavBar>
        <button onClick={() => navigate(-1)}>
          <LeftArrow src={ARROW_LEFT} alt='뒤로 가기 버튼' />
        </button>

        <MoreBtn onClick={() => setIsModalOpen(true)}>
          <img src={MORE_VERTICAL} alt='more' />
        </MoreBtn>
      </TopNavBar>
      {isModalOpen && (
        <MoreModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <li>
            <button type='button'>설정 및 개인정보</button>
          </li>
          <li>
            <button type='button'>로그아웃</button>
          </li>
        </MoreModal>
      )}
    </>
  );
}
