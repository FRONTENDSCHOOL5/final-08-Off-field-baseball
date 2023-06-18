import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import UserProduct from './UserProduct/UserProduct';
import UserPost from './UserPost/UserPost';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabNav from '../../components/common/TabNavBar/TabNav';
import Loading from '../../components/common/Loading';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  let { accountname } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [team, setTeam] = useState('');
  const [intro, setIntro] = useState('');

  const url = 'https://api.mandarin.weniv.co.kr';
  // 테스트용 토큰
  // context 사용해서 로그인한 유저의 토큰을 받아올 예정.
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGE1OThjYjJjYjIwNTY2MzM0NmRmZSIsImV4cCI6MTY5MTk3NDIzNiwiaWF0IjoxNjg2NzkwMjM2fQ.PhATXqZV4NJUI8cd5aUmXThjG-UKPFUoE3m9PXZYjXA'
  );
  localStorage.setItem('accountname', 'Unbeatable_Lotte');
  const token = localStorage.getItem('token');
  const userAccountname = localStorage.getItem('accountname');

  if (location.pathname === `/profile/${userAccountname}`) {
    navigate('/profile');
  }
  const getProfileInfo = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${url}/profile/${accountname ? accountname : userAccountname}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
          method: 'GET',
        }
      );

      const data = await res.json();

      const profile = data.profile;
      setUserProfile(profile);
      setIntro(profile.intro.split('$')[0]);
      setTeam(profile.intro.split('$')[1]);
      setIsLoading(false);
    } catch (err) {
      console.error('에러가 발생했습니다.', err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ProfileHeader
              profileData={userProfile}
              team={team}
              intro={intro}
              targetuser={accountname}
            />
            <UserProduct />
            <UserPost key={location.key} />
          </>
        )}
      </ContentsLayout>
      <TabNav currentId={3} />
    </>
  );
}
