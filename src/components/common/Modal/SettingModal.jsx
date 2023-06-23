import MoreModal from './MoreModal';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import ConfirmModal from './ConfirmModal';
import { UserContext } from '../../../context/UserContext';

const SettingModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoutbtn = () => {
    navigate('/');
    localStorage.clear();
    setMyTeam(null);
    setToken(null);
    setAccountname(null);
  };

  const { setMyTeam, setToken, setAccountname } = useContext(UserContext);
  return (
    <>
      <MoreModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <li>
          <button
            type='button'
            onClick={(e) => {
              setIsModalOpen(false);
              navigate('/profile');
            }}
          >
            설정 및 개인정보
          </button>
        </li>
        <li>
          <button type='button' onClick={(e) => setIsLogoutModalOpen(true)}>
            로그아웃
          </button>
        </li>
      </MoreModal>
      {isLogoutModalOpen && (
        <ConfirmModal
          title='로그아웃 하시겠습니까?'
          trigger='로그아웃'
          triggerFunc={handleLogoutbtn}
          closeModal={() => setIsLogoutModalOpen(false)}
        ></ConfirmModal>
      )}
    </>
  );
};
export default SettingModal;
