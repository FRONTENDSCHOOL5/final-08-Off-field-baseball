import React, { useState, useEffect } from 'react';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import styled from 'styled-components';
import { IMG_BUTTON, X } from '../../styles/CommonIcons';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Form from '../../components/common/Form/Form';

export default function ProductUpload() {
  const [price, setPrice] = useState('');
  const [imgPre, setImgPre] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [productName, setProductName] = useState('');
  const [link, setLink] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [priceMessage, setPriceMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '상품 등록 | 구장 밖 야구';
  }, []);
  // 모든 입력칸에 값이 입력되면 저장 버튼 활성화
  useEffect(() => {
    if (productName.replace(/ /g, '').length > 1 && price && link && imgPre) {
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

    try {
      const resImg = await fetch(
        'https://api.mandarin.weniv.co.kr/image/uploadfile',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!resImg.ok) {
        throw new Error('Image upload failed');
      }

      const jsonImg = await resImg.json();
      const uploadImgUrl =
        'https://api.mandarin.weniv.co.kr/' + jsonImg.filename;
      setImgPre(uploadImgUrl);
    } catch (error) {
      console.error(error);
      // 이미지가 정상적으로 선택되지 않았을 때 경고창
      alert('업로드할 이미지를 선택해주세요.');
    }
  };

  // '가격'에 숫자만 입력 && 세자리 마다 콤마 입력
  const addComma = (price) => {
    const returnNum = price.target.value.replace(/[^0-9]/g, '');
    const commaPrice = returnNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setPrice(commaPrice);
    // 숫자가 아닌 값 입력 시 경고창
    if (price.target.value.trim() !== '' && !/^\d+$/.test(returnNum)) {
      setPriceMessage('숫자만 입력이 가능합니다.');
    } else {
      setPriceMessage('');
    }
  };

  // 상품소개란 텍스트 길이만큼 textarea height 확대
  // const ResizeHeight = (e) => {
  //   e.target.style.height = 'auto';
  //   e.target.style.height = e.target.scrollHeight + 'px';
  // };

  // 이미지 삭제
  const handleImgDelete = () => {
    setImgPre(null);
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
    alert('상품이 등록되었습니다.');
    navigate('/profile');
  };

  const handleEdit = async () => {
    try {
      const url = 'https://api.mandarin.weniv.co.kr';
      const reqPath = `/product/${id}`;

      const token = localStorage.getItem('token');

      const reqUrl = url + reqPath;

      const productData = {
        product: {
          itemName: productName,
          price: isNaN(price) ? parseInt(price.replace(/,/g, '')) : price,
          link: link,
          itemImage: imgPre,
        },
      };

      const res = await fetch(reqUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const json = await res.json();
      console.log(json);
      alert('수정되었습니다.');
      navigate('/profile');
    } catch (err) {
      console.log(err);
    }
  };

  const beforeEdit = async () => {
    try {
      const url = 'https://api.mandarin.weniv.co.kr';
      const reqPath = `/product/detail/${id}`;

      const token = localStorage.getItem('token');

      const reqUrl = url + reqPath;

      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const json = await res.json();
      setPrice(json.product.price);
      setImgPre(json.product.itemImage);
      setProductName(json.product.itemName);
      setLink(json.product.link);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      beforeEdit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopUploadNav
        isValid={isValid}
        event={
          location.pathname.includes('edit') ? handleEdit : handleProductUpload
        }
      />
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
          <button className='delete-btn' onClick={handleImgDelete}>
            <img src={X} alt='이미지 삭제하기' />
          </button>

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
        <Form>
          <label htmlFor='name'>상품명</label>
          <input
            type='text'
            id='name'
            maxLength='25'
            placeholder='2~25자 이내여야 합니다.'
            value={productName && productName}
            className={nameMessage && 'invalid'}
            onChange={(e) => {
              setProductName(e.target.value.replace(/\s\s+/g, ' '));
              if (e.target.value.includes('  ')) {
                setNameMessage('공백은 연속으로 사용할 수 없습니다.');
              } else {
                setNameMessage('');
              }
            }}
          />
          {nameMessage && <strong>{nameMessage}</strong>}

          <label htmlFor='price'>가격</label>
          <input
            type='text'
            id='price'
            maxLength='11'
            placeholder='숫자만 입력이 가능합니다.'
            value={price && price}
            className={priceMessage && 'invalid'}
            onChange={addComma}
          />
          {priceMessage && <strong>{priceMessage}</strong>}

          <label htmlFor='info'>상품 소개</label>
          <textarea
            id='info'
            placeholder='판매하는 상품 정보를 입력해주세요.'
            value={link && link}
            onChange={(e) => {
              // ResizeHeight(e);
              setLink(e.target.value);
            }}
          />
        </Form>
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

  .delete-btn {
    position: absolute;
    width: 22px;
    top: 6px;
    left: 6px;
    background-color: transparent;
  }
`;
