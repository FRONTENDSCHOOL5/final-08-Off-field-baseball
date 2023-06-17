import React, { useState, useEffect } from 'react';
import {
  MESSAGE_CIRCLE_SM,
  MORE_VERTICAL_LIGHT,
  MESSAGE_CIRCLE_FILL,
} from '../../../styles/CommonIcons';
import styled from 'styled-components';
import HeartBtn from '../HeartBtn';

export default function Post({
  loc,
  post = [], // post: {id, userId, content, img, like, comment, createdAt}
}) {
  const [data, setData] = useState('');
  const [dateData, setDateData] = useState('');
  const [imageFile, setImageFile] = useState('');
  useEffect(() => {
    if (post) {
      return setData({ ...post });
    }
  }, [post]);

  useEffect(() => {
    if (data) {
      setDateData(data.createdAt);
      if (data.image) {
        setImageFile(data.image.split(','));
      }
    }
  }, [data]);

  const year = new Date(dateData).getFullYear();
  const month = new Date(dateData).getMonth() + 1;
  const day = new Date(dateData).getDate();

  return (
    <PostWrapper>
      <ProfileImg src={post.author.image} alt='' />
      <UserPost>
        <UserInfo>
          <h2>{post.author.username}</h2>
          <p>@{post.author.accountname}</p>
        </UserInfo>
        <UserText>{post.content}</UserText>
        {imageFile.length === 0 ? null : (
          <ImgWrapper>
            {imageFile.length > 1 ? (
              imageFile.map((img, index) => {
                return (
                  <li key={index}>
                    <img src={img} alt='' />
                  </li>
                );
              })
            ) : (
              <li>
                <img src={imageFile[0]} alt='' />
              </li>
            )}
          </ImgWrapper>
        )}

        <PostBtnWrapper>
          {loc === 'product' && (
            <PostBtn className='chat-btn'>
              <img src={MESSAGE_CIRCLE_FILL} alt='채팅하기 버튼' />
              <span>채팅하기</span>
            </PostBtn>
          )}
          <HeartBtn data={data} />
          <PostBtn>
            <img src={MESSAGE_CIRCLE_SM} alt='댓글창 열기 버튼' />
            <span>{post.commentCount}</span>
          </PostBtn>
        </PostBtnWrapper>
        <CreateTime dateTime={data.createdAt}>
          {year}년 {month}월 {day}일
        </CreateTime>
      </UserPost>
      <PostMenu>
        <img src={MORE_VERTICAL_LIGHT} alt='더보기 버튼' />
      </PostMenu>
    </PostWrapper>
  );
}

const PostWrapper = styled.article`
  display: flex;
  gap: 12px;
  position: relative;
`;

const ProfileImg = styled.img`
  width: 42px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
`;

const UserPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`;

const UserInfo = styled.div`
  h2 {
    font-size: 1.4rem;
    margin-bottom: 4px;
    font-weight: 500;
  }
  p {
    color: var(--gray-400);
    font-size: 1.2rem;
  }
`;

const UserText = styled.p`
  margin: 16px 0;
  font-size: 1.4rem;
  line-height: 1.3;
`;

const ImgWrapper = styled.ul`
  display: flex;
  overflow: hidden;
  margin-bottom: 12px;
  & li {
    flex-basis: 100%;
    height: 228px;
    flex-shrink: 0;
  }
  & li img {
    object-fit: cover;
    border-radius: 10px;
  }
`;

const PostBtnWrapper = styled.div`
  display: flex;
  margin: 0 0 16px;
  gap: 16px;
  color: var(--gray-400);
`;

const PostBtn = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 1.2rem;
  img {
    width: 20px;
  }
`;

const CreateTime = styled.time`
  color: var(--gray-400);
`;

const PostMenu = styled.button`
  position: absolute;
  right: 0;
  top: 4px;
  & img {
    width: 18px;
  }
`;
