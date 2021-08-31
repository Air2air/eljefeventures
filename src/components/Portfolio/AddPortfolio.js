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

import PortfolioDataService from "../../api/apiService";

const AddPortfolio = () => {
  const portfolioNewState = {
    id: null,
    portName: "",
    portValue: "",
    portBasis: "",
    dateStart: "",
    dateEnd: "",
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
      portName: portfolio.portName,
      portValue: portfolio.portValue,
      portBasis: portfolio.portBasis,
      dateStart: portfolio.dateStart,
      dateEnd: portfolio.dateEnd,
    };

    PortfolioDataService.create(data)
      .then((response) => {
        setPortfolio({
          id: response.data.id,
          portName: response.data.portName,
          portValue: response.data.portValue,
          portBasis: response.data.portBasis,
          dateStart: response.data.dateStart,
          dateEnd: response.data.dateEnd,
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
                <FormControl id="portName">
                  <FormLabel>Name</FormLabel>
                  <Input
                    w={200}
                    type="text"
                    className="form-control"
                    id="portName"
                    required
                    value={portfolio.portName}
                    onChange={handleInputChange}
                    name="portName"
                  />
                </FormControl>

                <FormControl id="portValue">
                  <FormLabel>$ Value</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="portValue"
                    required
                    value={portfolio.portValue}
                    onChange={handleInputChange}
                    name="portValue"
                  />
                </FormControl>

                <FormControl id="portBasis">
                  <FormLabel>$ Basis</FormLabel>
                  <Input
                    type="text"
                    className="form-control"
                    id="portBasis"
                    required
                    value={portfolio.portBasis}
                    onChange={handleInputChange}
                    name="portBasis"
                  />
                </FormControl>

                <FormControl id="dateStart">
                  <FormLabel>Start Date: </FormLabel>
                  <Input
                    type="date"
                    className="form-control"
                    id="dateStart"
                    value={portfolio.dateStart}
                    onChange={handleInputChange}
                    name="dateStart"
                  />
                </FormControl>

                <FormControl id="dateEnd">
                  <FormLabel>End Date: </FormLabel>
                  <Input
                    type="date"
                    className="form-control"
                    id="dateEnd"
                    value={portfolio.dateEnd}
                    onChange={handleInputChange}
                    name="dateEnd"
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
