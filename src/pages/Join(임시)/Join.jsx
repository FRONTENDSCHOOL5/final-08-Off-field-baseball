import { Link } from 'react-router-dom';
import Form from '../../components/common/Form(임시)/Form';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

function Login({ team }) {
  return (
    <StyledLogin>
      <h1>이메일로 회원가입</h1>
      <Form team={team}>
        <label htmlFor='email-inp'>이메일</label>
        <input id='email-inp' type='text' />
        <label htmlFor='password-inp'>비밀번호</label>
        <input id='password-inp' type='text' />
        <Link to='/join/profile'>
          <StyledButton type='submit'>다음</StyledButton>
        </Link>
      </Form>
    </StyledLogin>
  );
}

export default Login;

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
