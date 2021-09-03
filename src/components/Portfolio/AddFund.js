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
      <Accordion allowToggle bg="gray.300" _hover={{ bg: "gray.350" }}>
        <AccordionItem>
          <AccordionButton align="center" px={9} height="60px">
            <Text fontSize="lg">+ Add a Fund</Text>
            <Spacer />
            <FaPlus fontSize="1em" />
          </AccordionButton>
          <AccordionPanel>
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
                <Flex justifyContent="flex-end">
                  <Button colorScheme="green" onClick={savePortfolio}>
                    Add Fund
                  </Button>
                </Flex>
              </form>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AddFund;
