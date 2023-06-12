import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// 임시. 기본 프로필 사진
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';

export default function UserSearch({ placeholder, txt }) {
  return (
    <StyledForm>
      {/* 내 정보(context) -> 서버에서 이미지 가져오기 */}
      <img src={BASIC_PROFILE_SM} alt="내 프로필 사진" />
      <input type="text" placeholder={placeholder} />
      <button type="summit">{txt}</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background: white;
  position: fixed;
  display: flex;
  bottom: 0;
  padding: 13px 16px 12px;
  border-top: 1px solid var(--gray-200);
  width: inherit;

  img {
    width: 36px;
    aspect-ratio: 1/1;
  }
  input {
    flex-grow: 1;
    margin: 0 18px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  input:focus {
    outline: 1px solid var(--primary-color);
    border-radius: 8px;
  }
  input::placeholder {
    color: var(--gray-300);
  }
  button {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: var(--gray-300);
  }
`;
