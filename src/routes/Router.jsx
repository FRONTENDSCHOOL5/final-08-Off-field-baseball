import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import JoinProfile from '../pages/Join/JoinProfile';
import Upload from '../pages/Upload/Upload';
import Feed from '../pages/Feed/Feed';
import Post from '../pages/Upload/Post';
import Profile from '../pages/Profile/Profile';
import ProductUpload from '../pages/product/ProductUpload';
import FollowList from '../pages/FollowList/FollowList';
import Error404 from '../pages/Error404/Error404';
import ChatList from '../pages/ChatList/ChatList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join/profile' element={<JoinProfile />} />
        <Route path='/post/upload' element={<Upload />} />
        <Route path='/post/*' element={<Post />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/productupload' element={<ProductUpload />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='/chatList' element={<ChatList />} />
        <Route path='/follow' element={<FollowList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
