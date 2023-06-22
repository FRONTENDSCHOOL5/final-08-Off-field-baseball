import React, { useState, useEffect, useContext } from 'react';
import {
  MESSAGE_CIRCLE_SM,
  MORE_VERTICAL_LIGHT,
} from '../../../styles/CommonIcons';
import styled from 'styled-components';
import HeartBtn from '../HeartBtn';
import { useParams, Link } from 'react-router-dom';
import Loading from '../Loading';
import PostModal from '../Modal/PostModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { UserContext } from '../../../context/UserContext';

export default function Post({
  loc,
  post = [], // post: {id, userId, content, img, like, comment, createdAt}
  updatePost,
}) {
  const [data, setData] = useState('');
  const [dateData, setDateData] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [postId, setPostId] = useState('');
  const [author, setAuthor] = useState('');
  const { accountname, myTeam } = useContext(UserContext);

  useEffect(() => {
    if (post) {
      return setData({ ...post });
    }
  }, [post, id]);

  useEffect(() => {
    if (data) {
      setDateData(data.createdAt);
      setPostId(data.id);
      setAuthor(data.author.accountname);
      if (data.image) {
        setImageFile(data.image.split(','));
      }
    }
  }, [data]);

  const year = new Date(dateData).getFullYear();
  const month = new Date(dateData).getMonth() + 1;
  const day = new Date(dateData).getDate();

  return (
    <>
      {data ? (
        <>
          <PostWrapper>
            <ProfileImg src={data.author.image} alt='' />
            <UserPost>
              <UserInfo>
                <h2>{data.author.username}</h2>
                <p>@{data.author.accountname}</p>
                <LinkTo to={'/profile/' + data.author.accountname}></LinkTo>
              </UserInfo>
              <UserText>
                {!id && <LinkTo to={'/post/' + data.id}></LinkTo>}
                <>
                  {loc === 'product' ? (
                    <Product>
                      <img src={data.itemImage} alt='' />
                      <h2>{data.itemName}</h2>
                      <span>
                        {data.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
                      </span>
                      <p>{data.link}</p>
                    </Product>
                  ) : (
                    data.content
                  )}
                </>
              </UserText>
              {imageFile.length === 0 ? null : (
                <>
                  {imageFile.length > 1 ? (
                    <SwiperWrapper
                      myteam={myTeam}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                    >
                      <>
                        {imageFile.map((img, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img src={img} alt='' />
                            </SwiperSlide>
                          );
                        })}
                      </>
                      {!id && <LinkTo to={'/post/' + post.id}></LinkTo>}
                    </SwiperWrapper>
                  ) : (
                    <ImgWrapper>
                      <li>
                        {!id && <LinkTo to={'/post/' + post.id}></LinkTo>}
                        <img src={imageFile[0]} alt='' />
                      </li>
                    </ImgWrapper>
                  )}
                </>
              )}

              <PostBtnWrapper>
                {loc === 'product' ? (
                  <PostBtn
                    className='chat-btn'
                    onClick={() => alert('미구현 기능입니다.')}
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z'
                        fill={
                          'var(--primary-color-' + (myTeam || 'default') + ')'
                        }
                        stroke={
                          'var(--primary-color-' + (myTeam || 'default') + ')'
                        }
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <span>채팅하기</span>
                  </PostBtn>
                ) : (
                  <>
                    <HeartBtn data={data} />
                    <PostBtn>
                      <LinkTo to={'/post/' + data.id}></LinkTo>
                      <img src={MESSAGE_CIRCLE_SM} alt='댓글창 열기 버튼' />
                      <span>{data.commentCount}</span>
                    </PostBtn>
                  </>
                )}
              </PostBtnWrapper>
              <CreateTime dateTime={data.createdAt}>
                {year}년 {month}월 {day}일
              </CreateTime>
            </UserPost>
            {loc === 'product' &&
            data.author.accountname !== accountname ? null : (
              <PostMenu
                onClick={() => {
                  setModal(true);
                  console.log(data.author.accountname);
                }}
              >
                <img src={MORE_VERTICAL_LIGHT} alt='더보기 버튼' />
              </PostMenu>
            )}
          </PostWrapper>
          {localStorage.getItem('accountname') === author ? (
            <>
              {modal && (
                <PostModal
                  isModalOpen={modal}
                  setIsModalOpen={setModal}
                  id={postId}
                  updatePost={updatePost}
                  mode='delete'
                  loc={loc}
                />
              )}
            </>
          ) : (
            <>
              {modal && (
                <PostModal
                  isModalOpen={modal}
                  setIsModalOpen={setModal}
                  id={postId}
                  mode='report'
                />
              )}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
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
  width: calc(100% - 55px);
`;

const UserInfo = styled.div`
  position: relative;
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

const UserText = styled.div`
  margin: 16px 0;
  font-size: 1.4rem;
  line-height: 1.3;
  position: relative;
  word-break: break-all;
`;

const SwiperWrapper = styled(Swiper)`
  position: relative;
  margin-bottom: 12px;
  aspect-ratio: 304/228;
  width: 100%;
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: ${(props) =>
      'var(--primary-color-' + (props.myteam || 'default') + ')'};
  }
  .swiper-pagination-bullet {
    background: white;
    opacity: 1;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  span {
    width: 6px;
    height: 6px;
  }
`;

const ImgWrapper = styled.ul`
  position: relative;
  display: flex;
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
  position: relative;
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
  z-index: 200;
  padding: 0px 0px 10px 10px;
  & img {
    width: 18px;
    aspect-ratio: 1 / 1;
  }
`;

const LinkTo = styled(Link)`
  position: absolute;
  inset: 0;
  padding: 16px 0;
  overflow: auto;
  z-index: 100;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 16px 0 8px;
  }
  span {
    font-size: 1.2rem;
    color: ${(props) =>
      'var(--primary-color-' + (props.myTeam || 'default') + ')'};
  }

  p {
    margin-top: 16px;
    font-size: 1.4rem;
  }
`;
