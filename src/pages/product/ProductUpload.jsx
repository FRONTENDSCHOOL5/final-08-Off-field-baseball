import React from 'react';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import styled from 'styled-components';
import ERROR_404 from '../../assets/images/404.png';
import IMG_BUTTON from '../../assets/icons/img-button.png';

export default function ProductUpload() {
  return (
    <>
      <TopUploadNav />
      <ProductInfo>
        <span>이미지 등록</span>
        <EmptyImg>
          {/* 임시 이미지 */}
          <img src={ERROR_404} alt='' />

          <label For='productImg'>
            <img src={IMG_BUTTON} id='uploadBtn' alt='' />
          </label>
          <input
            type='file'
            id='productImg'
            name='product-img'
            accept='image/*'
          />
        </EmptyImg>

        <ProductInput>
          <label for='name'>상품명</label>
          <input
            type='text'
            id='name'
            minlength='2'
            maxlength='15'
            placeholder='2~15자 이내여야 합니다.'
            required
          />

          {/* '숫자만 입력 가능합니다' 경고창 추가
          금액에 콤마(,) 추가 */}
          <label for='price'>가격</label>
          <input
            type='number'
            id='price'
            step='10'
            placeholder='숫자만 입력이 가능합니다.'
            required
          />

          {/* textarea 크기 사용자가 조정 불가 */}
          <label for='info'>상품 소개</label>
          <textarea
            id='info'
            placeholder='판매하는 상품 정보를 입력해주세요.'
          />
        </ProductInput>
      </ProductInfo>
    </>
  );
}

const ProductInfo = styled.section`
  padding: 78px 3.4rem 0;
  span {
    font-size: 1.2rem;
    display: block;
    margin-bottom: 18px;
    color: var(--gray-400);
  }
`;

const EmptyImg = styled.div`
  max-width: 362px;
  height: 244px;
  background-color: var(--gray-100);
  margin-bottom: 30px;
  border: 0.5px solid var(--gray-200);
  border-radius: 10px;
  position: relative;

  img {
    object-fit: cover;
  }

  #uploadBtn {
    position: absolute;
    right: 12px;
    bottom: 12px;
    object-fit: contain;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  #productImg {
    display: none;
  }
`;

const ProductInput = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: var(--gray-400);
  }

  input,
  textarea {
    min-width: 100%;
    font-size: 1.4rem;
    display: block;
  }

  input {
    margin-bottom: 16px;
    padding: 4px 2px;
    border-bottom: 1px solid var(--gray-200);
  }

  textarea {
    // 글자수 따라 텍스트 상자 크기 확대 기능 구현?
    height: 10rem;
    border: 1px solid var(--gray-200);
    border-radius: 3px;
    resize: none;
    padding: 2px;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray-200);
  }
`;
