import { useEffect } from 'react';
import Overlay from './Overlay';
import styled from 'styled-components';
import { useRef } from 'react';

const MoreModal = ({ menuList, isModalOpen, setIsModalOpen }) => {
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

  // 모달이 open되면 모달 첫번째 요소에 focus
  const firstEl = useRef();
  useEffect(() => {
    if (isModalOpen) {
      firstEl.current.focus();
    }
  }, []);

  return (
    <Overlay onClick={handleClick}>
      <StyledDialog open role='dialog'>
        <ul onKeyDown={handleKeyDown}>
          {menuList.map((menu, i) => {
            if (i === 0) {
              return (
                <li key={i}>
                  <button ref={firstEl} type='button'>
                    {menu}
                  </button>
                </li>
              );
            }

            return (
              <li key={i}>
                <button type='button'>{menu}</button>
              </li>
            );
          })}
        </ul>
      </StyledDialog>
    </Overlay>
  );
};

export default MoreModal;

MoreModal.defaultProps = {
  menuList: ['설정 및 개인정보', '로그아웃'],
};

const StyledDialog = styled.dialog`
  position: fixed;
  bottom: 0;
  width: min(100%, 430px);
  border: none;
  padding: 0;
  border-radius: 10px 10px 0 0;

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
    padding: 14px 26px;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: left;
  }
  button:focus {
    outline: 1px solid var(--primary-color);
  }
`;
