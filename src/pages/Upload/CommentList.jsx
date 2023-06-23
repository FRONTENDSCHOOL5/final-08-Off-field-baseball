import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MORE_VERTICAL_LIGHT } from '../../styles/CommonIcons';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import MoreModal from '../../components/common/Modal/MoreModal';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function CommentList({ comment, setDeletedComment, children }) {
  const { token, accountname } = useContext(UserContext);

  const navigate = useNavigate();
  const displayedAt = (createdAt) => {
    const milliSeconds = new Date() - Date.parse(createdAt);
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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMoreBtn = (e) => {
    setIsModalOpen(true);
  };
  const { id } = useParams();
  const reportTriggerFunc = async (e) => {
    const url = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await fetch(
        `${url}/post/${id}/comments/${comment.id}/report`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await res.json();

      if (json.report) {
        alert('신고되었습니다');
        setIsReportModalOpen(false);
      } else {
        throw new Error('신고에 실패했습니다');
      }
    } catch (err) {
      console.log(err);
      setIsReportModalOpen(false);
    }
  };
  const deleteTriggerFunc = async (e) => {
    const url = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await fetch(`${url}/post/${id}/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();

      if (json.status === '200') {
        alert('삭제되었습니다');
        setIsDeleteModalOpen(false);
        console.log(json);
        setDeletedComment(comment.id); // 임시 값
      } else {
        throw new Error('삭제에 실패했습니다');
      }
    } catch (err) {
      console.log(err);
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <Comments>
      {/* { 야구러버의 프로파일로 연결 } */}
      <div>
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
      </div>
      <button type='button' className='more' onClick={handleMoreBtn}>
        <img src={MORE_VERTICAL_LIGHT} alt='' />
      </button>
      {isModalOpen && (
        <MoreModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <li>
            <button type='button' onClick={(e) => setIsReportModalOpen(true)}>
              신고하기
            </button>
          </li>
          {comment.author.accountname === accountname && (
            <li>
              <button type='button' onClick={(e) => setIsDeleteModalOpen(true)}>
                삭제
              </button>
            </li>
          )}
        </MoreModal>
      )}
      {isReportModalOpen && (
        <ConfirmModal
          title='댓글을 신고할까요?'
          trigger='신고'
          triggerFunc={reportTriggerFunc}
          closeModal={() => setIsReportModalOpen(false)}
        ></ConfirmModal>
      )}
      {isDeleteModalOpen && (
        <ConfirmModal
          title='댓글을 삭제할까요?'
          trigger='삭제'
          triggerFunc={deleteTriggerFunc}
          closeModal={() => setIsDeleteModalOpen(false)}
        ></ConfirmModal>
      )}
      {children}
    </Comments>
  );
}

const Comments = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;
  .profile-img {
    display: inline-block;
    width: 36px;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
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
  .time::before {
    content: '·';
    margin-right: 6px;
  }
  p {
    margin: 4px 48px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  .more {
    width: 20px;
    aspect-ratio: 1/1;
    margin: 5px 0 0 auto;
  }
`;
