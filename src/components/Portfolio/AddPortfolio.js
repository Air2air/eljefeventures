import React, { useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import PortfolioDataService from "../../api/elJefeApi";

const AddPortfolio = () => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

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

    PortfolioDataService.create(data)
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
      <Button onClick={onOpen}>Add New</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
              </div>
            ) : (
              <form>
                <FormControl id="fundName">
                  <FormLabel>Name</FormLabel>
                  <Input
                    w={200}
                    type="text"
                    className="form-control"
                    id="fundName"
                    required
                    value={portfolio.fundName}
                    onChange={handleInputChange}
                    name="fundName"
                  />
                </FormControl>

                <FormControl id="fundValue">
                  <FormLabel>$ Value</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="fundValue"
                    required
                    value={portfolio.fundValue}
                    onChange={handleInputChange}
                    name="fundValue"
                  />
                </FormControl>

                <FormControl id="fundBasis">
                  <FormLabel>$ Basis</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="fundBasis"
                    required
                    value={portfolio.fundBasis}
                    onChange={handleInputChange}
                    name="fundBasis"
                  />
                </FormControl>

                <FormControl id="fundStart">
                  <FormLabel>Start Date: </FormLabel>
                  <Input
                    type="date"
                    className="form-control"
                    id="fundStart"
                    value={portfolio.fundStart}
                    onChange={handleInputChange}
                    name="fundStart"
                  />
                </FormControl>

                <FormControl id="fundEnd">
                  <FormLabel>End Date: </FormLabel>
                  <Input
                    type="date"
                    className="form-control"
                    id="fundEnd"
                    value={portfolio.fundEnd}
                    onChange={handleInputChange}
                    name="fundEnd"
                  />
                </FormControl>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={savePortfolio}>
              Submit Portfolio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPortfolio;
