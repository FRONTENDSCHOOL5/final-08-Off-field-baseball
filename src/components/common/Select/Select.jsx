import { useRef } from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';
import { OPEN } from '../../../styles/CommonIcons';

// btnId : label for과 연결
export default function Select({
  btnTxt,
  optionTextList,
  btnId,
  selectedOpt,
  setSelectedOpt,
}) {
  const { myTeam } = useContext(UserContext);
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [FocusOptIndex, setFocusOptIndex] = useState(null);
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
        setIsOpen(false);
        setIsOn(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // 셀렉트가 open 됐을 때
  useEffect(() => {
    // 선택된 옵션이 있다면, 선택되어 있는 옵션에 포커스
    if (isOpen && FocusOptIndex) {
      optionList.current.children[FocusOptIndex].firstElementChild.focus();
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // 옵션 선택
  const selectOpt = (e) => {
    e.target.focus();
    const optIndex = findIndex(e.target.parentNode);
    setFocusOptIndex(optIndex);
    const btn = e.currentTarget.previousElementSibling;
    setTimeout(() => {
      setSelectedOpt(e.target.textContent);
      setIsOpen(false);
      btn.focus();
    }, 110);
  };

  return (
    <StyledSelect
      myTeam={myTeam}
      selectedOpt={selectedOpt}
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
        id={btnId}
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
        {selectedOpt || btnTxt}
        <img src={OPEN} alt='' className={isOpen ? 'open' : null} />
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

const findIndex = (target) => {
  const siblingList = target.parentNode.children;
  for (let i = 0; i < siblingList.length; i++) {
    if (siblingList[i] === target) {
      return i;
    }
  }
};

const StyledSelect = styled.div`
  position: relative;
  .select-btn {
    position: relative;
    width: 100%;
    border-radius: 8px;
    padding: 9px 14px 9px 13px;
    text-align: left;
    font-size: 1.4rem;
    border: 1px solid var(--gray-200);
    color: ${(props) => props.selectedOpt || 'var(--gray-200)'};
  }
  .select-btn img {
    position: absolute;
    right: 13px;
    bottom: 13px;
    width: 10px;
    height: 9px;
  }
  .select-btn img.open {
    transform: rotate(180deg);
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
    border-color: ${(props) =>
      'var(--primary-color-' + (props.myTeam || 'default') + ')'};
  }

  li > button:hover {
    background: ${(props) =>
      'var(--secondary-color-' + (props.myTeam || 'default') + ')'};
  }
  /* 현재 선택된 옵션 */
  li > button:focus {
    padding: 9px 5px;
    border: 2px solid
      ${(props) => 'var(--primary-color-' + (props.myTeam || 'default') + ')'};

    background: ${(props) =>
      'var(--secondary-color-' + (props.myTeam || 'default') + ')'};
  }
  button:focus {
    outline: none;
  }
`;
