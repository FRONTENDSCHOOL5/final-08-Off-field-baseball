import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import JoinProfile from '../pages/Join/JoinProfile';
import Upload from '../pages/Upload/Upload';
import Feed from '../pages/Feed/Feed';
import Post from '../pages/Upload/Post';
import Profile from '../pages/Profile/Profile';
import ProductUpload from '../pages/Product/ProductUpload';
import Error404 from '../pages/Error404/Error404';
import ChatList from '../pages/ChatPage/ChatList/ChatList';
import ChatRoom from '../pages/ChatPage/ChatRoom/ChatRoom';
import FollowList from '../pages/FollowList/FollowList';
import Search from '../pages/Search/Search';

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
        <Route path='/profile/:accountname' element={<Profile />} />
        <Route path='/profile/:accountname/:type' element={<FollowList />} />
        <Route path='/productupload' element={<ProductUpload />} />
        <Route path='/search' element={<Search />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='/chatList' element={<ChatList />} />
        <Route path='/chatRoom' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}
