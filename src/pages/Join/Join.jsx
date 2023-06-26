import { useState, useEffect } from 'react';
import JoinEmail from './JoinEmail';
import JoinProfile from './JoinProfile';

const Join = () => {
  const [page, setPage] = useState('joinEmail');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = '회원가입 | 구장 밖 야구';
  }, []);

  return (
    <>
      {page === 'joinEmail' ? (
        <JoinEmail
          setPage={setPage}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        ></JoinEmail>
      ) : (
        <JoinProfile email={email} password={password}></JoinProfile>
      )}
    </>
  );
};

export default Join;
