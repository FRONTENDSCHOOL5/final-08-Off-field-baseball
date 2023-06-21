import React, { useContext, useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import UserProduct from './UserProduct/UserProduct';
import UserPost from './UserPost/UserPost';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabNav from '../../components/common/TabNavBar/TabNav';
import Loading from '../../components/common/Loading';
import { UserContext } from '../../context/UserContext';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  let { username } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [team, setTeam] = useState('');
  const [intro, setIntro] = useState('');

  const url = 'https://api.mandarin.weniv.co.kr';
  const { token, accountname } = useContext(UserContext);

  const getProfileInfo = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${url}/profile/${username ? username : accountname}`,
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
    if (location.pathname === `/profile/${accountname}`) {
      navigate('/profile');
    }
    getProfileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              targetuser={username}
            />
            <UserProduct accountname={username ? username : accountname} />
            <UserPost key={location.key} />
          </>
        )}
      </ContentsLayout>
      <TabNav currentId={3} />
    </>
  );
}
