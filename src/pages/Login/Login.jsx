import { Link } from 'react-router-dom';
import Form from '../../components/common/Form/Form';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ team }) {
  const navigate = useNavigate();

  const [isValid, setIsVaild] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messegeEmail, setMessegeEmail] = useState('');
  const [messegePassword, setMessegePassword] = useState('');
  const [isValidEmail, setIsVaildEmail] = useState(false);
  const [isValidPassword, setIsVaildPassword] = useState(false);

  // 이메일, 비밀번호 모두 유효할 시, 버튼 활성화
  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      setIsVaild(true);
    }
  }, [isValidEmail, isValidPassword]);

  const login = async () => {
    const url = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user/login';

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };
    const reqUrl = url + reqPath;
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const json = await res.json();
    console.log(json, '제이손입니다');
    if (json.user) {
      const token = json.user['token'];
      // token: API 불러올 때 권한인증
      localStorage.setItem('token', token);
      navigate('/'); // 로그인에 성공하면 홈화면으로
    } else {
      // 임시
      alert('이메일 또는 비밀번호가 일치하지 않습니다');
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    login();
  };

  // email에서 포커스가 떠났을 때, 유효성 검사
  const handleEmailInp = (e) => {
    if (e.target.validity.valueMissing) {
      setMessegeEmail('값을 입력해주세요');
    } else if (e.target.validity.typeMismatch) {
      setMessegeEmail('알맞은 양식의 이메일을 입력해주세요');
    } else {
      setMessegeEmail('');
      setIsVaildEmail(true);
    }
  };

  // password에서 포커스가 떠났을 때, 유효성 검사
  const handlePasswordInp = (e) => {
    if (e.target.validity.valueMissing) {
      setMessegePassword('값을 입력해주세요');
    } else if (e.target.validity.patternMismatch) {
      setMessegePassword('6자 이상 입력해주세요');
    } else {
      setMessegePassword('');
      setIsVaildPassword(true);
    }
  };
  return (
    <StyledLogin>
      <h1>로그인</h1>
      <Form team={team} handleForm={handleForm}>
        <label htmlFor='email-inp'>이메일</label>
        <input
          id='email-inp'
          type='email'
          onBlur={handleEmailInp}
          value={email}
          pattern='[a-zA-Z0-9]*@[a-z]*\.[a-z]*'
          onChange={(e) => setEmail(e.target.value)}
          required
          className={messegeEmail && 'invalid'}
        />
        {messegeEmail && <strong>{messegeEmail}</strong>}
        <label htmlFor='password-inp'>비밀번호</label>
        <input
          autoComplete='off'
          id='password-inp'
          type='password'
          pattern='.{6,}' // 임시
          onBlur={handlePasswordInp}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={messegePassword && 'invalid'}
          required
        />
        {messegePassword && <strong>{messegePassword}</strong>}
        <StyledButton
          type='submit'
          bgColor={isValid ? 'var(--primary-color)' : 'var(--secondary-color)'}
          lBtn
          disabled={isValid ? '' : 'disabled'}
        >
          로그인
        </StyledButton>
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
