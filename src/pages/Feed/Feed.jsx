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
        {/* <FeedWrapper>
          <img src={SYMBOL_LOGO_GRAY} alt='' />
          <FeedText>유저를 검색해 팔로우 해보세요!</FeedText>
        </FeedWrapper>
        <FeedButton>검색하기</FeedButton> */}
        <PostWrapper>
          <Post />
          <Post />
        </PostWrapper>
      </ContentsLayout>
      <TabNav />
    </>
  );
}

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 210px;
  img {
    width: 100px;
    aspect-ratio: 1 / 1;
  }
`;

const FeedText = styled.p`
  margin-top: 3rem;
  font-size: 1.4rem;
  color: var(--gray-400);
`;

const FeedButton = styled(Button)`
  width: 120px;
  height: 44px;
  margin: 20px auto 0;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
