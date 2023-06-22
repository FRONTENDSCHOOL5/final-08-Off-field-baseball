import { useEffect } from 'react';
import Overlay from './Overlay';
import styled from 'styled-components';
import { useRef, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const MoreModal = ({ isModalOpen, setIsModalOpen, children }) => {
  const { myTeam } = useContext(UserContext);
  // tab을 누르면, 모달 안에서만 포커스 되게
  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.key === 'Tab') {
      if (!e.target.parentNode.nextElementSibling) {
        e.preventDefault();
        e.target.parentNode.parentNode.firstElementChild.firstElementChild.focus();
      }
    }
  };

  // 모달 외 클릭 시 모달 close
  const handleClick = (e) => {
    if (!e.target.closest('dialog')) {
      setIsModalOpen(false);
    }
  };

  // 모달이 open되면 모달 첫번째 메뉴에 focus
  const optionList = useRef();
  useEffect(() => {
    if (isModalOpen) {
      optionList.current.firstElementChild.firstElementChild.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay onClick={handleClick}>
      <StyledDialog open role='dialog' myTeam={myTeam}>
        <ul onKeyDown={handleKeyDown} ref={optionList}>
          {children}
        </ul>
      </StyledDialog>
    </Overlay>
  );
};

export default MoreModal;

const StyledDialog = styled.dialog`
  position: fixed;
  bottom: 0;
  width: min(100%, 430px);
  border: none;
  padding: 0 10px 10px;
  border-radius: 10px 10px 0 0;

  /* 밑에서 위로 모달 등장 */
  transform: translateY(100%);
  animation: modal-animation 0.3s ease-in 0s 1 forwards running;
  @keyframes modal-animation {
    100% {
      transform: translateY(0);
    }
  }

  ul::before {
    display: block;
    content: '';
    margin: 16px auto;
    width: 50px;
    height: 4px;
    background-color: var(--gray-200);
    border-radius: 2px;
  }
  li > button {
    padding: 14px 16px;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: left;
  }
  button:focus {
    outline: none;
    background-color: ${(props) =>
      'var(--secondary-color-' + (props.myTeam || 'default') + ')'};
    border-radius: 8px;
  }
`;
