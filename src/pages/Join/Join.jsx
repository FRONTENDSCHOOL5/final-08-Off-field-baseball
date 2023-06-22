import { useState } from 'react';

import JoinEmail from './JoinEmail';
import JoinProfile from './JoinProfile';

export default function Join() {
  const [page, setPage] = useState('joinEmail');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
}
