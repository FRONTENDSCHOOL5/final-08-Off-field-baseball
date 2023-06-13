import React from 'react';
import {
  BASIC_PROFILE_SM,
  HEART,
  MESSAGE_CIRCLE_SM,
  MORE_VERTICAL_LIGHT,
  MESSAGE_CIRCLE_FILL,
} from '../../../styles/CommonIcons';
import { ERROR_404 } from '../../../styles/CommonImages';
import styled from 'styled-components';

export default function Post({ loc }) {
  return (
    <PostWrapper>
      <ProfileImg src={BASIC_PROFILE_SM} alt='' />
      <UserPost>
        <UserInfo>
          <h2>최강롯데</h2>
          <p>@Unbeatable_Lotte</p>
        </UserInfo>
        <UserText>
          어제 롯데가 KT위즈에게 연장 12회까지 가는 접전 끝에 7:6 석패를 당했다.
          이걸로 롯데는 4연패째다. 진짜 할말이 없다. 에휴
        </UserText>
        <ImgWrapper>
          <li>
            <img src={ERROR_404} alt='' />
          </li>
        </ImgWrapper>
        <PostBtnWrapper>
          {loc === 'product' && (
            <PostBtn className='chat-btn'>
              <img src={MESSAGE_CIRCLE_FILL} alt='채팅하기 버튼' />
              <span>채팅하기</span>
            </PostBtn>
          )}
          <PostBtn>
            <img src={HEART} alt='좋아요 누르기 버튼' />
            <span>50</span>
          </PostBtn>
          <PostBtn>
            <img src={MESSAGE_CIRCLE_SM} alt='댓글창 열기 버튼' />
            <span>21</span>
          </PostBtn>
        </PostBtnWrapper>
        <CreateTime dateTime='2023-06-09'>2023년 6월 9일</CreateTime>
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
  li {
    flex-basis: 100%;
    height: 228px;
    border-radius: 10px;
    box-shadow: inset 0 0 10px;
    flex-shrink: 0;
  }
  li img {
    object-fit: contain;
  }
`;

const PostBtnWrapper = styled.div`
  display: flex;
  margin: 12px 0 16px;
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
  top: 2px;
`;
