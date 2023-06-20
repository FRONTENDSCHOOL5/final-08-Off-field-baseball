import React, { useState, useEffect, useContext } from 'react';
import {
  MESSAGE_CIRCLE_SM,
  MORE_VERTICAL_LIGHT,
  MESSAGE_CIRCLE_FILL,
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
  const { accountname } = useContext(UserContext);

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
                    <img src={MESSAGE_CIRCLE_FILL} alt='채팅하기 버튼' />
                    <span>채팅하기</span>
                  </PostBtn>
                ) : (
                  <>
                    <HeartBtn data={data} />
                    <PostBtn>
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
    background: var(--primary-color);
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
    color: var(--primary-color);
  }

  p {
    margin-top: 16px;
    font-size: 1.4rem;
  }
`;
