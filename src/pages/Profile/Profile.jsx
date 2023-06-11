import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import UserProduct from './UserProduct/UserProduct';
import UserPost from './UserPost/UserPost';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';

export default function Profile() {
  return (
    <>
      <TopBasicNav />
      <ContentsLayout>
        <ProfileHeader />
        <UserProduct />
        <UserPost />
      </ContentsLayout>
    </>
  );
}
