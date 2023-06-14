import MoreModal from './MoreModal';

const SettingModal = ({ isModalOpen, setIsModalOpen }) => {
  const logout = () => {
    alert('삭제하기 모달');
  };

  return (
    <MoreModal
      menuList={['설정 및 개인정보', '로그아웃']}
      clickEventListnerList={[logout]}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    ></MoreModal>
  );
};
export default SettingModal;
