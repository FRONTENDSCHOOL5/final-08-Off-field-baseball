import { BASIC_PROFILE_LG, UPLOAD_FILE, X } from '../../styles/CommonIcons';
import { TEST_PRODUCT } from '../../styles/CommonImages';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import { useState } from 'react';

export default function Upload() {
  const [isImg, setIsImg] = useState(true); // 레이아웃을 위해 임시로 true

  const ResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };
  return (
    <>
      <TopUploadNav btnTxt="업로드" />
      <StyledSection>
        <img className="profile-img" src={BASIC_PROFILE_LG} alt="" />
        <textarea
          name=""
          id=""
          placeholder="게시글 입력하기..."
          onChange={ResizeHeight}
          rows={1}
        ></textarea>
        <img className="uplode-img" src={UPLOAD_FILE} alt="이미지 업로드하기" />

        {isImg && (
          <ul>
            <li>
              <img className="product-img" src={TEST_PRODUCT} alt="" />
              <button type="button" className="">
                <img className="delete-img" src={X} alt="이미지 삭제하기" />
              </button>
            </li>
            <li>
              <img className="product-img" src={TEST_PRODUCT} alt="" />
              <button type="button" className="">
                <img className="delete-img" src={X} alt="이미지 삭제하기" />
              </button>
            </li>
          </ul>
        )}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  padding: 68px 16px 16px;

  position: relative; // 업로드 아이콘 레이아웃을 위한 속성
  height: 100vh; // 업로드 아이콘 레이아웃을 위한 속성

  /* reset */
  img {
    height: auto;
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
  .product-img {
    min-width: 168px;
    aspect-ratio: 304/228;
  }
  ul > li:not(:first-child) {
    margin-left: 8px;
  }
  ul > li > img {
    border-radius: 10px;
  }
  ul > li {
    position: relative;
  }
  .delete-img {
    position: absolute;
    right: 6px;
    top: 6px;
    width: 22px;
    aspect-ratio: 1/1;
  }
`;
