import React from "react";

import {
  Box,
  Button,
  Collapse,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";


const Stats = () => {


  const { isOpen, onToggle } = useDisclosure();


  

  return (
    <>
      <Box mb={3} bg="gray.300" _hover={{ bg: "gray.400" }} align="center">
        <Flex h="50px" px={5} align="center" onClick={onToggle}>
          <Text fontSize="lg">Stats</Text>
          <Spacer />
          <FaPlus fontSize="1em" />
        </Flex>
        <Collapse in={isOpen}>
          <Box p={3} pt={0}>
            <form>
              <Flex h="90px">
Stats


              </Flex>
              <Flex justifyContent="space-between">
                <Button colorScheme="red" onClick={onToggle}>
                  Cancel
                </Button>
              </Flex>
            </form>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Stats;
