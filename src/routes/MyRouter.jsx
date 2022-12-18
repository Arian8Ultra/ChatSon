import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/Loading";
// import App from "../App";
// import HomePage from "../pages/Home/HomePage";
// import LoginPage from "../pages/Login/LoginPage";
// import SignInPage from "../pages/Login/SignInPage";
// import SignUpPage from "../pages/Login/SignUpPage";
// import MyChatsPage from "../pages/MyChats/MyChatsPage";
// import ProfilePage from "../pages/Profile/ProfilePage";
// import TrendingsPage from "../pages/Trendings/TrendingsPage";

export default function MyRouter() {
  const App = lazy(() => import("../App"));
  const HomePage = lazy(() => import("../pages/Home/HomePage"));
  const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
  const SignInPage = lazy(() => import("../pages/Login/SignInPage"));
  const SignUpPage = lazy(() => import("../pages/Login/SignUpPage"));
  const MyChatsPage = lazy(() => import("../pages/MyChats/MyChatsPage"));
  const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));
  const TrendingsPage = lazy(() => import("../pages/Trendings/TrendingsPage"));

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LoginPage />}>
          <Route path='' element={<SignInPage />} />
          <Route path='SignIn' element={<SignInPage />} />
          <Route path='SignUp' element={<SignUpPage />} />
        </Route>

        <Route path='App' element={<App />}>
          <Route path='Home' element={<HomePage />} />
          <Route path='Trendings' element={<TrendingsPage />} />
          <Route path='MyChats' element={<MyChatsPage />} />
          <Route path='Profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
