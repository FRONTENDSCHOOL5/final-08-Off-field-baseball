import React, { useState, useEffect } from 'react';
import TopMainNav from '../../components/common/TopNavBar/TopMainNav';
import TabNav from '../../components/common/TabNavBar/TabNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';
import { SYMBOL_LOGO_GRAY } from '../../styles/CommonImages';
import Button from '../../components/common/Button/Button';
import Post from '../../components/common/Post/Post';
import Loading from '../../components/common/Loading';

// 팔로우한 유저의 게시글이 있으면 게시글 리스트
// 없으면 유저를 검색해 팔로우 해보세요! 문구와 검색하기 버튼

const Feed = () => {
  const [postList, setPostList] = useState([]);
  // 추후 무한 스크롤 작업을 위한 state
  const [numPost, setNumPost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  const getFeed = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(`${url}/post/feed/?limit=10&skip=${numPost}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        method: 'GET',
      });
      const res = await req.json();
      setPostList(res.posts);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TopMainNav />
          <ContentsLayout>
            <PostWrapper>
              {postList.length > 0 ? (
                <>
                  {postList.map((post, index) => {
                    return <Post key={index} post={post} />;
                  })}
                </>
              ) : (
                <EmptyPost>
                  <img src={SYMBOL_LOGO_GRAY} alt='' />
                  <p>유저를 검색해 팔로우 해보세요!</p>
                  <Button mBtn>검색하기</Button>
                </EmptyPost>
              )}
            </PostWrapper>
          </ContentsLayout>
          <TabNav currentId={0} />
        </>
      )}
    </>
  );
};

export default Feed;

const EmptyPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 210px;
  gap: 20px;
  p {
    font-size: 1.4rem;
    color: var(--gray-400);
  }
  img {
    width: 100px;
    aspect-ratio: 1 / 1;
  }

  Button {
    height: 44px;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
