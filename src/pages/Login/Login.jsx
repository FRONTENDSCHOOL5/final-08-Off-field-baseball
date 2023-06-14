import { Link } from 'react-router-dom';
import Form from '../../components/common/Form/Form';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { useState } from 'react';

export default function Login({ team }) {
  const [isValid, setIsVaild] = useState(false);

  // 이메일, 비밀번호 유효성 검사 -> 유효하지 않은 항목에 안내문와 에러색으로 표시
  const handelForm = (e) => {
    console.log(e);
  };

  return (
    <StyledLogin>
      <h1>로그인</h1>
      <Form team={team}>
        <label htmlFor='email-inp'>이메일</label>
        <input id='email-inp' type='email' />
        <label htmlFor='password-inp'>비밀번호</label>
        <input id='password-inp' type='password' />
        <Link to='/'>
          <StyledButton
            type='submit'
            bgColor={
              isValid ? 'var(--primary-color)' : 'var(--secondary-color)'
            }
            lBtn
            disabled={isValid ? '' : 'disabled'}
          >
            로그인
          </StyledButton>
        </Link>
        <Link to='/join'>이메일로 회원가입</Link>
      </Form>
    </StyledLogin>
  );
}

const StyledButton = styled(Button)`
  margin: 30px 0 20px;
`;

const StyledLogin = styled.section`
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
