import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import Upload from '../pages/Upload/Upload';
import Feed from '../pages/Feed/Feed';
import Profile from '../pages/Profile/Profile';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import ProductUpload from '../pages/Product/ProductUpload';
import Error404 from '../pages/Error404/Error404';
import ChatList from '../pages/ChatPage/ChatList/ChatList';
import ChatRoom1 from '../pages/ChatPage/ChatRoom/ChatRoom1';
import ChatRoom2 from '../pages/ChatPage/ChatRoom/ChatRoom2';
import ChatRoom3 from '../pages/ChatPage/ChatRoom/ChatRoom3';
import FollowList from '../pages/FollowList/FollowList';
import Search from '../pages/Search/Search';
import Detail from '../pages/Upload/Detail';
import SplashScreen from '../pages/SplashScreen/SplashScreen';
import SplashLogin from '../pages/Login/SplashLogin';
import ProductDetail from '../pages/Product/ProductDetail';

export default function Router() {
  const { token } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/error404' element={<Error404 />} />

        <Route element={<NonAuthRoute authenticated={token} />}>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/login' element={<SplashLogin />} />
          <Route path='/login/email' element={<Login />} />
          <Route path='/join' element={<Join />} />
        </Route>

        <Route element={<AuthRoute authenticated={token} />}>
          <Route path='/home' element={<Feed />} />
          <Route path='/post/upload' element={<Upload />} />
          <Route path='/post/:id' element={<Detail />} />
          <Route path='/post/:id/edit' element={<Upload />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
          <Route path='/profile/:accountname/:type' element={<FollowList />} />
          <Route path='/product/upload' element={<ProductUpload />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/product/:id/edit' element={<ProductUpload />} />
          <Route path='/search' element={<Search />} />
          <Route path='/chat' element={<ChatList />} />
          <Route path='/chat/user1' element={<ChatRoom1 />} />
          <Route path='/chat/user2' element={<ChatRoom2 />} />
          <Route path='/chat/user3' element={<ChatRoom3 />} />
          <Route path='/follow' element={<FollowList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
