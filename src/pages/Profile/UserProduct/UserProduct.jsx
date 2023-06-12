import React, { useState } from 'react';
import styled from 'styled-components';
import TEST from '../../../assets/images/test.jpg';

export default function UserProduct() {
  // 등록된 상품이 없을 경우를 위한 임시 state
  const [isProductList, setIsProductList] = useState(true);
  return (
    <>
      {isProductList && (
        <UserProductWrapper>
          <h2>판매중인 상품</h2>
          <UserProductList>
            <UserProductItem>
              <img src={TEST} alt='해당 상품의 이름' />
              <p>야구 글러브</p>
              <strong>35,000원</strong>
            </UserProductItem>
            <UserProductItem>
              <img src={TEST} alt='해당 상품의 이름' />
              <p>야구 글러브</p>
              <strong>35,000원</strong>
            </UserProductItem>
            <UserProductItem>
              <img src={TEST} alt='해당 상품의 이름' />
              <p>야구 글러브</p>
              <strong>35,000원</strong>
            </UserProductItem>
            <UserProductItem>
              <img src={TEST} alt='해당 상품의 이름' />
              <p>야구 글러브</p>
              <strong>35,000원</strong>
            </UserProductItem>
          </UserProductList>
        </UserProductWrapper>
      )}
    </>
  );
}

const UserProductWrapper = styled.div`
  height: 208px;
  padding: 20px 0 20px 16px;
  margin-bottom: 6px;
  border-bottom: 6px solid var(--gray-100);
  margin: 0 -16px;

  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;

const UserProductList = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const UserProductItem = styled.li`
  img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    font-size: 1.4rem;
    margin: 6px 0 4px;
  }

  strong {
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: bold;
  }
`;
