import { BASIC_PROFILE_LG, UPLOAD_FILE, X } from '../../styles/CommonIcons';
import { ERROR_404 } from '../../styles/CommonImages';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import { useState } from 'react';

export default function Upload() {
  const [imgList, setImgList] = useState([ERROR_404, BASIC_PROFILE_LG]); // 임시로 이미지 추가
  const [isValid, setIsValid] = useState(false);

  const ResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const deleteImg = (e) => {
    const i = findIndex(e.currentTarget.parentNode);
    const list = [...imgList];
    list.splice(i, 1);
    setImgList(list);
  };

  return (
    <>
      <TopUploadNav btnTxt='업로드' isValid={isValid} />
      <StyledSection>
        <img className='profile-img' src={BASIC_PROFILE_LG} alt='' />
        <textarea
          name=''
          id=''
          placeholder='게시글 입력하기...'
          onChange={ResizeHeight}
          rows={1}
        ></textarea>
        <img className='uplode-img' src={UPLOAD_FILE} alt='이미지 업로드하기' />

        {!!imgList.length && (
          <ul>
            {imgList.map((img, i) => {
              return (
                <li key={i}>
                  <img src={img} alt='' />
                  <button
                    className='delete-btn'
                    type='button'
                    onClick={deleteImg}
                  >
                    <img src={X} alt='이미지 삭제하기' />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </StyledSection>
    </>
  );
}

// select에서 사용하는 동일한 함수
const findIndex = (target) => {
  const siblingList = target.parentNode.children;
  for (let i = 0; i < siblingList.length; i++) {
    if (siblingList[i] === target) {
      return i;
    }
  }
};

const StyledSection = styled.section`
  padding: 68px 16px 16px;

  position: relative; // 업로드 아이콘 레이아웃을 위한 속성
  height: 100vh; // 업로드 아이콘 레이아웃을 위한 속성

  /* reset */
  img {
    height: auto;
    object-fit: cover;
  }
  .profile-img {
    width: 42px;
    height: auto;
    aspect-ratio: 1/1;
    display: inline-block;
    vertical-align: top;
  }
  textarea {
    margin: 12px 0 0 13px;
    width: calc(100% - 55px); // 프사 + 마진 = 55px
    resize: none; // 크기 고정
    font-size: 1.4rem;
    line-height: 1.8rem;
    border-radius: 8px;
  }
  textarea::placeholder {
    color: var(--gray-300);
  }
  textarea:focus {
    outline: 1px solid var(--primary-color);
  }
  .uplode-img {
    width: 50px;
    aspect-ratio: 1/1;
    /* 레이아웃 */
    position: absolute;
    right: 16px;
    bottom: 16px;
  }

  ul {
    margin-top: 16px;
    display: flex;
    overflow-x: scroll;
    margin-left: auto;
    width: calc(100% - 55px); // 프사 + 마진 = 55px
  }
  ul > li:not(:first-child) {
    margin-left: 8px;
  }
  ul > li {
    position: relative;
    flex-grow: 1;
  }
  ul > li > img {
    min-width: 168px;
    aspect-ratio: 304/228;
    /* 임시 */
    box-shadow: inset 0 0 3px black;
    border-radius: 10px;
  }
  .delete-btn > img {
    position: absolute;
    right: 6px;
    top: 6px;
    width: 22px;
    aspect-ratio: 1/1;
  }
`;
