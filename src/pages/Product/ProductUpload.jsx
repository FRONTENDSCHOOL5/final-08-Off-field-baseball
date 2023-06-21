import React, { useState, useEffect } from 'react';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import styled from 'styled-components';
import IMG_BUTTON from '../../assets/icons/img-button.png';

export default function ProductUpload() {
  const [price, setPrice] = useState('');
  const [imgPre, setImgPre] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [productName, setProductName] = useState('');
  const [link, setLink] = useState('');

  // 모든 입력칸에 값이 입력되면 저장 버튼 활성화
  useEffect(() => {
    if (productName && price && link && imgPre) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [productName, price, link, imgPre]);

  // 이미지 미리보기 생성
  const handleImgChange = (e) => {
    const imgFile = e.target.files[0];
    handleImgUpload(imgFile);
  };

  // 이미지 업로드
  const handleImgUpload = async (imgFile) => {
    const formData = new FormData();
    formData.append('image', imgFile);

    const resImg = await fetch(
      'https://api.mandarin.weniv.co.kr/image/uploadfile',
      {
        method: 'POST',
        body: formData,
      }
    );

    const jsonImg = await resImg.json();
    const uploadImgUrl = 'https://api.mandarin.weniv.co.kr/' + jsonImg.filename;
    setImgPre(uploadImgUrl);
  };

  // '가격'에 숫자만 입력 && 세자리 마다 콤마 입력
  const addComma = (price) => {
    const returnNum = price.target.value.replace(/[^0-9]/g, '');
    const commaPrice = returnNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(commaPrice);
  };

  // 상품소개란 텍스트 길이만큼 textarea height 확대
  const ResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  // API
  const handleProductUpload = async () => {
    const url = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/product';

    const productData = {
      product: {
        itemName: productName,
        price: parseInt(price.replace(/,/g, '')),
        link: link,
        itemImage: imgPre,
      },
    };

    const token = localStorage.getItem('token');

    // API 호출
    const reqUrl = url + reqPath;

    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    const json = await res.json();
    console.log(json);
  };

  return (
    <>
      <TopUploadNav isValid={isValid} event={handleProductUpload} />
      <ProductInfo>
        <span>이미지 등록</span>
        <EmptyImg>
          {imgPre && (
            <img
              style={{
                objectFit: 'cover',
              }}
              src={imgPre}
              alt='상품 이미지 미리보기'
            />
          )}

          <label htmlFor='productImg'>
            <img src={IMG_BUTTON} id='uploadBtn' alt='이미지 등록 버튼' />
          </label>
          <input
            type='file'
            id='productImg'
            name='product-img'
            accept='image/*'
            onChange={handleImgChange}
          />
        </EmptyImg>

        <ProductInput>
          <label htmlFor='name'>상품명</label>
          <input
            type='text'
            id='name'
            minLength='2'
            maxLength='25'
            placeholder='2~25자 이내여야 합니다.'
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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

          <label htmlFor='info'>상품 소개</label>
          <textarea
            id='info'
            placeholder='판매하는 상품 정보를 입력해주세요.'
            required
            value={link}
            onChange={(e) => {
              ResizeHeight(e);
              setLink(e.target.value);
            }}
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
  aspect-ratio: 362 / 244;
  background-color: var(--gray-100);
  margin-bottom: 30px;
  border: 0.5px solid var(--gray-200);
  border-radius: 10px;
  position: relative;

  img {
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
    min-height: 10rem;
    border: 1px solid var(--gray-200);
    border-radius: 3px;
    resize: none;
    padding: 2px;
    overflow: hidden;
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
