import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Theme = lazy(() => import("@pages/Theme"));

const Home = lazy(() => import("@pages/Home"));
const Game = lazy(() => import("@pages/Game"));
const NoFound = lazy(() => import("@pages/NoFound"));

const Router: React.FC = () => {
  return (
    <Suspense>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </Suspense>
  );
};

export default Router;
