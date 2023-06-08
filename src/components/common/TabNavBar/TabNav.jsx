import React from 'react';
import {
  HOME_FILL,
  MESSAGE_CIRCLE_LG,
  EDIT,
  USER_ICON,
} from '../../../styles/CommonIcons';

const TabNavBar = styled.footer`
  width: 100%;
  max-width: 430px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
`;

const TabNavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const TabNavLi = styled.li`
  margin-top: 10px;
  text-align: center;
  width: 84px;
`;

const TabNavSpan = styled.span`
  display: block;
  font-size: 10px;
`;

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
