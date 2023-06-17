import { BASIC_PROFILE_LG } from '../../styles/CommonIcons';
import styled from 'styled-components';
import StyledSelect from '../../components/common/Select/Select';
import Form from '../../components/common/Form/Form';
import Button from '../../components/common/Button/Button';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinProfile({ email, password }) {
  const navigate = useNavigate();
  const [isValid, setIsVaild] = useState(false);

  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [messageIntro, setMessageIntro] = useState('');
  const [messageAccountname, setMessageAccountname] = useState('');
  const [messageUsername, setMessageUsername] = useState('');

  // 소개는 필수값이 아니므로, 값이 없는 초기 상태는 true
  const [isVaildIntro, setIsVaildIntro] = useState(true);
  const [isVaildUsername, setIsVaildUsername] = useState(false);
  const [isVaildAccountname, setIsVaildAccountname] = useState(false);

  console.log([email]);
  const teamList = [
    '삼성 라이온즈',
    '한화 이글스',
    '키움 히어로즈',
    '롯데 자이언츠',
    'LG 트윈스',
    'KIA 타이거즈',
    'SSG 랜더스',
    '두산 베어스',
    'NC 다이노스',
    'KT 위즈',
  ];

  // 사용자 이름, 계정 ID 모두 유효하고, 소개에 $가 입력되지 않았을 때
  useEffect(() => {
    if (isVaildIntro && isVaildUsername && isVaildAccountname) {
      setIsVaild(true);
    }
  }, [isVaildIntro, isVaildUsername, isVaildAccountname]);

  const join = async () => {
    const url = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user';

    const userData = {
      user: {
        username: username, //
        email: email,
        password: password,
        accountname: accountname, //
      },
    };
    if (intro) {
      userData.user.intro = intro;
    }
    if (image) {
      userData.user.image = image;
      // 예시) https://api.mandarin.weniv.co.kr/1641906557953.png)
    }

    const reqUrl = url + reqPath;
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const json = await res.json();
    console.log(json, '제이손입니다');
    if (json.user) {
      navigate('/user/login'); // 회원가입에 성공하면 로그인화면으로 (추후 자동로그인 고려)
    } else {
      alert(json.message);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    join();
  };

  // 사용자 이름에서 포커스가 떠났을 때, 유효성 검사
  const handleUsernameInp = (e) => {
    console.log(e.target.validity);
    if (e.target.validity.valueMissing) {
      setMessageUsername('값을 입력해주세요');
      setIsVaildUsername(false);
    } else if (e.target.validity.tooShort) {
      setMessageUsername('2자 이상 입력해주세요');
      setIsVaildUsername(false);
    } else {
      setMessageUsername('');
      setIsVaildUsername(true);
    }
  };
  // 계정 id 에서 포커스가 떠났을 때, 유효성 검사
  const handleAccountnameInp = (e) => {
    console.log(e.target.validity);
    if (e.target.validity.valueMissing) {
      setMessageAccountname('값을 입력해주세요');
      setIsVaildAccountname(false);
    } else if (e.target.validity.patternMismatch) {
      setMessageAccountname('영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
      setIsVaildAccountname(false);
    } else {
      setMessageAccountname('');
      setIsVaildAccountname(true);
    }
  };
  // 소개에서 포커스가 떠났을 때, 유효성 검사
  const handleIntroInp = (e) => {
    if (e.target.validity.patternMismatch) {
      setMessageIntro('달러($)를 제외한 문자를 입력해주세요');
      setIsVaildIntro(false);
    } else {
      setMessageIntro('');
      setIsVaildIntro(true);
    }
  };
  return (
    <StyledJoinProfile>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <StyledImg src={BASIC_PROFILE_LG} alt='' />
      <Form handleForm={handleForm}>
        <label htmlFor='name-inp'>사용자 이름</label>
        <input
          id='name-inp'
          type='text'
          placeholder='2~10자 이내여야 합니다.'
          value={username}
          onBlur={handleUsernameInp}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          minLength={2}
          maxLength={10}
          className={messageUsername && 'invalid'}
          required
        />
        {messageUsername && <strong>{messageUsername}</strong>}
        <label htmlFor='id-inp'>계정 ID</label>
        <input
          id='id-inp'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          pattern='[A-Za-z0-9\._]+'
          maxLength={10} //임시 값
          value={accountname}
          onBlur={handleAccountnameInp}
          onChange={(e) => {
            setAccountname(e.target.value);
          }}
          className={messageAccountname && 'invalid'}
          required
        />
        {messageAccountname && <strong>{messageAccountname}</strong>}
        <label htmlFor='intro-inp'>소개</label>
        <input
          id='intro-inp'
          type='text'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          value={intro}
          onBlur={handleIntroInp}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
          pattern='[^$]+'
          className={messageIntro && 'invalid'}
        />
        {messageIntro && <strong>{messageIntro}</strong>}
        <label htmlFor='myTeam-btn'>응원 중인 팀</label>
        <StyledSelect
          btnId='myTeam-btn'
          optionTextList={teamList}
        ></StyledSelect>
        <Button
          id='start-btn'
          type='submit'
          bgColor={isValid ? 'var(--primary-color)' : 'var(--secondary-color)'}
          lBtn
          disabled={isValid ? '' : 'disabled'}
        >
          감귤마켓 시작하기
        </Button>
      </Form>
    </StyledJoinProfile>
  );
}

const StyledJoinProfile = styled.section`
  padding: 30px 34px;

  h1,
  p {
    text-align: center;
  }
  h1 {
    margin-bottom: 12px;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3rem;
  }
  p {
    margin-bottom: 30px;
    font-size: 1.4rem;
    color: var(--gray-400);
  }
  #myTeam-btn {
    margin-top: 9px;
  }
  #start-btn {
    margin-top: 30px;
  }
`;
const StyledImg = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  margin: 0 auto 30px;
`;
