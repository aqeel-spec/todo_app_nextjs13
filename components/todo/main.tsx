"use client";

import React, { useState, useEffect } from "react";
import { TodoModel } from "@/interfaces/module";
import { Checkbox, VStack, useToast } from "@chakra-ui/react";
import {
  useDisclosure,
  Stack,
  Button,
  Text,
  Box,
  Grid,
  Circle,
  Heading,
  AlertDialog,
  GridItem,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogOverlay,
  Input,
  Textarea,
  SimpleGrid,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AddIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import Logo from "../logo";
import SideBar from "../navBar/sideBar";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  //reload router on every submission
  const router = useRouter();

  //  user input
  const [comments, setComments] = useState<TodoModel[]>([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [checked, setChecked] = useState(false);

  const toast = useToast();
  const successAlert = () =>
    toast({
      title: "Congratutaion!, dear",
      description: "You have one more work to do.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  const deletedAlert = () =>
    toast({
      title: "Deleted Seccessfully",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

  // const [id, setId] = useState(null);
  // get data from api
  const fetchComments = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setComments(data);
  };
  //         POST req for +add from submission
  const submitComment = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const res = await fetch(`/api/todos`, {
      method: "POST",
      body: JSON.stringify({ title, des, checked }),
      headers: {
        "content-Type": "application/json",
      },
    });
    await fetchComments();
    await successAlert();
    const resData = await res.json();
    console.log(resData);
    setTitle("");
    setDes("");
    setChecked(false);
  };
  // delete data from api
  const handleDelete = async (commentId: any) => {
    await fetch(`/api/todos/${commentId}`, {
      method: "DELETE",
    });
    fetchComments();
    deletedAlert();
  };
  //const handleUpdate = async () => {}
  useEffect(() => {
    fetchComments();
  }, []);

  ///////////////////////////////////////////////////

  // ///////////////////////////////////////////////////

  return (
    <Stack>
      <Stack>
        <SimpleGrid
          columns={2}
          minChildWidth="120px"
          spacingX="40px"
          pt="24px"
          pl="27px"
        >
          <Box as={Logo} />
          <Box h="80px" textAlign="center" pt="20px">
            <Button
              color="#4E4F1D"
              bg="green.100"
              textAlign="center"
              pr="30px"
              onClick={onOpen}
            >
              <AddIcon h="15px" w="20px" />
              <Text h="20px" w="20px">
                Add
              </Text>
            </Button>
          </Box>
        </SimpleGrid>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Enter your today task</AlertDialogHeader>
            <AlertDialogCloseButton />
            <Stack pl="20px" pr="20px">
              <Text as="h2">Please enter your title</Text>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Text as="h2">Please enter your description</Text>
              <Textarea value={des} onChange={(e) => setDes(e.target.value)} />
            </Stack>

            <AlertDialogFooter>
              <Stack onClick={onClose}>
                <Button onClick={submitComment}>Submit</Button>
              </Stack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Stack>

      {/* <Button onClick={fetchComments}>Load data</Button> */}

      <Grid
        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        pl="20px"
      >
        <SideBar />

        <GridItem pl="100px" area={"main"}>
          <SimpleGrid
            columns={2}
            spacingX="20px"
            spacingY="20px"
            minChildWidth="120px"
            pr="20px"
          >
            {comments.map((comment) => {
              return (
                <Box
                  // as='li'
                  key={comment.id}
                  // pt="17px"
                  pl="15px"
                  //h="fit-content"
                  pb={"20px"}
                  w="auto"
                  bg="rgba(197, 206, 129, 0.29)"
                  borderRadius="10px"
                  color={"Black"}
                  border="1px solid rgba(0, 0, 0, 0.1)"
                >
                  <HStack justifyContent={"end"}>
                    <EditIcon
                      onClick={() =>
                        toast({
                          title: "Sorry!, there is a backend issue with api.",
                          description: "Sorry there is problem with edit page",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        })
                      }
                    />
                    <CloseButton onClick={() => handleDelete(comment.id)} />
                  </HStack>
                  <Heading fontSize="xl">{comment.title}</Heading>
                  <p>{comment.des}</p>

                  <GridItem display={"flex"}>
                    <HStack as="ul" pt="15px">
                      <Circle
                        size="20px"
                        bg="rgba(58, 107, 111, 0.63)"
                        color="white"
                      />
                      <Circle
                        size="20px"
                        bg="rgba(187, 189, 69, 0.64)"
                        color="white"
                      />
                      <Circle
                        size="20px"
                        bg="rgba(189, 69, 112, 0.6)"
                        color="white"
                      />
                    </HStack>
                  </GridItem>
                </Box>
              );
            })}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default Main;
/*

      <Stack>
        <SimpleGrid
          columns={2}
          minChildWidth="120px"
          spacingX="40px"
          pt="24px"
          pl="27px"
        >
          <Box as={Logo} />
          <Box h="80px" textAlign="center" pt="20px">
            <Button
              color="#4E4F1D"
              bg="green.100"
              textAlign="center"
              pr="30px"
              onClick={onOpen}
            >
              <AddIcon h="15px" w="20px" />
              <Text h="20px" w="20px">
                Add
              </Text>
            </Button>
          </Box>
        </SimpleGrid>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Enter your today task</AlertDialogHeader>
            <AlertDialogCloseButton />
            <Stack pl="20px" pr="20px">
              <Text as="h2">Please enter your title</Text>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Text as="h2">Please enter your description</Text>
              <Textarea value={des} onChange={(e) => setDes(e.target.value)} />
            </Stack>

            <AlertDialogFooter>
              <Stack onClick={onClose}>
                <Button onClick={submitComment}>Submit</Button>
              </Stack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Stack>
*/
