import React, { useState } from 'react';
import styled from 'styled-components';
import {
  POST_ALBUM_OFF,
  POST_ALBUM_ON,
  POST_LIST_OFF,
  POST_LIST_ON,
  IMG_LAYERS,
} from '../../../styles/CommonIcons';
import Post from '../../../components/common/Post/Post';
import { Link } from 'react-router-dom';
import TEST from '../../../assets/images/test.jpg';

export default function UserPost({ posts }) {
  const [isList, setIsList] = useState(true);
  const [isPostExist, setIsPostExist] = useState(true); // 게시글이 없을 경우를 위한 state

  return (
    <>
      {isPostExist ? (
        <>
          <PostViewBtns>
            <ListBtn onClick={() => setIsList(true)}>
              <img
                src={isList ? POST_LIST_ON : POST_LIST_OFF}
                alt='게시물 목록 보기'
              />
            </ListBtn>
            <AlbumBtn onClick={() => setIsList(false)}>
              <img
                src={isList ? POST_ALBUM_OFF : POST_ALBUM_ON}
                alt='게시물 앨범 보기'
              />
            </AlbumBtn>
          </PostViewBtns>
          {isList ? (
            <PostList>
              {posts.map((post, index) => (
                <li key={index}>
                  <Post post={post} />
                </li>
              ))}
            </PostList>
          ) : (
            <PostAlbum>
              {/* 이미지를 클릭하면 해당 게시글로 이동해야함 */}
              {posts.map((post, index) => (
                <PostAlbumItem id={index}>
                  <Link to='#'>
                    <img src={post.image} alt='' />
                  </Link>
                </PostAlbumItem>
              ))}
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
`;

const ListBtn = styled.button``;

const AlbumBtn = styled.button`
  margin: 0 16px;
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
