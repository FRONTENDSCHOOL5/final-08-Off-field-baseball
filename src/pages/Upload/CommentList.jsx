import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function CommentList({ comment }) {
  const navigate = useNavigate();

  const displayedAt = (createdAt) => {
    const milliSeconds = new Date() - Date.parse(createdAt);
    console.log(milliSeconds);
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  console.log(comment);
  return (
    <Comments>
      {/* { 야구러버의 프로파일로 연결 } */}
      <button
        className='profile-img'
        onClick={() =>
          navigate(`/profile/${comment.author.accountname}`, {
            profileData: comment.author,
          })
        }
      >
        <img src={comment.author.image} alt='' />
      </button>
      <button
        className='name'
        onClick={() =>
          navigate(`/profile/${comment.author.accountname}`, {
            profileData: comment.author,
          })
        }
      >
        {comment.author.username}
        <span className='time'>{displayedAt(comment.createdAt)}</span>
      </button>
      <p>{comment.content}</p>
    </Comments>
  );
}

const Comments = styled.li`
  .profile-img {
    display: inline-block;
    width: 36px;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  .name {
    display: inline-block;
    vertical-align: top;
    margin: 6px 0 0 12px;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  .time {
    display: inline-block;
    margin-left: 6px;
    font-size: 1rem;
    color: var(--gray-400);
  }
  p {
    margin: 4px 48px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;
