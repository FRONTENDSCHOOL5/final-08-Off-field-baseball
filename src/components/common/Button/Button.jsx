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
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};

  ${(props) =>
    props.whiteBtn &&
    css`
      background-color: white;
      border: 1px solid #dbdbdb;
      color: #767676;
    `}

  ${(props) =>
    props.noCursor &&
    css`
      cursor: default;
    `}
`;
