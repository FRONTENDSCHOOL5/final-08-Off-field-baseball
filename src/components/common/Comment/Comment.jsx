import React from 'react';
import styled from 'styled-components';
// 임시. 기본 프로필 사진
import { BASIC_PROFILE_SM } from '../../../styles/CommonIcons';
import { useState } from 'react';

export default function Comment({ placeholder, txt, value, setValue, event }) {
  const [isValid, setIsValid] = useState(false);
  // input에 입력된 텍스트를 담는다

  // input에 텍스트가 입력되어 있으면, '게시' 버튼이 활성화된다
  const handleForm = (e) => {
    if (e.target.value) {
      setIsValid(true);
    }
    setValue(e.target.value);
  };

  return (
    <StyledForm onSubmit={event} isValid={isValid}>
      {/* 임시 이미지 */}
      <img src={BASIC_PROFILE_SM} alt='내 프로필 사진' />
      <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => handleForm(e)}
        value={value}
      />
      <button type='submit' disabled={isValid ? '' : 'disabled'}>
        {txt}
      </button>
    </StyledForm>
  );
}

Comment.defaultProps = {
  txt: '전송',
  placeholder: '메시지 입력하기...',
};

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
    margin: 0 10px 0;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-left: 8px;
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
    color: ${(props) =>
      props.isValid ? 'var(--primary-color)' : 'var(--gray-300)'};
  }
`;
