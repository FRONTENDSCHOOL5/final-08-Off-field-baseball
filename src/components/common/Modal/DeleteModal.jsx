import ConfirmModal from './ConfirmModal';
import { useNavigate } from 'react-router';

export default function DeleteModal({
  closeModal,
  id,
  updatePost,
  setIsModalOpen,
  loc,
}) {
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const deletePost = async () => {
    try {
      const req = await fetch(
        `${url}/${loc === 'product' ? 'product' : 'post'}/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      );
      const res = await req.json();
      closeModal(false);
      alert('게시글이 삭제되었습니다.');
      updatePost && updatePost(res);
      setIsModalOpen(false);
      navigate('/profile');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ConfirmModal
      title='게시글을 삭제하시겠습니까?'
      closeModal={(e) => {
        closeModal();
        setIsModalOpen(false);
      }}
      trigger={'삭제'}
      triggerFunc={deletePost}
    />
  );
}
