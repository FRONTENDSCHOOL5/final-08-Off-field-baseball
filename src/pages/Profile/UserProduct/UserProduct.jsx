import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function UserProduct({ accountname }) {
  const [productList, setProductList] = useState([]);
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  const getProductList = async () => {
    try {
      const req = await fetch(`${url}/product/${accountname}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const res = await req.json();
      console.log(res);
      setProductList(res.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {productList && (
        <UserProductWrapper>
          <h2>판매중인 상품</h2>
          <UserProductList>
            {productList.map((product, index) => (
              <UserProductItem key={index}>
                <LinkTo to={`/product/${product.id}`} />
                <img src={product.itemImage} alt={product.itemName} />
                <p>{product.itemName}</p>
                <strong>{product.price}원</strong>
              </UserProductItem>
            ))}
          </UserProductList>
        </UserProductWrapper>
      )}
    </>
  );
}

const LinkTo = styled(Link)`
  position: absolute;
  inset: 0;
`;

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
  position: relative;
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
