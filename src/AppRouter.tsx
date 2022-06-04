import React, { Suspense } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const OldLogin = React.lazy(() => import('./forms/OldLogin'));
const LoginForm = React.lazy(() => import('./forms/LoginForm'));
const ForgotPass = React.lazy(() => import('./forms/ForgotPass'));
const RegistrationForm = React.lazy(() => import('./forms/RegistrationForm'));




const AppRouter:React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/users/login" element={<LoginForm />} />
          <Route path="/user/old_login" element={<OldLogin />} />
          <Route path="/password/reset" element={<ForgotPass />} />
          <Route path="/users/registration" element={<RegistrationForm />} />
          
          <Route index  element={<Home />} />
          
        </Routes>
        </Suspense>
    );
};

export default AppRouter;