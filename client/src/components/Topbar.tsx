import { Box, HStack } from "@chakra-ui/layout";
import {
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  MdCategory,
  MdEditNote,
  MdEnergySavingsLeaf,
  MdEqualizer,
  MdMenu,
  MdMenuBook,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

type TopbarProps = {};

const DropMenu = () => {
  const navigate = useNavigate();

  return (
    <Box pos="absolute" right={"50px"}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="menu"
          color="white"
          icon={<MdMenu />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<MdCategory />} onClick={() => navigate("/game")}>
            Jouer
          </MenuItem>
          <MenuItem icon={<MdEqualizer />} onClick={() => navigate("/scores")}>
            Tableaux des scores
          </MenuItem>
          <MenuItem
            icon={<MdEditNote />}
            onClick={() => navigate("/contribute")}
          >
            Contribuer
          </MenuItem>
          <MenuItem icon={<MdMenuBook />} onClick={() => navigate("/mentions")}>
            Mentions légales
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

const Topbar: React.FC<TopbarProps> = ({}) => {
  return (
    <Box
      h="80px"
      bg="#15b32a"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      p="50px"
    >
      <Heading color="white">
        <HStack>
          <Text>PlantaQwizz</Text>
          <MdEnergySavingsLeaf />
        </HStack>
      </Heading>
      <DropMenu />
    </Box>
  );
};

export default Topbar;
