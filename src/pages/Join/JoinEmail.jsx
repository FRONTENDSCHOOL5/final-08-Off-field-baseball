import Form from '../../components/common/Form';
import Button from '../../components/common/Button';
import ShowPasswordBtn from '../../components/common/ShowPasswordBtn';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const JoinEmail = ({ setPage, email, setEmail, password, setPassword }) => {
  const [isValid, setIsVaild] = useState(false);
  const [messegeEmail, setMessegeEmail] = useState('');
  const [messegePassword, setMessegePassword] = useState('');
  const [isValidEmail, setIsVaildEmail] = useState(false);
  const [isValidPassword, setIsVaildPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 이메일, 비밀번호 모두 유효할 시, 버튼 활성화
  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }
  }, [isValidEmail, isValidPassword]);
  const emailvalid = async () => {
    const url = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user/emailvalid';

    const userData = {
      user: {
        email: email,
      },
    };
    const reqUrl = url + reqPath;
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const json = await res.json();

    if (json.message === '사용 가능한 이메일 입니다.') {
      setMessegeEmail('');
      setIsVaildEmail(true);
    } else {
      setMessegeEmail(json.message);
      setIsVaildEmail(false);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setPage('joinProfile');
  };

  // email에서 포커스가 떠났을 때, 유효성 검사
  const handleEmailInp = (e) => {
    if (!e.target.value) {
      return;
    }
    if (e.target.validity.patternMismatch) {
      setMessegeEmail('알맞은 양식의 이메일을 입력해주세요');
      setIsVaildEmail(false);
    } else {
      emailvalid(); //api 검사
    }
  };

  // 숫자, 소문자, 특수문자 각 1자 이상 필수. 6자 이상
  const reg =
    /^(?=.*\d+)(?=.*[a-z]+)(?=.*[`~!@#$%^&*\-_=+\[\]\{\}\\\|:;'",<\.>\/?]+)[A-Za-z\d`~!@#$%^&*\-_=+\[\]\{\}\\\|:;'",<\.>\/?]{6,}$/;

  // 이메일 입력값이 변할 때
  const handleEmailOnChange = (e) => {
    if (e.target.validity.valueMissing) {
      setMessegeEmail('값을 입력해주세요');
      setIsVaildEmail(false);
    } else if (
      messegeEmail === '값을 입력해주세요' ||
      !e.target.validity.patternMismatch
    ) {
      setMessegeEmail('');
      setIsVaildEmail(true);
    }
  };
  const handlePasswordOnChange = (e) => {
    //값이 없으면
    if (!e.target.value) {
      setMessegePassword('값을 입력해주세요');
      setIsVaildPassword(false);
      return;
    }
    const patternMatch = reg.test(e.target.value);
    if (patternMatch) {
      setMessegePassword('');
      setIsVaildPassword(true);
    } else {
      setMessegePassword(
        '숫자, 소문자, 특수문자를 포함하여 6자 이상 입력해주세요'
      );
      setIsVaildPassword(false);
    }
  };
  return (
    <>
      <h1 className='a11y-hidden'>구장 밖 야구</h1>
      <StyledJoinEmail>
        <h2>이메일로 회원가입</h2>
        <Form handleForm={handleForm}>
          <label htmlFor='email-inp'>이메일</label>
          <input
            id='email-inp'
            type='email'
            onBlur={handleEmailInp}
            value={email}
            pattern='[\w\.\-]+@[a-z]+\.[a-z]{2,}(.?[a-z]+)?'
            placeholder='이메일 주소를 입력해 주세요.'
            maxLength='98'
            onChange={(e) => {
              setEmail(e.target.value);
              handleEmailOnChange(e);
            }}
            required
            className={messegeEmail && 'invalid'}
          />
          {messegeEmail && <strong>{messegeEmail}</strong>}
          <label htmlFor='password-inp'>비밀번호</label>
          <input
            autoComplete='off'
            id='password-inp'
            type={showPassword ? 'text' : 'password'}
            maxLength='20'
            value={password}
            onChange={(e) => {
              handlePasswordOnChange(e);
              setPassword(e.target.value);
            }}
            className={messegePassword && 'invalid'}
            required
            placeholder='비밀번호를 설정해 주세요.'
          />
          <ShowPasswordBtn
            className='show-btn'
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          ></ShowPasswordBtn>
          {messegePassword && <strong>{messegePassword}</strong>}
          <StyledButton
            type='submit'
            bgColor={
              isValid
                ? 'var(--primary-color-default)'
                : 'var(--secondary-color-default)'
            }
            lBtn
            disabled={isValid ? '' : 'disabled'}
          >
            다음
          </StyledButton>
        </Form>
      </StyledJoinEmail>
    </>
  );
};

export default JoinEmail;

const StyledButton = styled(Button)`
  margin: 30px 0 20px;
`;

const StyledJoinEmail = styled.section`
  padding: 30px 34px;
  h2 {
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
  .show-btn {
    position: absolute;
    top: 86px;
    right: -6px;
  }
`;
