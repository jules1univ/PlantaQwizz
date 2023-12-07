import { Suspense, lazy } from "react";

const Topbar = lazy(() => import("@components/Topbar"));

const Home = () => {
  return (
    <>
      <Suspense>
        <Topbar />
      </Suspense>
    </>
  );
};

export default Home;
