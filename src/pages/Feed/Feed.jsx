import React from 'react';
import TopMainNav from '../../components/common/TopNavBar/TopMainNav';
import TabNav from '../../components/common/TabNavBar/TabNav';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import styled from 'styled-components';
import { SYMBOL_LOGO_GRAY } from '../../styles/CommonImages';
import Button from '../../components/common/Button/Button';
import Post from '../../components/common/Post/Post';

// 팔로우한 유저의 게시글이 있으면 게시글 리스트
// 없으면 유저를 검색해 팔로우 해보세요! 문구와 검색하기 버튼

export default function Feed() {
  return (
    <>
      <TopMainNav />
      <ContentsLayout>
        <PostWrapper>
          <EmptyFollow>
            <img src={SYMBOL_LOGO_GRAY} alt='' />
            <p>유저를 검색해 팔로우 해보세요!</p>
            <Button mBtn>검색하기</Button>
          </EmptyFollow>
          {/* <Post />
          <Post /> */}
        </PostWrapper>
      </ContentsLayout>
      <TabNav />
    </>
  );
}

const EmptyFollow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 210px;
  gap: 20px;
  p {
    font-size: 1.4rem;
    color: var(--gray-400);
  }
  img {
    width: 100px;
    aspect-ratio: 1 / 1;
  }

  Button {
    height: 44px;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
