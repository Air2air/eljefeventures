import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ElJefeAPI from "../../api/elJefeApi";

const AddFund = () => {
  const portfolioNewState = {
    id: null,
    fundName: "",
    fundValue: "",
    fundBasis: "",
    fundStart: "",
    fundEnd: "",
  };

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
      fundStart: portfolio.fundStart,
      fundEnd: portfolio.fundEnd,
    };

    ElJefeAPI.create(data)
      .then((response) => {
        setPortfolio({
          id: response.data.id,
          fundName: response.data.fundName,
          fundValue: response.data.fundValue,
          fundBasis: response.data.fundBasis,
          fundStart: response.data.fundStart,
          fundEnd: response.data.fundEnd,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newPortfolio = () => {
    setPortfolio(portfolioNewState);
    setSubmitted(false);
  };

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            align="center"
            mb={2}
            px={9}
            height="60px"
            bg="gray.300"
            _hover={{ bg: "gray.400" }}
          >
            <Text fontSize="lg">+ Add a Fund</Text>
            <Spacer />
            <FaPlus fontSize="1em" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {submitted ? (
        <Center h="90px" >
        <h4>You added a new fund successfully</h4>
      </Center>
            ) : (
              <form>
                <Flex h="90px">
                  <FormControl id="fundName" mr={1}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      className="form-control"
                      id="fundName"
                      required
                      value={portfolio.fundName}
                      onChange={handleInputChange}
                      name="fundName"
                      width={220}
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl id="fundValue" mx={1}>
                    <FormLabel>$ Value</FormLabel>
                    <Input
                      type="text"
                      className="form-control"
                      id="fundValue"
                      value={portfolio.fundValue}
                      onChange={handleInputChange}
                      name="fundValue"
                      width={100}
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl id="fundBasis" mx={1}>
                    <FormLabel>$ Basis</FormLabel>
                    <Input
                      type="text"
                      className="form-control"
                      id="fundBasis"
                      required
                      value={portfolio.fundBasis}
                      onChange={handleInputChange}
                      name="fundBasis"
                      width={100}
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl id="fundStart" mx={1}>
                    <FormLabel>Start Date: </FormLabel>
                    <Input
                      type="date"
                      className="form-control"
                      id="fundStart"
                      value={portfolio.fundStart}
                      onChange={handleInputChange}
                      name="fundStart"
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl id="fundEnd" ml={1}>
                    <FormLabel>End Date: </FormLabel>
                    <Input
                      type="date"
                      className="form-control"
                      id="fundEnd"
                      value={portfolio.fundEnd}
                      onChange={handleInputChange}
                      name="fundEnd"
                      color="gray.600"
                      bg="gray.100"
                      _hover={{ color: "gray.900", bg: "white" }}
                    />
                  </FormControl>
                </Flex>
              </form>
            )}

            <Flex justifyContent="flex-end">
              <Button colorScheme="green" onClick={savePortfolio}>
                Add Fund
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AddFund;
