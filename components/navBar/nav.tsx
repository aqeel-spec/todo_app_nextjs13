import Logo from "../logo";
import {  Box, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// spacing 22px
export const NavBar = () => {
  return (
    <HStack spacing="800px" pt="24px" pl="27px">
      <Box as={Logo} h="18px" w="22px" />
      <AddIcon h="20px" w="20px" color="#4E4F1D" />
    </HStack>
  );
};
