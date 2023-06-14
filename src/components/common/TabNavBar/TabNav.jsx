import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const TabNav = ({ currentId }) => {
  const navigate = useNavigate();

  const tabList = [
    { id: 0, title: '홈', icon: HOME, fillIcon: HOME_FILL },
    {
      id: 1,
      title: '채팅',
      icon: MESSAGE_CIRCLE_LG,
      fillIcon: MESSAGE_CIRCLE_FILL,
    },
    { id: 2, title: '게시물 작성', icon: EDIT, fillIcon: EDIT },
    { id: 3, title: '프로필', icon: USER_ICON, fillIcon: USER_FILL },
  ];

  const pageMove = (id) => {
    switch (id) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/chatList');
        break;
      case 2:
        navigate('/post/upload');
        break;
      case 3:
        navigate('/profile');
        break;
      default:
    }
  };

  return (
    <TabNavBar>
      <TabNavUl>
        {tabList.map(({ id, title, icon, fillIcon }) => (
          <TabNavLi key={id} onClick={() => pageMove(id)}>
            <img src={id === currentId ? fillIcon : icon} alt='' />
            <TabNavTitle id={id} currentId={currentId}>
              {title}
            </TabNavTitle>
          </TabNavLi>
        ))}
      </TabNavUl>
    </TabNavBar>
  );
};

export default TabNav;

const TabNavBar = styled.footer`
  width: 100%;
  max-width: 430px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: #fff;
  border-top: 1px solid var(--gray-200);
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

const TabNavTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: ${(props) =>
    props.id === props.currentId ? 'var(--primary-color)' : 'var(--gray-400)'};
`;

// 테스트용 주석
