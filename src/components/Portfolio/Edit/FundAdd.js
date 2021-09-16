import React, { useState } from "react";

import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ElJefeAPI from "../../../api/elJefeApi";

const AddFund = () => {
  const blankFundState = {
    id: null,
    fundName: "",
    fundValue: "",
    fundBasis: "",
  };

  const { isOpen, onToggle } = useDisclosure();
  const [fund, setNewFund] = useState(blankFundState);
  const toast = useToast();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFund({ ...fund, [name]: value });
  };

  const saveNewFund = () => {
    var data = {
      id: fund.id,
      fundName: fund.fundName,
      fundValue: fund.fundValue,
      fundBasis: fund.fundBasis,
    };

    ElJefeAPI.create(data)
      .then((response) => {
        setNewFund({
          id: response.data.id,
          fundName: response.data.fundName,
          fundValue: response.data.fundValue,
          fundBasis: response.data.fundBasis,
        });
        console.log(response.data);
        toast({
          title: "Saved!",
          description: "You've added " + fund.fundName + ".",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Box mb={3} bg="gray.50" _hover={{ bg: "gray.100" }} align="center">
        <Flex h="60px" px={5} align="center" justify="flex-end" onClick={onToggle}>
          <Text fontSize="lg" mr={3}>Add a Fund</Text>
          <FaPlus fontSize=".9em" />
        </Flex>
        <Collapse in={isOpen}>
          <Box p={3} pt={0}>
            <form>
              <Flex h="90px">
                <FormControl id="fundName" mr={4}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="fundName"
                    required
                    value={fund.fundName}
                    onChange={handleInputChange}
                    name="fundName"
                    color="gray.600"
                    bg="gray.50"
                    _hover={{ color: "gray.900", bg: "white" }}
                  />
                </FormControl>

                <FormControl id="fundBasis" mx={4}>
                  <FormLabel>$ Basis</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="fundBasis"
                    required
                    value={fund.fundBasis}
                    onChange={handleInputChange}
                    name="fundBasis"
                    color="gray.600"
                    bg="gray.50"
                    _hover={{ color: "gray.900", bg: "white" }}
                  />
                </FormControl>

                <FormControl id="fundValue" ml={4}>
                  <FormLabel>$ Value</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="fundValue"
                    value={fund.fundValue}
                    onChange={handleInputChange}
                    name="fundValue"
                    color="gray.600"
                    bg="gray.50"
                    _hover={{ color: "gray.900", bg: "white" }}
                  />
                </FormControl>
              </Flex>
              <Flex justifyContent="space-between">
                <Button colorScheme="red" onClick={onToggle}>
                  Cancel
                </Button>
                <Button colorScheme="green" onClick={saveNewFund}>
                  Add Fund
                </Button>
              </Flex>
            </form>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default AddFund;
