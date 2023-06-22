import { createContext, useState } from 'react';

export const UserContext = createContext({
  token: localStorage.getItem('token') || null,
  accountname: localStorage.getItem('accountname') || null,
  myTeam: localStorage.getItem('myteam') || null,
  setToken: () => {},
  setAccountname: () => {},
  setMyTeam: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [accountname, setAccountname] = useState(
    localStorage.getItem('accountname') || null
  );
  const [myTeam, setMyTeam] = useState(localStorage.getItem('myteam') || null);

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        accountname,
        setAccountname,
        myTeam,
        setMyTeam,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
