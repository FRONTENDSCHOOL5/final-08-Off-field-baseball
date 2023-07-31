import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FULL_LOGO } from '../../styles/CommonImages';
import { KAKAO } from '../../styles/CommonIcons';
import { GOOGLE } from '../../styles/CommonIcons';
import { FACEBOOK } from '../../styles/CommonIcons';

const SplashLogin = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '로그인 | 구장 밖 야구';
  }, []);

  return (
    <>
      <h1 className='a11y-hidden'>구장 밖 야구</h1>
      <BackgroundStyle onClick={() => setModalOpen(!modalOpen)}>
        <img src={FULL_LOGO} alt='구장 밖 야구 입니다.' />
        {modalOpen && (
          <LoginBox>
            <button className='kakao-login'>
              <img src={KAKAO} alt='LoginLogoImg' />
              카카오톡 계정으로 로그인
            </button>
            <button className='google-login'>
              <img src={GOOGLE} alt='LoginLogoImg' />
              구글 계정으로 로그인
            </button>
            <button className='facebook-login'>
              <img src={FACEBOOK} alt='LoginLogoImg' />
              페이스북 계정으로 로그인
            </button>
            <div className='login-join'>
              <button
                className='email-login'
                onClick={() => navigate('/login/email')}
              >
                이메일로 로그인
              </button>
              <p>|</p>
              <button className='join-btn' onClick={() => navigate('/join')}>
                회원가입
              </button>
            </div>
          </LoginBox>
        )}
      </BackgroundStyle>
    </>
  );
};

export default SplashLogin;

const BackgroundStyle = styled.div`
  position: relative;
  background-color: #52c33d;
  height: 100vh;
  overflow: hidden;

  img {
    width: 225px;
    height: auto;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LoginBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  border-radius: 20px 20px 0 0;
  align-items: center;
  gap: 10px;
  padding: 50px 34px;

  /* 밑에서 위로 모달 등장 */
  transform: translateY(100%);
  animation: modal-animation 0.3s ease-in 0s 1 forwards running;
  @keyframes modal-animation {
    100% {
      transform: translateY(0);
    }
  }

  button {
    position: relative;
    width: 322px;
    border-radius: 30px;
    padding: 13px;
    color: var(--gray-400);
    font-size: 1.4rem;
  }

  .kakao-login {
    position: relative;
    border: 1px solid #f2c94c;
    cursor: default;

    img {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 17px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .google-login {
    position: relative;
    border: 1px solid var(--gray-400);
    cursor: default;
    img {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 17px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .facebook-login {
    position: relative;
    border: 1px solid #2d9cdb;
    cursor: default;
    img {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 17px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .login-join {
    padding-top: 5px;

    p {
      display: inline-block;
      color: var(--gray-300);
      font-size: 1.25rem;
      padding: 0px 13px;
    }
    button {
      width: auto;
      font-size: 1.2rem;
      padding: 0;
    }
  }
`;
