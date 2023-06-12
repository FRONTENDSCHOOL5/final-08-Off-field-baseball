import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import JoinProfile from '../pages/Join/JoinProfile';
import Feed from '../pages/Feed/Feed';
import Profile from '../pages/Profile/Profile';
import ProductUpload from '../pages/product/ProductUpload';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/joinprofile' element={<JoinProfile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/productupload' element={<ProductUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
