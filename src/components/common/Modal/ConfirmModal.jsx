import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';

const ConfirmModal = ({ title, trigger, triggerFunc, closeModal }) => {
  return (
    <Overlay>
      <ConfirmModalWrapper>
        <h2>{title}</h2>
        <BtnContainer>
          <button onClick={closeModal}>취소</button>
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
  & h2 {
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
    color: var(--primary-color);
    font-weight: 500;
    border-left: 1px solid var(--gray-200);
  }
`;
