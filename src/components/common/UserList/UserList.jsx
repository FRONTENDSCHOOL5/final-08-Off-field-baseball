import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  LANDERS,
  GIANTS,
  WIZ,
  EAGLES,
  LIONS,
  TIGERS,
  TWINS,
  DINOS,
  BEARS,
  HEROES,
} from '../../../styles/CommonImages';
import FollowBtn from '../FollowBtn';

export default function UserList({ profileData, teamname }) {
  const [data, setData] = useState('');
  const [team, setTeam] = useState('');

  useEffect(() => {
    if (profileData) {
      return setData(profileData);
    }
  }, [profileData]);

  // 받아온 마이 팀 데이터와 일치하는 이미지를 로드하도록 하는 배열
  const myTeam = [
    { id: '1', name: '두산 베어스', name2: 'doosan', img: BEARS },
    { id: '2', name: '키움 히어로즈', name2: 'kiwoom', img: HEROES },
    { id: '3', name: 'LG 트윈스', name2: 'lg', img: TWINS },
    { id: '4', name: 'NC 다이노스', name2: 'nc', img: DINOS },
    { id: '5', name: 'KIA 타이거즈', name2: 'kia', img: TIGERS },
    { id: '6', name: '삼성 라이온즈', name2: 'samsung', img: LIONS },
    { id: '7', name: 'SSG 랜더스', name2: 'ssg', img: LANDERS },
    { id: '8', name: '롯데 자이언츠', name2: 'lotte', img: GIANTS },
    { id: '9', name: '한화 이글스', name2: 'hanhwa', img: EAGLES },
    { id: '10', name: 'KT 위즈', name2: 'kt', img: WIZ },
  ];

  useEffect(() => {
    myTeam.forEach((item) => {
      if (item.name === teamname || item.name2 === teamname) {
        setTeam(item.img);
      }
    });
  });
  return (
    <>
      <UserListItem>
        <Link to='#'>
          <img src={data.image} alt='' />
          <div className='user-info'>
            <h2>{data.username}</h2>
            <p>{data.accountname}</p>
          </div>
        </Link>
        <Container>
          <TeamLogo>
            <img src={team} alt='내가 좋아하는 팀 로고' />
          </TeamLogo>
          <FollowBtn
            profileData={data}
            targetuser={data.accountname}
            isfollow={data.isfollow}
            xsBtn
          />
        </Container>
      </UserListItem>
    </>
  );
}

const UserListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    gap: 12px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .user-info h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .user-info p {
    font-size: 1.2rem;
    color: var(--gray-400);
  }

  img {
    width: 50px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const TeamLogo = styled.div`
  img {
    width: 40px;
    object-fit: contain;
  }
`;
