import React, { useState } from "react";

import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ElJefeAPI from "../../api/elJefeApi";

const AddFund = props => {
  const portfolioNewState = {
    id: null,
    fundName: "",
    fundValue: "",
    fundBasis: "",
  };

  const { isOpen, onToggle } = useDisclosure();
  const [portfolio, setPortfolio] = useState(portfolioNewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPortfolio({ ...portfolio, [name]: value });
  };

  const savePortfolio = () => {
    var data = {
      id: portfolio.id,
      fundName: portfolio.fundName,
      fundValue: portfolio.fundValue,
      fundBasis: portfolio.fundBasis,
    };

    ElJefeAPI.create(data)
      .then((response) => {
        setPortfolio({
          id: response.data.id,
          fundName: response.data.fundName,
          fundValue: response.data.fundValue,
          fundBasis: response.data.fundBasis,
        });
        setSubmitted(true);
        onToggle(false);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Box mb={3} bg="gray.300" _hover={{ bg: "gray.400" }} align="center">
        <Flex h="50px" px={5} align="center" onClick={onToggle}>
          <Text fontSize="lg">+ Add a Fund</Text>
          <Spacer />
          <FaPlus fontSize="1em" />
        </Flex>
        <Collapse in={isOpen}>
          <Box p={3} pt={0}>
            {submitted ? (
              <Center h="90px">
                <h4>
                  You successfully added {portfolio.fundName} to your portfolio.
                </h4>
              </Center>
            ) : (
              <form>
                <Flex h="90px">
                  <FormControl id="fundName" mr={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      className="form-control"
                      id="fundName"
                      required
                      value={portfolio.fundName}
                      onChange={handleInputChange}
                      name="fundName"
                      color="gray.600"
                      bg="gray.100"
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
                      value={portfolio.fundBasis}
                      onChange={handleInputChange}
                      name="fundBasis"
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl id="fundValue" ml={4}>
                    <FormLabel>$ Value</FormLabel>
                    <Input
                      type="text"
                      className="form-control"
                      id="fundValue"
                      value={portfolio.fundValue}
                      onChange={handleInputChange}
                      name="fundValue"
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>
                </Flex>
                <Flex justifyContent="space-between">
                  <Button colorScheme="red" onClick={onToggle}>
                    Cancel
                  </Button>
                  <Button colorScheme="green" onClick={savePortfolio}>
                    Add Fund
                  </Button>
                </Flex>
              </form>
            )}
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default AddFund;
