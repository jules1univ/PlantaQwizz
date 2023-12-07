import Button from "@mui/joy/Button";

import { signal } from "@preact/signals";
const count = signal<number>(0);

const Home = () => {
  return (
    <>
      <Button onClick={() => count.value++}>Click me {count.value}</Button>
    </>
  );
};

export default Home;
