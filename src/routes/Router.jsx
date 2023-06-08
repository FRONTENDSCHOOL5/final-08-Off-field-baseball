import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import JoinProfile from '../pages/Join/JoinProfile';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/joinprofile' element={<JoinProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
