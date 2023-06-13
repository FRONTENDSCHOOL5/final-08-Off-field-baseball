import { useRef } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Select({ optionTextList }) {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [FocusOptIndex, setFocusOptIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(optionTextList[0]);
  const optionList = useRef(null);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOn(true);
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const nextOpt = (e) => {
    e.preventDefault(); //이 함수를 지우면 포커스 두 번 이동함
    const next = e.target.closest('li').nextElementSibling;
    if (!next) {
      e.currentTarget.firstElementChild.firstElementChild.focus();
      setFocusOptIndex(0);
    } else {
      next.firstElementChild.focus();
      setFocusOptIndex(FocusOptIndex + 1);
    }
  };

  const prevOpt = (e) => {
    e.preventDefault();
    const prev = e.target.closest('li').previousElementSibling;
    if (!prev) {
      e.currentTarget.lastElementChild.lastElementChild.focus();
      setFocusOptIndex(optionTextList.length - 1);
    } else {
      prev.lastElementChild.focus();
      setFocusOptIndex(FocusOptIndex - 1);
    }
  };

  const moveOpt = (e) => {
    // 아래 방향키 | 탭
    if (e.keyCode === 40 || (!e.shiftKey && e.keyCode === 9)) {
      nextOpt(e);
    }
    // 위 방향키 | shift + 탭
    else if (e.keyCode === 38 || (e.shiftKey && e.keyCode === 9)) {
      prevOpt(e);
    }
  };

  // 셀렉트 바깥 영역을 클릭했을 때
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.target.classList.contains('select-btn') &&
        !e.target.closest('.list')
      ) {
        handleClose(e);
        setIsOn(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 셀렉트가 open 됐을 때, 선택되어 있는 옵션에 포커스
  useEffect(() => {
    if (isOpen) {
      optionList.current.children[FocusOptIndex].firstElementChild.focus();
    }
    return;
  }, [isOpen]);

  // 옵션 선택
  const selectOpt = (e) => {
    e.target.focus();
    const btn = e.currentTarget.previousElementSibling;
    setTimeout(() => {
      setSelectedOpt(e.target.textContent);
      setIsOpen(false);
      btn.focus();
    }, 110);
  };

  return (
    <StyledSelect
      className='custom-select'
      onKeyDown={(e) => {
        // Esc
        if (e.keyCode === 27 && isOpen) {
          handleClose(e);
          e.currentTarget.firstElementChild.focus();
        }
      }}
    >
      <button
        id='myTeam-btn'
        className={isOn ? 'select-btn on' : 'select-btn'}
        // onClick : 탭, 스페이스 포함
        onClick={handleOpen}
        onKeyDown={(e) => {
          // 아래, 위 방향키
          if (e.keyCode === 40 || e.keyCode === 38) {
            setIsOpen(true);
          }
        }}
      >
        {selectedOpt}
      </button>

      {isOpen && (
        <ul
          className='list'
          onKeyDown={moveOpt}
          onClick={selectOpt}
          ref={optionList}
        >
          {optionTextList.map((txt, i) => (
            <li key={i}>
              <button type='button'>{txt}</button>
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
}

const StyledSelect = styled.div`
  position: relative;
  .select-btn {
    width: 100%;
    border-radius: 8px;
    padding: 9px 14px 9px 13px;
    text-align: left;
    font-size: 1.4rem;
    border: 1px solid var(--gray-200);
  }
  ul {
    position: absolute;
    width: 100%;
    margin-top: 8px;
    box-shadow: 0px 0px 4px var(--gray-300);
    font-size: 1.4rem;
    border-radius: 8px;
    padding: 6px;
    overflow: hidden;
    max-height: 200px;
    overflow-y: scroll;
    background: white;
  }
  ul button {
    padding: 9px 7px;
    width: 100%;
    text-align: left;
    border-radius: 8px;
  }
  li:not(:first-child) button {
    margin-top: 6px;
  }

  /* 포커스, 액션 */
  .select-btn:focus,
  .select-btn.on {
    border-color: var(--primary-color);
  }

  li > button:hover {
    background: var(--secondary-color);
  }
  /* 현재 선택된 옵션 */
  li > button:focus {
    padding: 9px 5px;
    border: 2px solid var(--primary-color);
    background: var(--secondary-color);
  }
  button:focus {
    outline: none;
  }
`;