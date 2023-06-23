import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import Comment from '../../components/common/Comment/Comment';
import { useParams } from 'react-router-dom';
import Post from '../../components/common/Post/Post';
import { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import CommentList from './CommentList';
import { UserContext } from '../../context/UserContext';
import { useInView } from 'react-intersection-observer';

const Detail = () => {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  // 댓글 달면 바로 업데이트 되도록 하는 state (더 좋은 방법이 있을지 고민 중)
  const [updateComment, setUpdateComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const url = 'https://api.mandarin.weniv.co.kr';
  const { token } = useContext(UserContext);
  const { inView, ref } = useInView();
  const [userImg, setUserImg] = useState('');
  let { id } = useParams();
  const [showCommentList, setShowCommentList] = useState('');
  const [cntCommentList, setCntCommentList] = useState(10); // 보여줄 댓글 수

  const [deletedComment, setDeletedComment] = useState(false); //댓글 삭제 시 id 값

  /* 무한 스크롤 */
  useEffect(() => {
    const addUser = () => {
      // 더 렌더링할 리스트가 없으면 얼리리턴
      if (commentList.length + 10 < cntCommentList) {
        return;
      }
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // pc는 스크롤을 끝까지 내려도 정확히 clientHeight와 같아지지 않아 20 더함
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        setShowCommentList(commentList.slice(0, cntCommentList));
        setCntCommentList(cntCommentList + 10);
      }
    };

    window.addEventListener('scroll', addUser);

    return () => window.removeEventListener('scroll', addUser);
  }, [cntCommentList]);
  /* * * * * * * * * */

  const getUserProfile = async () => {
    try {
      const req = await fetch(`${url}/user/myInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const res = await req.json();
      setUserImg(res.user.image);
    } catch (err) {
      console.log(err);
    }
  };

  const getPostDetail = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(`${url}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const res = await req.json();
      setPost(res.post);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      comment: {
        content: comment,
      },
    };
    try {
      const req = await fetch(`${url}/post/${id}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      setUpdateComment(res);
      setCommentList([res.comment, ...commentList]);
      setShowCommentList(
        [res.comment, ...commentList].slice(0, cntCommentList)
      );
      setIsLoading(false);
      setComment('');
      console.log(res);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const getCommentList = async () => {
    setLoading(true);
    try {
      const req = await fetch(`${url}/post/${id}/comments/?limit=10000`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const res = await req.json();
      setCommentList(res.comments);
      setShowCommentList(res.comments.slice(0, cntCommentList));
      setCntCommentList(cntCommentList + 10);
      if (res.comments.length < 10) setDone(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    getUserProfile();
    getCommentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPostDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, updateComment]);

  useEffect(() => {
    const newCommentList = [...commentList];
    for (const i in newCommentList) {
      if (newCommentList[i].id === deletedComment) {
        newCommentList.splice(i, 1);
      }
    }
    setCommentList(newCommentList);
    setShowCommentList(newCommentList.slice(0, cntCommentList));
  }, [deletedComment]);

  return (
    <>
      {/* h~ 태그 고려 중 */}
      <h1 className='a11y-hidden'>구장 밖 야구</h1>
      <h2 className='a11y-hidden'>{'애월읍 위니브 감귤농장'} 포스트 페이지</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TopBasicNav />
          <PostWrapper>
            {post && <Post post={post} />}
            <CommentListSection>
              <h3 className='a11y-hidden'>댓글 목록</h3>
              {showCommentList.length > 0 && (
                <>
                  {showCommentList.map((comment, index) => {
                    return showCommentList.length - 1 === index ? (
                      <CommentList
                        key={index}
                        comment={comment}
                        setDeletedComment={setDeletedComment}
                      >
                        <Refrence ref={ref}></Refrence>
                      </CommentList>
                    ) : (
                      <CommentList
                        key={index}
                        comment={comment}
                        setDeletedComment={setDeletedComment}
                      />
                    );
                  })}
                </>
              )}
            </CommentListSection>
          </PostWrapper>
          <Comment
            txt='게시'
            placeholder='댓글 입력하기'
            value={comment}
            setValue={setComment}
            event={handleCommentSubmit}
          >
            <img src={userImg} alt='내 프로필 사진' />
          </Comment>
        </>
      )}
    </>
  );
};

export default Detail;

const CommentListSection = styled.ul`
  border-top: 1px solid var(--gray-200);
  padding: 20px 16px; //bottom : form 높이 + 20px
  margin: 20px -16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostWrapper = styled(ContentsLayout)`
  min-height: 0;
`;

const Refrence = styled.div`
  position: absolute;
  width: 100%;
`;
