import { StyledEngineProvider } from "@mui/joy/styles";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@pages/Home"));

const Router = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Suspense>
        <Home />
      </Suspense>
    </StyledEngineProvider>
  );
};

export default Router;
