import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
