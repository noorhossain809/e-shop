import React, { Suspense } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

const AppRouter:React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route index  element={<Home />} />
          
        </Routes>
        </Suspense>
    );
};

export default AppRouter;