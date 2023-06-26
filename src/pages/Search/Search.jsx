import React, { useState, useEffect, useContext } from 'react';
import TopSearchNav from '../../components/common/TopNavBar/TopSearchNav';
import UserList from '../../components/common/UserList';
import TabNav from '../../components/common/TabNav';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';
import { debounce } from 'lodash';

const Search = () => {
  const [searchUsers, setSearchUsers] = useState([]);
  const [cntUserList, setCntUserList] = useState(20);
  const [userList, setUserList] = useState([]);
  const [keyword, setKeyword] = useState(''); // 검색 키워드

  const { token } = useContext(UserContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '계정 검색 | 구장 밖 야구';
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.json();
    } catch {}
  };
  const onTyping = () => {
    async function handleFetchData() {
      const users = await fetchData();
      // console.log(users);
      // console.log(searchKeyword);
      setSearchUsers(users.slice(0, 20));
      setCntUserList(cntUserList + 20);
      setUserList(users);
      console.log(users);
    }
    handleFetchData();
  };

  // 무한 스크롤
  useEffect(() => {
    const addUser = () => {
      // 더 렌더링할 리스트가 없으면 얼리리턴
      if (userList.length + 20 < cntUserList) {
        return;
      }
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // pc는 스크롤을 끝까지 내려도 정확히 clientHeight와 같아지지 않아 20 더함
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        setSearchUsers(userList.slice(0, cntUserList));
        setCntUserList(cntUserList + 20);
      }
    };

    window.addEventListener('scroll', addUser);

    return () => window.removeEventListener('scroll', addUser);
  }, [cntUserList]);

  useEffect(() => {
    // console.log(keyword);
    // onTyping();
    let timeout;
    if (keyword.length > 0) {
      timeout = setTimeout(() => {
        onTyping();
      }, 200);
    } else {
      setUserList([]);
      setSearchUsers([]);
    }
    return () => clearTimeout(timeout);
  }, [keyword]);

  return (
    <>
      <TopSearchNav keyword={keyword} onChange={setKeyword} />
      <SearchList>
        {searchUsers.map((user) => {
          return <UserList key={user._id} user={user} keyword={keyword} />;
        })}
      </SearchList>
      <TabNav />
    </>
  );
};

export default Search;

const SearchList = styled.section`
  display: block;
  padding: 68px 1.6rem 0;
  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;
