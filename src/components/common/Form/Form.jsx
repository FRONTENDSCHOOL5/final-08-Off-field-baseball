import React from 'react';
import styled from 'styled-components';

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
    border-color: ${(props) =>
      props.team
        ? 'var(--main-color-' + props.team + ')'
        : 'var(--primary-color)'};
  }
`;

export default function Form({ team, children, handleForm }) {
  return (
    <StyledForm team={team} onSubmit={handleForm || null}>
      {children}
    </StyledForm>
  );
}
