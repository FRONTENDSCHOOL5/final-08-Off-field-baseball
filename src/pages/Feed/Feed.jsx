import React, { useState, useEffect, useCallback, useContext } from 'react';
import TopMainNav from '../../components/common/TopNavBar/TopMainNav';
import TabNav from '../../components/common/TabNav';
import ContentsLayout from '../../components/layout/ContentsLayout';
import styled from 'styled-components';
import { SYMBOL_LOGO_GRAY } from '../../styles/CommonImages';
import Button from '../../components/common/Button';
import Post from '../../components/common/Post';
import Loading from '../../components/common/Loading';
import { useInView } from 'react-intersection-observer';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

// 팔로우한 유저의 게시글이 있으면 게시글 리스트
// 없으면 유저를 검색해 팔로우 해보세요! 문구와 검색하기 버튼

const Feed = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.mandarin.weniv.co.kr';
  const { token, myTeam } = useContext(UserContext);

  const [numPost, setNumPost] = useState(0);
  const [done, setDone] = useState(false);
  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '홈피드 | 구장 밖 야구';
  }, []);

  const getFeed = useCallback(async () => {
    setLoading(true);
    try {
      const req = await fetch(`${url}/post/feed/?limit=10&skip=${numPost}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        method: 'GET',
      });
      const res = await req.json();
      setPostList(postList.concat(res.posts));
      if (res.posts.length < 10) setDone(true);
      setIsLoading(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPost]);

  useEffect(() => {
    if (!done) {
      getFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPost]);

  useEffect(() => {
    if (inView && !loading) {
      setNumPost((current) => current + 10);
    }
  }, [inView, loading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TopMainNav />
          {postList.length > 0 ? (
            <>
              <ContentsLayout>
                <PostWrapper>
                  {postList.map((post, index) => {
                    return postList.length - 1 === index ? (
                      <li key={index} ref={ref}>
                        <Post post={post} />
                      </li>
                    ) : (
                      <li key={index}>
                        <Post key={index} post={post} />
                      </li>
                    );
                  })}
                </PostWrapper>
              </ContentsLayout>
            </>
          ) : (
            <EmptyLayout>
              <EmptyPost>
                <img src={SYMBOL_LOGO_GRAY} alt='' />
                <p>유저를 검색해 팔로우 해보세요!</p>
                <Button
                  mBtn
                  onClick={() => navigate('/search')}
                  bgColor={'var(--primary-color-' + (myTeam || 'default') + ')'}
                >
                  검색하기
                </Button>
              </EmptyPost>
            </EmptyLayout>
          )}
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
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  p {
    font-size: 1.4rem;
    color: var(--gray-400);
  }
  img {
    width: 100px;
    aspect-ratio: 1 / 1;
  }
`;

const PostWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const EmptyLayout = styled(ContentsLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
