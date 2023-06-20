import { BASIC_PROFILE_LG } from '../../styles/CommonIcons';
import styled from 'styled-components';
import TeamSelect from '../../components/common/Select/TeamSelect';
import Form from '../../components/common/Form/Form';
import Button from '../../components/common/Button/Button';

import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function JoinProfile({ email, password }) {
  const navigate = useNavigate();
  const [isValid, setIsVaild] = useState(false);
  const [username, setUsername] = useState('');
  const [accountname, setAccountnameValue] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [src, setSrc] = useState(BASIC_PROFILE_LG);
  const [messageIntro, setMessageIntro] = useState('');
  const [messageAccountname, setMessageAccountname] = useState('');
  const [messageUsername, setMessageUsername] = useState('');
  const [selectedOpt, setSelectedOpt] = useState('');

  const { setAccountname, setMyTeam, setToken } = useContext(UserContext);

  // 소개는 필수값이 아니어서, 입력값이 없는 처음엔 true
  const [isVaildIntro, setIsVaildIntro] = useState(true);
  const [isVaildUsername, setIsVaildUsername] = useState(false);
  const [isVaildAccountname, setIsVaildAccountname] = useState(false);

  // CSS 변수에서 사용하는 팀 이름(samsung, ...)
  const teamName = {
    '삼성 라이온즈': 'samsung',
    '한화 이글스': 'hanwha',
    '키움 히어로즈': 'kiwoom',
    '롯데 자이언츠': 'lotte',
    'LG 트윈스': 'lg',
    'KIA 타이거즈': 'kia',
    'SSG 랜더스': 'ssg',
    '두산 베어스': 'doosan',
    'NC 다이노스': 'nc',
    'KT 위즈': 'kt',
  };

  // 사용자 이름, 계정 ID 모두 유효하고, 소개에 $가 입력되지 않았을 때
  useEffect(() => {
    if (isVaildIntro && isVaildUsername && isVaildAccountname) {
      setIsVaild(true);
    }
  }, [isVaildIntro, isVaildUsername, isVaildAccountname]);

  const url = 'https://api.mandarin.weniv.co.kr';
  const join = async () => {
    const reqPath = '/user';

    const userData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
      },
    };
    userData.user.intro = intro || '';
    if (selectedOpt && selectedOpt !== '없음') {
      userData.user.intro += `$${teamName[selectedOpt]}`;
    }
    if (src !== BASIC_PROFILE_LG) {
      const formData = new FormData();
      formData.append('image', image);
      const reqPath = '/image/uploadfile';
      const reqUrl = url + reqPath;
      const res = await fetch(reqUrl, {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      userData.user.image = 'https://api.mandarin.weniv.co.kr/' + json.filename;
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
    if (json.user) {
      login(); // 회원가입에 성공하면 자동로그인
    } else {
      alert(json.message);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    join();
  };
  // 자동로그인
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

    if (json.user) {
      const token = json.user['token'];
      const accountname = json.user['accountname'];
      const team = teamName[selectedOpt];
      localStorage.setItem('token', token);
      localStorage.setItem('accountname', accountname);
      localStorage.setItem('myteam', teamName[selectedOpt]);
      setAccountname(accountname);
      setMyTeam(team);
      setToken(token);
      navigate('/'); // 자동로그인에 성공하면 홈화면으로
    } else {
      navigate('/user/login'); // 자동로그인에 실패하면 로그인화면으로
    }
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

  //계정 검증
  const verifyAccount = async () => {
    const reqPath = '/user/accountnamevalid';
    const reqUrl = url + reqPath;
    const accountData = {
      user: {
        accountname: accountname,
      },
    };
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    const json = await res.json();
    return json.message;
  };
  // 계정 id 에서 포커스가 떠났을 때, 유효성 검사
  const handleAccountnameInp = async (e) => {
    if (e.target.validity.valueMissing) {
      setMessageAccountname('값을 입력해주세요');
      setIsVaildAccountname(false);
      return;
    }
    if (e.target.validity.patternMismatch) {
      setMessageAccountname('영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
      setIsVaildAccountname(false);
      return;
    }

    const message = await verifyAccount();
    if (message !== '사용 가능한 계정ID 입니다.') {
      setMessageAccountname(message);
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
      <Form handleForm={handleForm}>
        <label htmlFor='profileImg' className='img-label'>
          <img src={src} alt='' />
        </label>
        <input
          type='file'
          id='profileImg'
          className='a11y-hidden'
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const reader = new FileReader();
              reader.onload = ({ target }) => {
                setSrc(target.result);
              };
              reader.readAsDataURL(e.target.files[0]);
              setImage(e.target.files[0]);
            } else {
              setSrc(BASIC_PROFILE_LG);
              setImage('');
            }
          }}
        />
        <label htmlFor='username'>사용자 이름</label>
        <input
          id='username'
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
        <label htmlFor='accountname'>계정 ID</label>
        <input
          id='accountname'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          pattern='[A-Za-z0-9\._]+'
          maxLength={10} // 임시
          value={accountname}
          onBlur={handleAccountnameInp}
          onChange={(e) => {
            setAccountnameValue(e.target.value);
          }}
          className={messageAccountname && 'invalid'}
          required
        />
        {messageAccountname && <strong>{messageAccountname}</strong>}
        <label htmlFor='intro'>소개</label>
        <input
          id='intro'
          type='text'
          placeholder='자신에 대해 소개해 주세요!'
          value={intro}
          onBlur={handleIntroInp}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
          pattern='[^$]+'
          className={messageIntro && 'invalid'}
        />
        {messageIntro && <strong>{messageIntro}</strong>}
        <TeamSelect
          selectedOpt={selectedOpt}
          setSelectedOpt={setSelectedOpt}
        ></TeamSelect>
        <Button
          id='start-btn'
          type='submit'
          bgColor={isValid ? 'var(--primary-color)' : 'var(--secondary-color)'}
          lBtn
          disabled={isValid ? '' : 'disabled'}
        >
          구장 밖 야구 시작하기
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
  #profileImg {
    border: none;
  }
  .img-label img {
    width: 110px;
    aspect-ratio: 1/1;
    margin: 0 auto 30px;
    border-radius: 55px;
  }
  #myTeam {
    margin-top: 9px;
  }
  #start-btn {
    margin-top: 30px;
  }
`;
