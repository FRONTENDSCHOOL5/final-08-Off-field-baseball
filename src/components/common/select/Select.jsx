import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

function Select({ selectBtnText, optionTextList }) {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOn(true);

    if (isOpen) {
      setIsOpen(false);
      console.log(e.currentTarget);
    } else {
      setIsOpen(true);
    }
  };
  const handleClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleOptionsTab = (e) => {
    // 엔터
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      handleClose(e);
    } else if (e.keyCode === 40) {
      e.preventDefault(); //이 함수를 지우면 탭을 두 번 한 것처럼 포커스가 이동
      // 탭은 기본 지원
      const next = e.target.closest('li').nextElementSibling;
      if (!next) {
        e.currentTarget.firstElementChild.firstElementChild.focus();
      } else {
        next.firstElementChild.focus();
      }
    } else if (e.keyCode === 38) {
      e.preventDefault();
      const prev = e.target.closest('li').previousElementSibling;
      if (!prev) {
        e.currentTarget.lastElementChild.lastElementChild.focus();
      } else {
        prev.lastElementChild.focus();
      }
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.select-btn')) {
        handleClose(e);
        setIsOn(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <StyledSelect
      className="custom-select"
      onKeyDown={(e) => {
        // Esc
        if (e.keyCode === 27 && isOpen) {
          handleClose(e);
          e.currentTarget.firstElementChild.focus();
        }
      }}
    >
      <button
        id="myTeam-btn"
        className={isOn ? 'select-btn on' : 'select-btn'}
        // onClick : 탭, 스페이스 포함
        onClick={(e) => {
          e.preventDefault();
          handleOpen(e);
        }}
        onKeyDown={(e) => {
          // 아래, 위 방향키
          if (e.keyCode === 40 || e.keyCode === 38) {
            setIsOn(true);
            if (isOpen) {
              e.target.nextElementSibling.firstElementChild.firstElementChild.focus();
            } else {
              setIsOpen(true);
            }
          }
        }}
      >
        {selectBtnText}
      </button>

      {isOpen && (
        <ul onKeyDown={handleOptionsTab}>
          {optionTextList.map((txt, i) => (
            <li key={i}>
              <button
                type="button"
                className={0 === i ? 'selected-option' : ''}
              >
                {txt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
}

export default Select;
