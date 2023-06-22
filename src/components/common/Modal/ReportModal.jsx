import ConfirmModal from './ConfirmModal';

export default function ReportModal({ closeModal, id, setIsModalOpen }) {
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  const reportPost = async () => {
    try {
      const req = await fetch(`${url}/post/${id}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const res = await req.json();
      console.log(res);
      closeModal(false);
      alert('신고가 완료되었습니다.');
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ConfirmModal
      title='게시글을 신고하시겠습니까?'
      closeModal={closeModal}
      trigger={'신고'}
      triggerFunc={reportPost}
    />
  );
}
