import MoreModal from './MoreModal';

const SettingModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <MoreModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <li>
        <button type='button'>설정 및 개인정보</button>
      </li>
      <li>
        <button type='button'>로그아웃</button>
      </li>
    </MoreModal>
  );
};
export default SettingModal;
