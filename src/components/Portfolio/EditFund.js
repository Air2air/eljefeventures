import React, { useState, useEffect } from "react";
import ElJefeAPI from "../../api/elJefeApi";
import { Button, Center, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

const EditFund = (props) => {
  const initialPortfolioEdit = {
    id: props.id,
    fundName: props.fundName,
    fundValue: props.fundValue,
    fundBasis: props.fundBasis,
    fundStart: props.fundStart,
    fundEnd: props.fundEnd,
  };
  const [currentPortfolio, setCurrentPortfolio] =
    useState(initialPortfolioEdit);

  const [submitted, setSubmitted] = useState(false);

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
    setCurrentPortfolio({ ...currentPortfolio, [name]: value });
  };


  const [fundStart, fundStartOnChange] = useState(new Date());


  const deletePortfolio = () => {
    ElJefeAPI.remove(props.id)
      .then((response) => {
        console.log(response.data);
        //refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updatePortfolio = () => {
    ElJefeAPI.update(currentPortfolio.id, currentPortfolio)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {submitted ? (
        <Center h="90px" >
          <h4>Your edit was successful</h4>
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
                value={currentPortfolio.fundName}
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
                value={currentPortfolio.fundValue}
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
                value={currentPortfolio.fundBasis}
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
                value={currentPortfolio.fundStart}
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
                value={currentPortfolio.fundEnd}
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

      <Flex justifyContent="space-between">
        <Button colorScheme="red" onClick={deletePortfolio}>
          Delete
        </Button>
        <Button colorScheme="green" onClick={updatePortfolio}>
          Submit Edits
        </Button>
      </Flex>
    </>
  );
};

export default EditFund;
