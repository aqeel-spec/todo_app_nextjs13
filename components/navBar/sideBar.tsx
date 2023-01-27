import React from "react";
import {
  Button,
  Checkbox,
  Circle,
  Grid,
  GridItem,
  HStack,
  Stack,
  StackProps,
  Text,
  VStack,
  Heading,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

function sideBar() {
  return (
    <GridItem
      area={"nav"}
      bg="rgba(229, 229, 229, 0.49)"
      h="500px"
      w="230px"
      border="1px solid rgba(0, 0, 0, 0.1)"
      borderRadius="5px"
      zIndex="auto"
    >
      <HStack as="ul" pl="13px" pt="45px">
        <Circle size="20px" bg="#D9D9D9" color="white" />
        <Button colorScheme="teal" variant="link" pl="25px">
          <Link href="/work">Work</Link>
        </Button>
      </HStack>
      <HStack as="ul" pl="13px" pt="45px">
        <Circle size="20px" bg="rgba(58, 107, 111, 0.63)" color="white" />
        <Button colorScheme="teal" variant="link" pl="25px">
          <Link href="/study">Study</Link>
        </Button>
      </HStack>
      <HStack as="ul" pl="13px" pt="45px">
        <Circle size="20px" bg="rgba(110, 170, 33, 0.74)" color="white" />
        <Button colorScheme="teal" variant="link" pl="25px">
          <Link href="/entertainment">Entertainment</Link>
        </Button>
      </HStack>
      <HStack as="ul" pl="13px" pt="45px">
        <Circle size="20px" bg="rgba(187, 189, 69, 0.64)" color="white" />
        <Button colorScheme="teal" variant="link" pl="25px">
          <Link href="/coding">Coding</Link>
        </Button>
      </HStack>
      <HStack as="ul" pl="13px" pt="45px">
        <Circle size="20px" bg="rgba(189, 69, 112, 0.6)" color="white" />
        <Button colorScheme="teal" variant="link" pl="25px">
          <Link href="/family">Family</Link>
        </Button>
      </HStack>
      <Stack as="ul" pl="13px" pt="78px">
        <Checkbox colorScheme="green" defaultChecked pl="15px">
          Hide done tasks
        </Checkbox>
      </Stack>
    </GridItem>
  );
}

export default sideBar;
