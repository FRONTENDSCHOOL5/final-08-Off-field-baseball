import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  POST_ALBUM_OFF,
  POST_ALBUM_ON,
  POST_LIST_OFF,
  POST_LIST_ON,
  IMG_LAYERS,
} from '../../../styles/CommonIcons';
import Post from '../../../components/common/Post/Post';
import { Link, useParams } from 'react-router-dom';

export default function UserPost() {
  const [isList, setIsList] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isPostExist, setIsPostExist] = useState(true);
  // 추후 무한 스크롤 작업을 위한 state
  const [numPost, setNumPost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { accountname } = useParams();

  const url = 'https://api.mandarin.weniv.co.kr';
  // 테스트용 토큰
  // context 사용해서 로그인한 유저의 토큰을 받아올 예정.
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGE1OThjYjJjYjIwNTY2MzM0NmRmZSIsImV4cCI6MTY5MTk3NDIzNiwiaWF0IjoxNjg2NzkwMjM2fQ.PhATXqZV4NJUI8cd5aUmXThjG-UKPFUoE3m9PXZYjXA'
  );
  localStorage.setItem('accountname', 'Unbeatable_Lotte');
  const token = localStorage.getItem('token');
  const userAccountname = localStorage.getItem('accountname');

  useEffect(() => {
    const getPostList = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${url}/post/${
            accountname ? accountname : userAccountname
          }/userpost?limit=10&skip=${numPost}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
            method: 'GET',
          }
        );
        const data = await res.json();
        if (data.post.length === 0) {
          setIsPostExist(false);
        } else {
          setPosts(data.post);
          setIsPostExist(true);
        }
      } catch (err) {
        console.log(err);
        setIsPostExist(false);
      }
      setIsLoading(false);
    };

    getPostList();
  }, []);

  return (
    <>
      {isPostExist ? (
        <>
          <PostViewBtns>
            <button onClick={() => setIsList(true)}>
              <img
                src={isList ? POST_LIST_ON : POST_LIST_OFF}
                alt='게시물 목록 보기'
              />
            </button>
            <button onClick={() => setIsList(false)}>
              <img
                src={isList ? POST_ALBUM_OFF : POST_ALBUM_ON}
                alt='게시물 앨범 보기'
              />
            </button>
          </PostViewBtns>
          {isLoading ? (
            <div>로딩중...</div>
          ) : isList ? (
            <PostList>
              {posts.map((post, index) =>
                posts.length - 1 === index ? (
                  <li key={index}>
                    <Post post={post} />
                  </li>
                ) : (
                  <li key={index}>
                    <Post post={post} />
                  </li>
                )
              )}
            </PostList>
          ) : (
            <PostAlbum>
              {/* 이미지를 클릭하면 해당 게시글로 이동해야함 */}
              {posts.map((post, index) => {
                return post.image ? (
                  post.image.includes(',') ? (
                    <PostAlbumItem key={index}>
                      <Link to='#'>
                        <img src={post.image.split(',')[0]} alt='' />
                        <img src={IMG_LAYERS} alt='' className='layer' />
                      </Link>
                    </PostAlbumItem>
                  ) : (
                    <PostAlbumItem key={index}>
                      <Link to='#'>
                        <img src={post.image} alt='' />
                      </Link>
                    </PostAlbumItem>
                  )
                ) : null;
              })}
            </PostAlbum>
          )}
        </>
      ) : (
        <EmptyPost />
      )}
    </>
  );
}

const PostViewBtns = styled.div`
  padding: 9px 0;
  border-bottom: 1px solid var(--gray-200);
  margin: 0 -16px;
  text-align: right;
  & button {
    width: 26px;
  }

  & button:last-child {
    margin: 0 16px;
  }
`;

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const PostAlbum = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 16px;
`;

const PostAlbumItem = styled.li`
  position: relative;
  img {
    aspect-ratio: 1 / 1;
  }

  img.layer {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

const EmptyPost = styled.div`
  margin: 0 -16px;
  background-color: var(--gray-100);
  min-height: 100vh;
`;
