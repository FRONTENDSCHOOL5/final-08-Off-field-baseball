import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/common/Form/Form';
import MainLayout from '../../components/layout/MainLayout';
import styled from 'styled-components';

// MainLayout 확장
const StyledLogin = styled(MainLayout)`
  padding: 30px 34px;
  h1 {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3rem;
    text-align: center;
  }
  a {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    color: var(--gray-400);
  }
`;

function Login({ team }) {
  return (
    <StyledLogin>
      <h1>로그인</h1>
      <Form team={team}>
        <label htmlFor='email-inp'>이메일</label>
        <input id='email-inp' type='text' />
        <label htmlFor='password-inp'>비밀번호</label>
        <input id='password-inp' type='text' />
        <button type='submit'>로그인</button>
        <Link to='/login'>이메일로 회원가입</Link>
      </Form>
    </StyledLogin>
  );
}

export default Login;
