import React from 'react';
import UserList from '../../components/common/UserList/UserList';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';

export default function FollowList() {
  return (
    <>
      <TopBasicNav loc='follow' />
      <ContentsLayout>
        <UserListWrap>
          <UserList
            loc='follow'
            id={'@Unbeatable_Lotte'}
            nickname={'최강롯데'}
            isFollow={true}
          />
          <UserList
            loc='follow'
            id={'@Super_Lions'}
            nickname={'최강삼성'}
            isFollow={false}
          />
        </UserListWrap>
      </ContentsLayout>
    </>
  );
}
const UserListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
