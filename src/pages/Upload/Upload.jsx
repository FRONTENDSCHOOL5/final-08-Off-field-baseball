import { BASIC_PROFILE_LG, UPLOAD_FILE, X } from '../../styles/CommonIcons';
import styled from 'styled-components';
import TopUploadNav from '../../components/common/TopNavBar/TopUploadNav';
import { useState } from 'react';
import Loading from '../../components/common/Loading';
import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Upload() {
  const [imgList, setImgList] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const validText = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleImageInput = async (e) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      const imageFile = e.target.files;
      if (imageFile.length > 3)
        return alert('이미지는 3개까지 업로드 가능합니다.');
      for (let i = 0; i < imageFile.length; i++) {
        formData.append('image', imageFile[i]);
      }
      console.log(formData);

      const req = await fetch(`${url}/image/uploadfiles`, {
        method: 'POST',
        body: formData,
      });
      const res = await req.json();
      const fileUrl = res.map((img) => url + '/' + img.filename);
      console.log(fileUrl);
      setImgList([...imgList, ...fileUrl]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handlePost = async () => {
    setIsLoading(true);
    try {
      const postData = {
        post: {
          content: text,
          image: imgList.join(', '),
        },
      };
      const req = await fetch(`${url}/post`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (req.status === 200) {
        navigate('/');
      } else {
        throw new Error('업로드 실패');
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const ResizeHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const deleteImg = (e) => {
    const i = findIndex(e.currentTarget.parentNode);
    const list = [...imgList];
    list.splice(i, 1);
    setImgList(list);
  };

  return (
    <>
      <TopUploadNav btnTxt='업로드' isValid={isValid} event={handlePost} />
      <ContentsLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <StyledSection>
            <img className='profile-img' src={BASIC_PROFILE_LG} alt='' />
            <textarea
              name=''
              id=''
              placeholder='게시글 입력하기...'
              onChange={(e) => {
                ResizeHeight(e);
                validText(e);
              }}
              value={text}
              rows={1}
            ></textarea>
            <label htmlFor='profileImg'>
              <img
                className='uplode-img'
                src={UPLOAD_FILE}
                alt='이미지 업로드하기'
              />
              <input
                type='file'
                id='profileImg'
                name='profile-img'
                accept='image/*'
                onChange={handleImageInput}
                multiple
              />
            </label>
            {!!imgList.length && (
              <ul>
                {imgList.map((img, i) => {
                  return (
                    <li key={i}>
                      <img src={img} alt='' />
                      <button
                        className='delete-btn'
                        type='button'
                        onClick={deleteImg}
                      >
                        <img src={X} alt='이미지 삭제하기' />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </StyledSection>
        )}
      </ContentsLayout>
    </>
  );
}

// select에서 사용하는 동일한 함수
const findIndex = (target) => {
  const siblingList = target.parentNode.children;
  for (let i = 0; i < siblingList.length; i++) {
    if (siblingList[i] === target) {
      return i;
    }
  }
};

const StyledSection = styled.section`
  input[type='file'] {
    display: none;
  }

  label {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 16px;
    bottom: 16px;
    cursor: pointer;
  }

  /* reset */
  img {
    height: auto;
    object-fit: cover;
  }
  .profile-img {
    width: 42px;
    height: auto;
    aspect-ratio: 1/1;
    display: inline-block;
    vertical-align: top;
  }
  textarea {
    margin: 12px 0 0 13px;
    width: calc(100% - 55px); // 프사 + 마진 = 55px
    resize: none; // 크기 고정
    font-size: 1.4rem;
    line-height: 1.8rem;
    border-radius: 8px;
  }
  textarea::placeholder {
    color: var(--gray-300);
  }
  textarea:focus {
    outline: 1px solid var(--primary-color);
    border-radius: 8px;
  }
  .uplode-img {
    width: 50px;
    aspect-ratio: 1/1;
    /* 레이아웃 */
  }

  ul {
    margin-top: 16px;
    display: flex;
    overflow-x: scroll;
    margin-left: auto;
    width: calc(100% - 55px); // 프사 + 마진 = 55px
  }
  ul > li:not(:first-child) {
    margin-left: 8px;
  }
  ul > li {
    position: relative;
    flex-grow: 1;
  }
  ul > li > img {
    min-width: 168px;
    aspect-ratio: 304/228;
    /* 임시 */
    box-shadow: inset 0 0 3px black;
    border-radius: 10px;
  }
  .delete-btn > img {
    position: absolute;
    right: 6px;
    top: 6px;
    width: 22px;
    aspect-ratio: 1/1;
  }
`;
