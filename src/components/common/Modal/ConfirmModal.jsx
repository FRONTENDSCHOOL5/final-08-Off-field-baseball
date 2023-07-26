import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';
import Overlay from './Overlay';

const ConfirmModal = ({ title, trigger, triggerFunc, closeModal }) => {
  const { myTeam } = useContext(UserContext);

  // tab을 누르면, 모달 안에서만 포커스 되게
  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.key === 'Tab') {
      if (!e.target.nextElementSibling) {
        e.preventDefault();
        e.currentTarget.firstElementChild.focus();
      }
    }
  };

  // 모달 외 클릭 시 모달 close
  const handleClick = (e) => {
    if (!e.target.closest('dialog')) {
      closeModal();
    }
  };

  const firstOpt = useRef();
  useEffect(() => {
    // 모달이 open되면 모달 첫번째 메뉴에 focus
    firstOpt.current.focus();

    // esc
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    });
  }, []);

  return (
    <Overlay onClick={handleClick}>
      <ConfirmModalWrapper>
        <h1>{title}</h1>
        <BtnContainer myTeam={myTeam} onKeyDown={handleKeyDown}>
          <button onClick={closeModal} ref={firstOpt}>
            취소
          </button>
          <button onClick={() => triggerFunc()}>{trigger}</button>
        </BtnContainer>
      </ConfirmModalWrapper>
    </Overlay>
  );
};

export default ConfirmModal;

const ConfirmModalWrapper = styled.div`
  width: 25.2rem;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  & h1 {
    font-size: 1.6rem;
    margin: 22px 0;
    font-weight: 500;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--gray-200);
  & button {
    width: 100%;
    font-size: 1.4rem;
    padding: 1.4rem 0;
  }

  & button:last-child {
    color: ${(props) =>
      props.myTeam === 'kt'
        ? 'var(--tertiary-color-kt)'
        : 'var(--primary-color-' + (props.myTeam || 'default') + ')'};
    font-weight: 500;
    border-left: 1px solid var(--gray-200);
  }
`;
