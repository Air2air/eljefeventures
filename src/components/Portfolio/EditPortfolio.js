import React, { useState, useEffect } from "react";

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

const EditPortfolio = (props) => {
  const initialPortfolioEdit = {
    id: props.id,
    portName: props.portName,
    portValue: props.portValue,
    portBasis: props.portBasis,
    dateStart: props.dateStart,
    dateEnd: props.dateEnd,
  };
  const [currentPortfolio, setCurrentPortfolio] =
    useState(initialPortfolioEdit);

  const [submitted, setSubmitted] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();


  const getPortfolio = (id) => {
    PortfolioDataService.get(id)
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

  const updatePortfolio = () => {
    PortfolioDataService.update(currentPortfolio.id, currentPortfolio)
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
      <Button colorScheme="green" onClick={onOpen}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
              </div>
            ) : (
              <form>
                <FormControl id="portName">
                  <FormLabel>PortName</FormLabel>
                  <Input
                    w={200}
                    type="text"
                    className="form-control"
                    id="portName"
                    required
                    value={currentPortfolio.portName}
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
                    value={currentPortfolio.portValue}
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
                    value={currentPortfolio.portBasis}
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
                    value={currentPortfolio.dateStart}
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
                    value={currentPortfolio.dateEnd}
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
            <Button colorScheme="green" onClick={updatePortfolio}>
              Submit Edits
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPortfolio;
