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
  const [warningMessage, setWarningMessage] = useState('');

  // 이메일, 비밀번호 모두 입력되면 버튼 활성화
  useEffect(() => {
    if (email && password) {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }
  }, [email, password]);

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
    console.log(json);
    if (json.user) {
      const token = json.user['token'];
      localStorage.setItem('token', token);

      // 마이팀 저장
      const team = await getTeam(json.user['token'], json.user.accountname);
      localStorage.setItem('myteam', team);
      navigate('/'); // 로그인에 성공하면 홈화면으로
    } else {
      setWarningMessage(json.message);
    }
  };
  const getTeam = async (token, accountname) => {
    // 마이팀 불러오기
    const url = 'https://api.mandarin.weniv.co.kr';
    const reqPath = `/profile/${accountname}`;
    const reqUrl = url + reqPath;
    const res = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    const json = await res.json();
    return json.profile.intro.split('$')[1];
  };
  const handleForm = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <StyledLogin>
      <h1>로그인</h1>
      <Form team={team} handleForm={handleForm}>
        <label htmlFor='email-inp'>이메일</label>
        <input
          id='email-inp'
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          maxLength='60' // 임시
        />
        <label htmlFor='password-inp'>비밀번호</label>
        <input
          autoComplete='off'
          id='password-inp'
          type='password'
          maxLength='30' // 임시
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        {warningMessage && <strong>{warningMessage}</strong>}
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
