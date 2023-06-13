import { BASIC_PROFILE_SM } from '../../styles/CommonIcons';
import styled from 'styled-components';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import Comment from '../../components/common/Comment/Comment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/common/Post/Post';

export default function Upload() {
  return (
    <>
      {/* h~ 태그 고려 중 */}
      <h1 className='a11y-hidden'>구장 밖 야구</h1>
      <h2 className='a11y-hidden'>{'애월읍 위니브 감귤농장'} 포스트 페이지</h2>

      <TopBasicNav />
      <StyledSection>
        <Post></Post>
      </StyledSection>
      <CommentListSection>
        <article>
          {/* 야구러버의 프로파일로 연결 */}
          <Link className='profile-img' to='/profile'>
            <img src={BASIC_PROFILE_SM} alt='' />
          </Link>
          <Link to='/profile' className='name'>
            야구러버
          </Link>
          <p>모자가 예쁘네요~ㅎㅎ</p>
        </article>
        <article>
          {/* 야구러버의 프로파일로 연결 */}
          <Link className='profile-img' to='/profile'>
            <img src={BASIC_PROFILE_SM} alt='' />
          </Link>
          <Link to='/profile' className='name'>
            야구러버
          </Link>
          <p>
            안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요?
            기다리기 지쳤어요 땡뻘땡뻘...
          </p>
        </article>
      </CommentListSection>
      <Comment txt='게시' placeholder='댓글 입력하기'></Comment>
    </>
  );
}

const CommentListSection = styled.section`
  border-top: 1px solid var(--gray-200);
  padding: 20px 16px 82px; //bottom : form 높이 + 20px
  article:not(:first-child) {
    margin-top: 16px;
  }
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
  p {
    margin: 4px 48px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

const StyledSection = styled.section`
  padding: 68px 16px 24px;
`;
