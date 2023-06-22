import React, { useState } from 'react';
import MoreModal from './MoreModal';
import DeleteModal from './DeleteModal';
import ReportModal from './ReportModal';
import { useNavigate } from 'react-router-dom';

export default function PostModal({
  isModalOpen,
  setIsModalOpen,
  id,
  updatePost,
  mode,
  loc,
}) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isConfirmOpen ? (
        <>
          {mode === 'delete' && (
            <DeleteModal
              closeModal={() => setIsConfirmOpen(false)}
              updatePost={updatePost}
              id={id}
              setIsModalOpen={setIsModalOpen}
              loc={loc}
            />
          )}
          {mode === 'report' && (
            <ReportModal
              closeModal={() => setIsConfirmOpen(false)}
              id={id}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </>
      ) : (
        <MoreModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          {mode === 'delete' ? (
            <>
              <li>
                <button type='button' onClick={() => setIsConfirmOpen(true)}>
                  삭제
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={() =>
                    navigate(
                      loc === 'product'
                        ? '/product/' + id + '/edit'
                        : '/post/' + id + '/edit'
                    )
                  }
                >
                  수정
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                type='button'
                onClick={() => {
                  setIsConfirmOpen(true);
                }}
              >
                신고하기
              </button>
            </li>
          )}
        </MoreModal>
      )}
    </>
  );
}
