import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

export default function Form({ children, handleForm, selectedTeam }) {
  const { myTeam } = useContext(UserContext);

  return (
    <StyledForm myTeam={selectedTeam || myTeam} onSubmit={handleForm || null}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  label {
    display: block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--gray-400);
  }
  label:not(:first-child) {
    margin-top: 16px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.4rem;
    border: 1px solid #dbdbdb;
  }
  input {
    border-width: 0 0 1px 0;
    padding: 10px 0 8px 0;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input:focus:not(.invalid),
  textarea:focus:not(.invalid) {
    border-color: ${(props) =>
      props.myTeam === 'kt'
        ? 'var(--tertiary-color-kt)'
        : 'var(--primary-color-' + (props.myTeam || 'default') + ')'};
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--gray-200);
  }
  textarea {
    position: relative;
    border-radius: 8px;
    height: 120px;
    margin-top: 10px;
    padding: 8px;
    resize: none;
    line-height: 1.8rem;
  }
  /* 임시 태그 */
  textarea + div {
    margin: -20px 12px 25px 0;
    text-align: right;
    color: var(--gray-300);
  }

  /* 경고 문구 */
  strong {
    display: block;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #eb5757;
    margin-top: 6px;
  }
  .invalid {
    border-color: #eb5757;
  }
`;
