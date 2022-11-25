import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import SignInPage from "../pages/Login/SignInPage";
import SignUpPage from "../pages/Login/SignUpPage";

export default function MyRouter() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<LoginPage />}>
        <Route path='' element={<SignInPage />} />
        <Route path='SignIn' element={<SignInPage />} />
        <Route path='SignUp' element={<SignUpPage />} />
      </Route>

      <Route path='App' element={<App />}>
        <Route path='' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />
      </Route>

    </Routes>
  );
}
