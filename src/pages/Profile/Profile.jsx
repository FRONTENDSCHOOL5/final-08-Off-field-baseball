import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import UserProduct from './UserProduct/UserProduct';
import UserPost from './UserPost/UserPost';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabNav from '../../components/common/TabNavBar/TabNav';
import dummy from '../../dummy.json';

export default function Profile() {
  const user = dummy[0].user;
  const post = dummy[0].posts;
  const intro = user.intro.split('$')[0];
  const team = user.intro.split('$')[1];
  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ProfileHeader
          followerCount={user.followerCount}
          followingCount={user.followingCount}
          username={user.username}
          accountname={user.accountname}
          image={user.image}
          intro={intro}
          team={team}
        />
        <UserProduct />
        <UserPost posts={post} />
      </ContentsLayout>
      <TabNav currentId={3} />
    </>
  );
}
