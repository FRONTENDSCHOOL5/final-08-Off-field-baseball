import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {
  const { type } = props;

  return (
    <ButtonStyle type={type ? type : 'button'} {...props}>
      {props.children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  display: block;
  width: 100%;
  border: none;
  color: white;
  border-radius: 30px;

  padding: ${(props) => (props.padding ? props.padding : '7px 0')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#52C33D')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.4rem')};

  ${(props) =>
    props.whiteBtn &&
    css`
      background-color: white;
      border: 1px solid #dbdbdb;
      color: #767676;
    `}

  ${(props) =>
    props.xsBtn &&
    css`
      width: 56px;
      height: 28px;
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.sBtn &&
    css`
      width: 90px;
      height: 32px;
      font-size: 1.4rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.mBtn &&
    css`
      width: 120px;
      height: 34px;
      font-size: 1.4rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.lBtn &&
    css`
      height: 44px;
      font-size: 1.4rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.noCursor &&
    css`
      cursor: default;
    `}
`;
