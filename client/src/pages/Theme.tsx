import { ChakraProvider } from "@chakra-ui/react";

const Theme: React.FC<{ children: any }> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Theme;
