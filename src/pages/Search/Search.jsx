import React, { useState, useContext } from 'react';
import TopSearchNav from '../../components/common/TopNavBar/TopSearchNav';
import UserList from '../../components/common/UserList/UserList';
import TabNav from '../../components/common/TabNavBar/TabNav';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';
import { debounce } from 'lodash';

export default function Search() {
  const [searchUsers, setSearchUsers] = useState([]);
  const [cntUserList, setCntUserList] = useState(20);
  const [userList, setUserList] = useState([]);

  const { token } = useContext(UserContext);

  async function fetchData(searchKeyword) {
    try {
      const response = await fetch(
        `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${searchKeyword}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.json();
    } catch {}
  }
  const onTyping = debounce((searchKeyword) => {
    async function handleFetchData() {
      const users = await fetchData(searchKeyword);
      console.log(users);
      console.log(searchKeyword);
      setSearchUsers(users.slice(0, 20));
      setCntUserList(cntUserList + 20);
      setUserList(users);
    }
    handleFetchData();
  }, 300);

  useEffect(() => {
    const addUser = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight - scrollTop === clientHeight) {
        setSearchUsers(userList.slice(0, cntUserList));
        setCntUserList(cntUserList + 20);

        console.log(cntUserList);
      }
    };

    window.addEventListener('scroll', addUser);

    return () => window.removeEventListener('scroll', addUser);
  }, [cntUserList]);

  return (
    <>
      <TopSearchNav onTyping={onTyping} />
      <SearchList>
        {searchUsers.map((user) => {
          return <UserList key={user._id} user={user} />;
        })}
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
