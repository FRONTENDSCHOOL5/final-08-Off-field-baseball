import { UPLOAD_FILE } from '../../styles/CommonIcons';
import styled from 'styled-components';
import TeamSelect from '../../components/common/Select/TeamSelect';
import Form from '../../components/common/Form';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import UploadModal from '../../components/common/Modal/UploadModal';

import { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const EditProfile = () => {
  const [isValid, setIsVaild] = useState(true);
  const [username, setUsername] = useState('');
  const [accountnameValue, setAccountnameValue] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [src, setSrc] = useState('');
  const [messageIntro, setMessageIntro] = useState('');
  const [messageAccountname, setMessageAccountname] = useState('');
  const [messageUsername, setMessageUsername] = useState('');
  const [selectedOpt, setSelectedOpt] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textCnt, setTextCnt] = useState(0);
  const navigate = useNavigate();

  const { setAccountname, setMyTeam, token, myTeam } = useContext(UserContext);

  const [isVaildIntro, setIsVaildIntro] = useState(true);
  const [isVaildUsername, setIsVaildUsername] = useState(true);
  const [isVaildAccountname, setIsVaildAccountname] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(myTeam);
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '프로필 수정 | 구장 밖 야구';
  }, []);
  // CSS 변수에서 사용하는 팀 이름(samsung, ...) / imgfile
  const teamName = {
    '삼성 라이온즈': { team: 'samsung', filename: '1687344208464.png' },
    '한화 이글스': { team: 'hanwha', filename: '1687344233670.png' },
    '키움 히어로즈': { team: 'kiwoom', filename: '1687344397365.png' },
    '롯데 자이언츠': { team: 'lotte', filename: '1687344422408.png' },
    'LG 트윈스': { team: 'lg', filename: '1687344477843.png' },
    'KIA 타이거즈': { team: 'kia', filename: '1687344489698.png' },
    'SSG 랜더스': { team: 'ssg', filename: '1687344502165.png' },
    '두산 베어스': { team: 'doosan', filename: '1687344513474.png' },
    'NC 다이노스': { team: 'nc', filename: '1687344523820.png' },
    'KT 위즈': { team: 'kt', filename: '1687344531846.png' },
  };

  // 사용자 이름, 계정 ID 모두 유효하고, 소개에 $가 입력되지 않았을 때
  useEffect(() => {
    if (
      isVaildIntro &&
      isVaildUsername &&
      isVaildAccountname &&
      textCnt <= 150
    ) {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }
  }, [isVaildIntro, isVaildUsername, isVaildAccountname, textCnt]);

  // API
  const url = 'https://api.mandarin.weniv.co.kr';
  const uploadProfileImage = async () => {
    try {
      if (image !== '') {
        const formData = new FormData();
        formData.append('image', image);

        const reqPath = '/image/uploadfile';
        const reqUrl = url + reqPath;

        const res = await fetch(reqUrl, {
          method: 'POST',
          body: formData,
        });

        const json = await res.json();
        return 'https://api.mandarin.weniv.co.kr/' + json.filename;
      } else {
        // 기존 프로필 이미지
        return src;
      }
    } catch (err) {
      console.log(err);
      // 이미지 업로드 실패 시 빈문자열
      return '';
    }
  };

  const handleEdit = async () => {
    try {
      const profileImageUrl = await uploadProfileImage();
      const url = 'https://api.mandarin.weniv.co.kr';
      const reqPath = '/user';

      const reqUrl = url + reqPath;

      const userData = {
        user: {
          username: username,
          accountname: accountnameValue,
          image: profileImageUrl,
        },
      };

      // 팀 미선택 예외 처리
      if (selectedOpt && selectedOpt !== '없음') {
        userData.user.intro = intro + '$' + teamName[selectedOpt].team;
      } else {
        userData.user.intro = intro;
      }

      const res = await fetch(reqUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const json = await res.json();

      alert('수정되었습니다.');
      localStorage.setItem('accountname', json.user.accountname);
      setAccountname(json.user.accountname);
      navigate('/profile');

      if (selectedOpt && selectedOpt !== '없음') {
        localStorage.setItem('myteam', teamName[selectedOpt].team);
        setMyTeam(teamName[selectedOpt].team);
      } else {
        // 팀 미선택 시
        localStorage.setItem('myteam', '');
        setMyTeam('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(src);
    handleEdit();
  };

  // 사용자 이름 유효성 검사
  const handleUsernameInp = (e) => {
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
        accountname: accountnameValue,
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

  // 계정 id 값이 변하면, 유효성 검사
  const handleAccountnameInp = async (e) => {
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

  // 계정 id 에서 포커스가 떠났을 때, 유효성 검사
  const handleAccountnameInpBlur = async (e) => {
    if (!e.target.validity.valid) {
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

  // 소개 유효성 검사
  const handleIntroInp = (e) => {
    if (e.target.value.includes('$')) {
      setMessageIntro('달러($)를 제외한 문자를 입력해주세요');
      setIsVaildIntro(false);
    } else {
      setMessageIntro('');
      setIsVaildIntro(true);
    }
  };

  const beforeEdit = async () => {
    try {
      const req = await fetch(`${url}/user/myinfo`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await req.json();
      setIntro(res.user.intro?.split('$')[0]); // intro 있을 경우. 잘라서
      setSrc(res.user.image); // 이미지

      // intro 있을 경우
      if (res.user.intro) {
        const intro = res.user.intro.split('$')[0];
        setIntro(intro);
        setTextCnt(intro.length);
      }

      // 마이팀 selectedOpt에 저장
      if (myTeam) {
        const teamIndex = Object.values(teamName).findIndex(
          (v) => v.team === myTeam
        );
        setSelectedOpt(Object.keys(teamName)[teamIndex]);
      }

      setUsername(res.user.username);
      setAccountnameValue(res.user.accountname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    beforeEdit();
  }, []);

  // 팀 테마 설정 (기본 테마 프사, 테마 컬러)
  useEffect(() => {
    if (!selectedOpt) {
      return;
    }

    const url = 'https://api.mandarin.weniv.co.kr';
    const filenameList = Object.values(teamName).map(
      (v) => url + '/' + v.filename
    );
    filenameList.push(url + '/' + '1687309142552.png');

    // 현재 프로필이 기본 프로필 사진이라면
    if (filenameList.includes(src)) {
      if (selectedOpt === '없음') {
        setSrc(url + '/' + '1687309142552.png');
        setSelectedTeam('default');
      } else {
        setSrc(url + '/' + teamName[selectedOpt].filename);
        setSelectedTeam(teamName[selectedOpt].team);
      }
    } else {
      if (selectedOpt === '없음') {
        setSelectedTeam('default');
      } else {
        setSelectedTeam(teamName[selectedOpt].team);
      }
    }
  }, [selectedOpt]);

  // 이미지 삭제
  const handleImgDelete = (e) => {
    e.preventDefault();
    setImage('');
    setSrc(url + '/' + teamName[selectedOpt].filename);
    setIsModalOpen(false); // 모달창 닫기
  };

  // 텍스트 길이에 맞춰 textarea height 변경
  const textarea = useRef(null);
  useEffect(() => {
    resizeHeight(textarea.current);
  }, [textCnt]);

  const resizeHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const handleTextCnt = (e) => {
    setTextCnt(e.target.value.length);
  };

  return (
    <>
      <TopUploadNav
        isValid={isValid}
        event={handleForm}
        selectedTeam={selectedTeam}
      />
      <StyledEditProfile myTeam={selectedTeam}>
        <Form selectedTeam={selectedTeam}>
          <button
            type='button'
            className='img-btn'
            onClick={(e) => setIsModalOpen(true)}
          >
            <img src={src} alt='' />
            <img className='uplodeImg' src={UPLOAD_FILE} alt='' />
          </button>
          {isModalOpen && (
            <UploadModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            >
              <li>
                <button
                  type='button'
                  onKeyDown={(e) => {
                    // input에 focus 가지 않게
                    if (!e.shiftKey && e.key === 'Tab') {
                      e.preventDefault();
                      e.target.parentNode.nextElementSibling.firstElementChild.focus();
                    }
                  }}
                  // 클릭 시, file input click 이벤트 실행(이미지 업로드 창 열림)
                  onClick={(e) => {
                    e.target.nextElementSibling.click();
                  }}
                >
                  이미지 업로드
                </button>
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
                    }
                    setIsModalOpen(false); // 모달창 닫기
                  }}
                />
              </li>
              <li>
                <button type='button' onClick={handleImgDelete}>
                  이미지 제거
                </button>
              </li>
              <li>
                <button type='button' onClick={(e) => setIsModalOpen(false)}>
                  취소
                </button>
              </li>
            </UploadModal>
          )}
          <label htmlFor='username'>사용자 이름</label>
          <input
            id='username'
            type='text'
            placeholder='2~10자 이내여야 합니다.'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleUsernameInp(e);
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
            maxLength={30}
            value={accountnameValue}
            onBlur={handleAccountnameInpBlur}
            onChange={(e) => {
              handleAccountnameInp(e);
              setAccountnameValue(e.target.value);
            }}
            className={messageAccountname && 'invalid'}
            required
          />
          {messageAccountname && <strong>{messageAccountname}</strong>}
          <label htmlFor='intro'>소개</label>
          <textarea
            id='intro'
            type='text'
            placeholder='자신에 대해 소개해 주세요!'
            value={intro}
            onChange={(e) => {
              setIntro(e.target.value);
              handleTextCnt(e);
              handleIntroInp(e);
            }}
            className={messageIntro && 'invalid'}
            maxLength={150}
            ref={textarea}
          />
          <div className={textCnt > 150 ? 'invalid' : ''}>
            <span>{textCnt} / </span>150
          </div>
          {messageIntro && <strong>{messageIntro}</strong>}
          <TeamSelect
            selectedTeam={selectedTeam}
            selectedOpt={selectedOpt}
            setSelectedOpt={setSelectedOpt}
          ></TeamSelect>
        </Form>
      </StyledEditProfile>
    </>
  );
};

export default EditProfile;

const StyledEditProfile = styled.section`
  padding: 78px 34px;

  #profile-img {
    border: none;
  }
  .img-btn {
    position: relative;
    display: flex;
    width: 110px;
    aspect-ratio: 1/1;
    margin: 0 auto 30px;
  }
  .img-btn img {
    border-radius: 55px;
    object-fit: cover;
  }
  .img-btn .uplodeImg {
    position: absolute;
    width: 36px;
    height: 36px;
    bottom: 0;
    right: 0;
  }
  #my-team {
    margin-top: 9px;
  }
`;
