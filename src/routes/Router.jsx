import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import JoinProfile from '../pages/Join/JoinProfile';
import Feed from '../pages/Feed/Feed';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/joinprofile' element={<JoinProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
