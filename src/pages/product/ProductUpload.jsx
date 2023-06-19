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

    if (imgPre !== null) {
      const imgformData = new FormData();
      imgformData.append('image', imgPre);

      const imgReqPath = '/image/uploadfile';
      const imgReqUrl = url + imgReqPath;
      const imgRes = await fetch(imgReqUrl, {
        method: 'POST',
        body: imgformData,
      });
      console.log(imgRes);
      const imgJson = await imgRes.json();

      if (imgRes.ok) {
        productData.product.itemImage =
          'https://api.mandarin.weniv.co.kr/' + imgJson.filename;
      } else {
        console.log('이미지 업로드에 실패했습니다.', imgJson.error);
        return;
      }
    }

    const reqUrl = url + reqPath;
    const token = localStorage.getItem('token');

    localStorage.setItem('token', token);

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

  // '가격'에 숫자만 입력 && 세자리 마다 콤마 입력
  const addComma = (price) => {
    const returnNum = price.target.value.replace(/[^0-9]/g, '');
    const commaPrice = returnNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(commaPrice);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    // 이미지 미리보기 생성
    // ※ 업로드 하지않고 팝업창을 껐을 때 오류가 납니다..
    if (!selectedImage || !selectedImage.type.startsWith('image/')) {
      console.log('이미지를 선택해주세요.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setImgPre(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  };

  const ResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <>
      <TopUploadNav isValid={isValid} event={handleProductUpload} />
      <ProductInfo>
        <span>이미지 등록</span>
        <EmptyImg>
          {/* 임시 이미지 */}
          {imgPre && (
            <img
              style={{
                objectFit: 'cover',
              }}
              src={imgPre}
              alt=''
            />
          )}

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

          {/* textarea 크기 사용자가 조정 불가 */}
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
