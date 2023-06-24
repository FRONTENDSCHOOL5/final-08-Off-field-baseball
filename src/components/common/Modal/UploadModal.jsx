import { useEffect } from 'react';
import Overlay from './Overlay';
import styled from 'styled-components';
import { useRef, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const UploadModal = ({ isModalOpen, setIsModalOpen, children }) => {
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
      <StyledDialog
        open
        role='dialog'
        myTeam={myTeam}
        onClose={(e) => setIsModalOpen(false)} // 파일 취소 버튼 클릭 시, close 된다. 이때 모달 상태를 false로 변경
      >
        <h2>프로필 사진 바꾸기</h2>
        <ul onKeyDown={handleKeyDown} ref={optionList}>
          {children}
        </ul>
      </StyledDialog>
    </Overlay>
  );
};

export default UploadModal;

const StyledDialog = styled.dialog`
  position: fixed;
  inset: 0;
  width: 252px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    margin: 16px 0;
  }
  li {
    margin: 0 -14px;
    padding: 6px 0;
  }
  li:not(:first-child) {
    border: 1px solid var(--gray-200);
    border-width: 1px 0 0 0;
  }
  li:first-child button {
    color: ${(props) =>
      'var(--primary-color-' + (props.myTeam || 'default') + ')'};
  }
  /* li:nth-child(2) button {
    color: #eb5757;
  } */
  li > button {
    margin: 0 10px;
    padding: 8px 20px;
    width: calc(100% - 20px);
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
