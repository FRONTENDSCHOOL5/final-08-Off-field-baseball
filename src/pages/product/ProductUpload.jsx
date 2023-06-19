import React, { useState } from 'react';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import styled from 'styled-components';
import ERROR_404 from '../../assets/images/404.png';
import IMG_BUTTON from '../../assets/icons/img-button.png';

export default function ProductUpload() {
  const [price, setPrice] = useState('');
  const [imgPre, setImgPre] = useState(ERROR_404);

  // '가격'에 숫자만 입력 && 세자리 마다 콤마 입력
  const addComma = (price) => {
    const returnNum = price.target.value.replace(/[^0-9]/g, '');
    const commaPrice = returnNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(commaPrice);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgPre(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <>
      <TopUploadNav />
      <ProductInfo>
        <span>이미지 등록</span>
        <EmptyImg>
          {/* 임시 이미지 */}
          <img src={imgPre} alt='' />

          <label htmlFor='productImg'>
            <img src={IMG_BUTTON} id='uploadBtn' alt='' />
          </label>
          <input
            type='file'
            id='productImg'
            name='product-img'
            accept='image/*'
            onChange={handleImageChange}
          />
        </EmptyImg>

        <ProductInput>
          <label htmlFor='name'>상품명</label>
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
          <label htmlFor='price'>가격</label>
          <input
            type='text'
            id='price'
            placeholder='숫자만 입력이 가능합니다.'
            required
            value={price}
            onChange={addComma}
          />

          {/* textarea 크기 사용자가 조정 불가 */}
          <label htmlFor='info'>상품 소개</label>
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
    border-radius: 10px;
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
    height: 10rem;
    border: 1px solid var(--gray-200);
    border-radius: 3px;
    resize: none;
    padding: 2px;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-color);
  }

  textarea:focus {
    outline: none;
    border: 1px solid var(--primary-color);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray-200);
  }
`;
