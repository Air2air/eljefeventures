import React, { useState } from "react";

import {
  div,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  useDisclosure,
} from "@emotion/react";
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
      <div mb={3} bg="gray.50" _hover={{ bg: "gray.100" }} align="center">
        <div className="flex"  h="60px" px={5} align="center" justify="flex-end" onClick={onToggle}>
          <div fontSize="lg" mr={3}>Add a Fund</div>
          <FaPlus fontSize=".9em" />
        </div>
        <div in={isOpen}>
          <div p={3} pt={0}>
            <form>
              <div className="flex"  h="90px">
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
              </div>
              <div className="flex"  justifyContent="space-between">
                <Button colorScheme="red" onClick={onToggle}>
                  Cancel
                </Button>
                <Button colorScheme="green" onClick={saveNewFund}>
                  Add Fund
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFund;
