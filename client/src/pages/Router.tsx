import React, { Suspense, lazy } from "react";
import {  } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Theme = lazy(() => import("@pages/Theme"));
const Home = lazy(() => import("@pages/Home"));

const Router: React.FC = () => {
  return (
    <Suspense>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </Suspense>
  );
};

export default Router;
