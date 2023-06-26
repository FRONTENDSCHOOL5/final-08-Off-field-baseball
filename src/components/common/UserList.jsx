import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
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
} from '../../styles/CommonImages';
import FollowBtn from './FollowBtn';

const UserList = ({ user, keyword }) => {
  const [myTeamImg, setMyTeamImg] = useState('');
  const { myTeam } = useContext(UserContext);

  const myTeamList = [
    { id: '1', name: '두산 베어스', name2: 'doosan', img: BEARS },
    { id: '2', name: '키움 히어로즈', name2: 'kiwoom', img: HEROES },
    { id: '3', name: 'LG 트윈스', name2: 'lg', img: TWINS },
    { id: '4', name: 'NC 다이노스', name2: 'nc', img: DINOS },
    { id: '5', name: 'KIA 타이거즈', name2: 'kia', img: TIGERS },
    { id: '6', name: '삼성 라이온즈', name2: 'samsung', img: LIONS },
    { id: '7', name: 'SSG 랜더스', name2: 'ssg', img: LANDERS },
    { id: '8', name: '롯데 자이언츠', name2: 'lotte', img: GIANTS },
    { id: '9', name: '한화 이글스', name2: 'hanwha', img: EAGLES },
    { id: '10', name: 'KT 위즈', name2: 'kt', img: WIZ },
  ];
  useEffect(() => {
    const findMyTeam = () => {
      myTeamList.forEach((item) => {
        if (
          item.name === user.intro?.split('$')[0] ||
          item.name === user.intro?.split('$')[1]
        ) {
          setMyTeamImg(item.img);
        } else if (
          item.name2 === user.intro?.split('$')[1] ||
          item.name === user.intro?.split('$')[1]
        ) {
          setMyTeamImg(item.img);
        }
      });
    };
    findMyTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const matchedText = (text, query) => {
    if (query !== '' && text.includes(query)) {
      const i = text.indexOf(query);
      const parts = [
        text.slice(0, i),
        text.slice(i, i + query.length),
        text.slice(i + query.length),
      ];

      return (
        <>
          {parts[0]}
          <Markedtext myTeam={myTeam}>{parts[1]}</Markedtext>
          {parts[2]}
        </>
      );
    }

    return text;
  };

  return (
    <>
      {user && (
        <UserListItem>
          <Link to={'/profile/' + user.accountname}>
            <img
              src={
                user.image.includes('https://api.mandarin.weniv.co.kr/')
                  ? user.image
                  : 'https://api.mandarin.weniv.co.kr/1687309142552.png'
              }
              alt={user.username + '의 프로필 사진'}
            />
            <div className='user-info'>
              <h2>{matchedText(user.username, keyword)}</h2>
              <p className='ellipsis'>@{user.accountname}</p>
            </div>
          </Link>
          <Container>
            {myTeamImg ? (
              <TeamLogo>
                <img src={myTeamImg} alt='내가 좋아하는 팀 로고' />
              </TeamLogo>
            ) : null}

            <FollowBtn
              profileData={user}
              targetuser={user.accountname}
              isfollow={user.isfollow}
              xsBtn
            />
          </Container>
        </UserListItem>
      )}
    </>
  );
};
export default UserList;

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
    max-width: 264px;
    font-size: 1.2rem;
    padding: 2px 0;
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
    border-radius: 0;
  }
`;

const Markedtext = styled.span`
  color: ${(props) =>
    props.myTeam === 'kt'
      ? 'var(--tertiary-color-kt)'
      : 'var(--primary-color-' + (props.myTeam || 'default') + ')'};
`;
