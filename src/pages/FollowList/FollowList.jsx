import React, { useContext, useEffect, useState } from 'react';
import UserList from '../../components/common/UserList/UserList';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { UserContext } from '../../contexts/UserContext';

export default function FollowList() {
  const { type, accountname } = useParams();
  const url = 'https://api.mandarin.weniv.co.kr';
  const { token } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [followList, setFollowList] = useState([]);

  useEffect(() => {
    const getFollowList = async () => {
      setIsLoading(true);
      try {
        const req = await fetch(`${url}/profile/${accountname}/${type}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });
        const res = await req.json();
        setFollowList(res);
        setIsLoading(false);
      } catch (err) {
        console.error('에러가 발생했습니다.', err);
        setIsLoading(false);
      }
    };
    getFollowList();
  }, []);

  return (
    <>
      <TopTitleNav loc={type} />
      <ContentsLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <UserListWrap>
              {followList.map((user, index) => {
                return (
                  <UserList
                    key={index}
                    profileData={user}
                    teamname={user.intro.split('$')[1]}
                  ></UserList>
                );
              })}
            </UserListWrap>
          </>
        )}
      </ContentsLayout>
    </>
  );
}
const UserListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
