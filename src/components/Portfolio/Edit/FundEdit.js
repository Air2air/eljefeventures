import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../../api/elJefeApi";

import {
  div,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  useDisclosure,
} from "@emotion/react";

const EditFund = (props) => {

  const toast = useToast();

  const initialPortfolioEdit = {
    fundName: props.fundName,
    fundValue: props.fundValue,
    fundBasis: props.fundBasis,
  };

  const [fundToEdit, setCurrentPortfolio] =
    useState(initialPortfolioEdit);

  const getPortfolio = (id) => {
    ElJefeAPI.get(id)
      .then((response) => {
        setCurrentPortfolio(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPortfolio(props.id);
  }, [props.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPortfolio({ ...fundToEdit, [name]: value });
  };

  const deletePortfolio = () => {
    ElJefeAPI.remove(props.id)
      .then((response) => {
        console.log(response.data);
        toast({
          title: "Deleted",
          description: "You removed " + fundToEdit.fundName + ".",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updatePortfolio = () => {
    ElJefeAPI.update(fundToEdit.id, fundToEdit)
      .then((response) => {
        console.log(response.data);
        toast({
          title: "Updated",
          description: "You updated " + fundToEdit.fundName + ".",
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
      <div p={3} pt={0}>
        <form>
          <div className="flex"  h="90px">
            <FormControl id="fundName" mr={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                className="form-control"
                id="fundName"
                value={fundToEdit.fundName}
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
                value={fundToEdit.fundBasis}
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
                value={fundToEdit.fundValue}
                onChange={handleInputChange}
                name="fundValue"
                color="gray.600"
                bg="gray.100"
                _hover={{ color: "gray.900", bg: "white" }}
              />
            </FormControl>
          </div>
          <div className="flex"  justifyContent="space-between">
            <Button colorScheme="red" onClick={deletePortfolio}>
              Delete
            </Button>
            <Button colorScheme="green" onClick={updatePortfolio}>
              Submit Edits
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditFund;
