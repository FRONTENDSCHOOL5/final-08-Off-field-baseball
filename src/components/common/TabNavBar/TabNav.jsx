import React from 'react';
import styled from 'styled-components';

import {
  HOME_FILL,
  HOME,
  MESSAGE_CIRCLE_LG,
  MESSAGE_CIRCLE_FILL,
  EDIT,
  USER_ICON,
  USER_FILL,
} from '../../../styles/CommonIcons';

export default function TabHomeNav() {
  return (
    <>
      <TabNavBar>
        <TabNavUl>
          <TabNavLi>
            <img src={HOME_FILL} alt='홈 선택' />
            <TabNavSpan>홈</TabNavSpan>
          </TabNavLi>

          <TabNavLi>
            <img src={MESSAGE_CIRCLE_LG} alt='채팅' />
            <TabNavSpan>채팅</TabNavSpan>
          </TabNavLi>

          <TabNavLi>
            <img src={EDIT} alt='게시물 작성' />
            <TabNavSpan>게시물 작성</TabNavSpan>
          </TabNavLi>

          <TabNavLi>
            <img src={USER_ICON} alt='프로필' />
            <TabNavSpan>프로필</TabNavSpan>
          </TabNavLi>
        </TabNavUl>
      </TabNavBar>
    </>
  );
}

const TabNavBar = styled.footer`
  width: 100%;
  max-width: 430px;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 100;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
`;

const TabNavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 14px;
`;

const TabNavLi = styled.li`
  width: 84px;
  height: 100%;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;

  img {
    width: 24px;
    aspect-ratio: 1 / 1;
    margin: 0 auto 4px;
  }
`;

const TabNavSpan = styled.span`
  display: block;
  font-size: 10px;
`;

// 테스트용 주석
