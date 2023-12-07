import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Router = lazy(() => import("@pages/Router"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <Router />
    </Suspense>
  </StrictMode>,
);
