import React from 'react';
import TopSearchNav from '../../components/common/TopNavBar/TopSearchNav';
import UserList from '../../components/common/UserList/UserList';
import TabNav from '../../components/common/TabNavBar/TabNav';
import styled from 'styled-components';

export default function Search() {
  return (
    <>
      <TopSearchNav />
      <SearchList>
        {/* 임시 props */}
        <UserList loc='follow' id='samsung' nickname='오재일' isFollow={true} />
        <UserList loc='follow' id='hanwha' nickname='문동주' isFollow={false} />
        <UserList loc='follow' id='lotte' nickname='김원중' isFollow={true} />
      </SearchList>
      <TabNav />
    </>
  );
}

const SearchList = styled.section`
  display: block;
  padding: 68px 1.6rem 0;
  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;
