import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

const UserProduct = ({ accountname }) => {
  const [productList, setProductList] = useState([]);
  const url = 'https://api.mandarin.weniv.co.kr';
  const { token, myTeam } = useContext(UserContext);

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
      {productList.length !== 0 ? (
        <UserProductWrapper>
          <h2>판매중인 상품</h2>
          <UserProductList>
            {productList.map((product, index) => (
              <UserProductItem key={index} myTeam={myTeam}>
                <LinkTo to={`/product/${product.id}`} />
                <img src={product.itemImage} alt={product.itemName} />
                <p className='ellipsis'>{product.itemName}</p>
                <strong>
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </strong>
              </UserProductItem>
            ))}
          </UserProductList>
        </UserProductWrapper>
      ) : null}
    </>
  );
};

export default UserProduct;

const LinkTo = styled(Link)`
  position: absolute;
  inset: 0;
`;

const UserProductWrapper = styled.div`
  height: 208px;
  padding: 20px 0 0 16px;
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
  padding-bottom: 24px;
  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    height: 8px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-100);
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;
    border: 1px solid var(--gray-300);
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const UserProductItem = styled.li`
  position: relative;
  width: 140px;
  img {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    font-size: 1.4rem;
    margin: 6px 0 4px;
    width: 100%;
    display: block;
  }

  strong {
    font-size: 1.2rem;
    color: ${(props) =>
      props.myTeam === 'kt'
        ? 'var(--tertiary-color-kt)'
        : 'var(--primary-color-' + (props.myTeam || 'default') + ')'};
    font-weight: bold;
  }
`;
