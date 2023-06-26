import React, { Suspense, lazy } from 'react';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../components/common/Loading';
const Login = lazy(() => import('../pages/Login/Login'));
const Join = lazy(() => import('../pages/Join/Join'));
const Upload = lazy(() => import('../pages/Upload/Upload'));
const Feed = lazy(() => import('../pages/Feed/Feed'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const ProfileEdit = lazy(() => import('../pages/Profile/ProfileEdit'));
const ProductUpload = lazy(() => import('../pages/Product/ProductUpload'));
const Error404 = lazy(() => import('../pages/Error404/Error404'));
const ChatList = lazy(() => import('../pages/ChatPage/ChatList/ChatList'));
const ChatRoom1 = lazy(() => import('../pages/ChatPage/ChatRoom/ChatRoom1'));
const ChatRoom2 = lazy(() => import('../pages/ChatPage/ChatRoom/ChatRoom2'));
const ChatRoom3 = lazy(() => import('../pages/ChatPage/ChatRoom/ChatRoom3'));
const Search = lazy(() => import('../pages/Search/Search'));
const FollowList = lazy(() => import('../pages/FollowList/FollowList'));
const Detail = lazy(() => import('../pages/Upload/Detail'));
const SplashScreen = lazy(() => import('../pages/SplashScreen/SplashScreen'));
const SplashLogin = lazy(() => import('../pages/Login/SplashLogin'));
const ProductDetail = lazy(() => import('../pages/Product/ProductDetail'));

export default function Router() {
  const { token } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/error404' element={<Error404 />} />
          <Route path='/' element={<SplashScreen />} />

          <Route element={<NonAuthRoute authenticated={token} />}>
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
            <Route
              path='/profile/:accountname/:type'
              element={<FollowList />}
            />
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
      </Suspense>
    </BrowserRouter>
  );
}
