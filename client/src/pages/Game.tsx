import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

const Game: React.FC = () => (
  <Box
    pos={"absolute"}
    h="100%"
    w="100%"
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Heading pos="absolute" top={"20px"} right={"20px"}>
      <HStack>
        <Text>0</Text>
        <FaFire />
      </HStack>
    </Heading>
    <VStack alignItems={"center"}>
      <Heading mb="40px">Question ?</Heading>
      <Button w="300px" p="30px" borderRadius={"30px"} tabIndex={1}>
        Choix 1
      </Button>
      <Button w="300px" p="30px" borderRadius={"30px"} tabIndex={2}>
        Choix 2
      </Button>
      <Button w="300px" p="30px" borderRadius={"30px"} tabIndex={3}>
        Choix 3
      </Button>
      <Button w="300px" p="30px" borderRadius={"30px"} tabIndex={4}>
        Choix 4
      </Button>
    </VStack>
  </Box>
);

export default Game;
