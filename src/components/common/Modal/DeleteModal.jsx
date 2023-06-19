import ConfirmModal from './ConfirmModal';

export default function DeleteModal({
  closeModal,
  id,
  updatePost,
  setIsModalOpen,
}) {
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  const deletePost = async () => {
    try {
      const req = await fetch(`${url}/post/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const res = await req.json();
      console.log(res);
      closeModal(false);
      alert('게시글이 삭제되었습니다.');
      updatePost(res);
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ConfirmModal
      title='게시글을 삭제하시겠습니까?'
      closeModal={closeModal}
      trigger={'삭제'}
      triggerFunc={deletePost}
    />
  );
}
