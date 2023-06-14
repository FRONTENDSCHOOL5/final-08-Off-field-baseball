import React from 'react';
import UserList from '../../components/common/UserList/UserList';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';
import TopTitleNav from '../../components/common/TopNavBar/TopTitleNav';

export default function FollowList() {
  return (
    <>
      <TopTitleNav loc='followers' />
      <ContentsLayout>
        <UserListWrap>
          <UserList
            id={'@Unbeatable_Lotte'}
            nickname={'최강롯데'}
            isFollow={true}
          />
          <UserList
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
