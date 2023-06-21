import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

export default function Form({ children, handleForm }) {
  const { myTeam } = useContext(UserContext);

  return (
    <StyledForm myTeam={myTeam} onSubmit={handleForm || null}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  label {
    display: block;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--gray-400);
  }
  label:not(:first-child) {
    margin-top: 16px;
  }
  input {
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.4rem;
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px 0;
    padding: 10px 0 8px 0;
  }
  input:focus {
    outline: none;
  }
  input:focus:not(.invalid) {
    border-color: ${(props) =>
      'var(--primary-color-' + (props.myTeam || 'defalt') + ')'};
  }
  input::placeholder {
    color: var(--gray-200);
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
