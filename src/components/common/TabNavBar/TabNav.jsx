import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

import { EDIT } from '../../../styles/CommonIcons';

const TabNav = ({ currentId }) => {
  const navigate = useNavigate();
  const { myTeam } = useContext(UserContext);

  const tabList = [
    {
      id: 0,
      title: '홈',
      icon: (
        <svg
          className={currentId === 0 && 'home-fill'}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
            // fill='#52C33D'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path d='M8 21V11H16V21' fill='white' />
          <path
            d='M8 21V11H16V21'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 1,
      title: '채팅',
      icon: (
        <svg
          className={currentId === 1 && 'message-fill'}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z'
            // fill='#52C33D'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ),
    },
    { id: 2, title: '게시물 작성', icon: <img src={EDIT} alt='' /> },
    {
      id: 3,
      title: '프로필',
      icon: (
        <svg
          className={currentId === 3 && 'profile-fill'}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 22V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V22'
            // fill='#52C33D'
          />
          <path
            d='M20 22V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V22'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M4 22H20'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
          />
          <path
            d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
            // fill='#52C33D'
            stroke='var(--gray-400)'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ),
    },
  ];

  const pageMove = (id) => {
    switch (id) {
      case 0:
        navigate('/home');
        break;
      case 1:
        navigate('/chat');
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
        {tabList.map(({ id, title, icon }) => (
          <TabNavLi key={id} onClick={() => pageMove(id)} myTeam={myTeam}>
            {icon}
            <TabNavTitle id={id} currentId={currentId} myTeam={myTeam}>
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

  /* fill 아이콘 */
  .message-fill path,
  .home-fill path:nth-child(1),
  .profile-fill path:nth-child(1),
  .profile-fill path:nth-child(4) {
    fill: ${(props) =>
      props.myTeam
        ? `var(--brand-color-${props.myTeam})`
        : 'var(--primary-color)'};
  }
  .message-fill path,
  .home-fill path,
  .profile-fill path:not(:first-child) {
    stroke: ${(props) =>
      props.myTeam
        ? `var(--brand-color-${props.myTeam})`
        : 'var(--primary-color)'};
  }
`;

const TabNavTitle = styled.span`
  display: block;
  font-size: 1rem;
  color: ${(props) =>
    props.myTeam
      ? `var(--brand-color-${props.myTeam})`
      : 'var(--primary-color)'};
`;
