import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FaFire } from "react-icons/fa";

import data from "@assets/data.json";

type QuestionData = {
  question: string;
  res: string[];
  points: number[];
  type: string;
  info: string;
};

const Game: React.FC = () => {
  const [points, setPoints] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const qData: QuestionData[] = useMemo(() => data as any, []);

  return (
    <Box
      pos={"absolute"}
      h="100%"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      userSelect={"none"}
    >
      <Heading pos="absolute" top={"20px"} right={"20px"}>
        <HStack>
          <Text>{points}</Text>
          <FaFire />
        </HStack>
      </Heading>
      <VStack alignItems={"center"}>
        <Heading mb="40px" w="60%" textAlign={"center"}>
          {qData[index].question}
        </Heading>
        {qData[index].res.map((item, i) => (
          <Button
            w="300px"
            p="30px"
            borderRadius={"30px"}
            tabIndex={1}
            key={i}
            onClick={() => {
              setPoints(points + qData[index].points[i]);
              setIndex(index + 1 >= qData.length ? 0 : index + 1);
            }}
          >
            {item}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Game;
