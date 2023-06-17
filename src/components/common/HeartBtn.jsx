import React, { useEffect, useState } from 'react';
import { HEART, HEART_FILL } from '../../styles/CommonIcons';
import styled from 'styled-components';

export default function HeartBtn({ data }) {
  const [hearted, setHearted] = useState('');
  const [heartCount, setHeartCount] = useState('');
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  useEffect(() => {
    setHearted(data.hearted);
    setHeartCount(data.heartCount);
  }, [data]);
  const handleHeart = async () => {
    const req = await fetch(
      `${url}/post/${data.id}/${hearted ? 'unheart' : 'heart'}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        method: hearted ? 'DELETE' : 'POST',
      }
    );
    const res = await req.json();
    setHearted(!hearted);
    setHeartCount(res.post.heartCount);
    console.log(res);
  };
  return (
    <PostBtn onClick={handleHeart}>
      {hearted ? (
        <img src={HEART_FILL} alt='좋아요 취소 버튼' />
      ) : (
        <img src={HEART} alt='좋아요 누르기 버튼' />
      )}
      <span>{heartCount}</span>
    </PostBtn>
  );
}

const PostBtn = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 1.2rem;
  img {
    width: 20px;
  }
`;
