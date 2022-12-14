import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/Loading";
import ProfileSettings from "../pages/Profile/ProfileSettings";
// import App from "../App";
// import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import SignInPage from "../pages/Login/SignInPage";
// import HeadToHeadPage from "../pages/HeadToHead/HeadToHeadPage";
// import SignUpPage from "../pages/Login/SignUpPage";
// import MyChatSonPage from "../pages/MyChatSon/MyChatSonPage";
// import ProfilePage from "../pages/Profile/ProfilePage";
// import TrendingsPage from "../pages/Trendings/TrendingsPage";

export default function MyRouter() {
  const App = lazy(() => import("../App"));
  const HomePage = lazy(() => import("../pages/Home/HomePage"));
  const SignUpPage = lazy(() => import("../pages/Login/SignUpPage"));
  const MyChatSonPage = lazy(() => import("../pages/MyChatSon/MyChatSonPage"));
  const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));
  const TrendingsPage = lazy(() => import("../pages/Trendings/TrendingsPage"));
  const HeadToHeadPage = lazy(() => import("../pages/HeadToHead/HeadToHeadPage"));

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes location={location} key={location.pathname}>

        {/* login page routes */}
        <Route path='/' element={<LoginPage />}>
          <Route path='' element={<SignInPage />} />
          <Route path='SignIn' element={<SignInPage />} />
          <Route path='SignUp' element={<SignUpPage />} />
        </Route>

        {/* App routes */}
        <Route path='App' element={<App />}>
          <Route path='Home' element={<HomePage />} />
          <Route path='HeadToHead' element={<HeadToHeadPage />} />
          <Route path='Trendings' element={<TrendingsPage />} />
          <Route path='MyChatSon' element={<MyChatSonPage />} />
          <Route path='Profile/:Username' element={<ProfilePage />} />
          <Route path='Profile Settings' element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
