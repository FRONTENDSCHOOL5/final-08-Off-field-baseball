import { useEffect } from 'react';
import styled from 'styled-components';
import { useRef, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const UploadModal = ({ setIsModalOpen, children }) => {
  const { myTeam } = useContext(UserContext);
  const modal = useRef(null);
  useEffect(() => {
    if (modal) {
      modal.current.showModal();
    }
  }, [modal]);

  return (
    <StyledDialog
      ref={modal}
      myTeam={myTeam}
      onClose={() => setIsModalOpen(false)} // 파일 취소 버튼 클릭 시, close 된다. 이때 모달 상태를 false로 변경
      aria-labelledby='dialog-label'
    >
      <h3 id='dialog-label'>프로필 사진 바꾸기</h3>
      <ul>{children}</ul>
    </StyledDialog>
  );
};

export default UploadModal;

const StyledDialog = styled.dialog`
  width: 252px;
  border: none;
  padding: 10px 0 0;
  border-radius: 10px;
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    margin: 16px 0;
  }
  li {
    margin: 0;
    padding: 4px 0;
  }
  li:not(:first-child) {
    border: 1px solid var(--gray-200);
    border-width: 1px 0 0 0;
  }
  li:first-child button {
    color: ${(props) =>
      'var(--primary-color-' + (props.myTeam || 'default') + ')'};
  }
  li > button {
    margin: 0 10px;
    padding: 10px 20px;
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
