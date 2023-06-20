import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BALL_ONLY } from '../../styles/CommonImages';
import { TEXT_LOGO } from '../../styles/CommonImages';
import { SPEECH_BUBBLE } from '../../styles/CommonImages';

const LogoPage = () => {
  const [loading, setLoding] = useState(true);

  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <LayoutStyle>
        <LogoPageDiv>
          <div className='wrapper'>
            <SpeechBubble src={SPEECH_BUBBLE} />
            <BallImg src={BALL_ONLY} />
          </div>
          <TextLogo src={TEXT_LOGO} alt='구장 밖 야구 입니다.' />
        </LogoPageDiv>
      </LayoutStyle>
    </>
  );
};

export default LogoPage;

const LayoutStyle = styled.div`
  background-color: var(--primary-color);
`;

const LogoPageDiv = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  height: 100vh;

  .wrapper {
    position: relative;
    width: 137px;
    height: 147px;
  }

  animation: fadeOut;
  animation-delay: 2.5s;
  animation-duration: 1.5s;
`;

const SpeechBubble = styled.img`
  position: absolute;
  top: 0;
  left: -20px;
  width: 63px;
  height: auto;
  animation: zoomIn;
  animation-duration: 1s;
`;

const BallImg = styled.img`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 97px;
  height: auto;
  animation: bounce;
  animation-delay: 0.5s;
  animation-duration: 1.5s;
`;

const TextLogo = styled.img`
  display: block;
  width: 190px;
  height: 48px;
`;
