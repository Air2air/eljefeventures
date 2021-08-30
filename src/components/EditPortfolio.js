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

import PortfolioDataService from "../api/apiService";

const EditPortfolio = (props) => {
  const initialPortfolioState = {
    id: props.id,
    title: props.title,
    symbol: props.symbol,
    shares: props.shares,
    pctGain: props.pctGain,
    dateStart: props.dateStart,
    dateEnd: props.dateEnd,
  };
  const [currentPortfolio, setCurrentPortfolio] = useState(
    initialPortfolioState
  );

  //const [submitted, setSubmitted] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //const [message, setMessage] = useState("");

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
            <form>
              <FormControl id="title">
                <FormLabel>Title</FormLabel>
                <Input
                  w={200}
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={currentPortfolio.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </FormControl>

              <FormControl id="symbol">
                <FormLabel>Symbol</FormLabel>
                <Input
                  type="text"
                  className="form-control"
                  id="symbol"
                  required
                  value={currentPortfolio.symbol}
                  onChange={handleInputChange}
                  name="symbol"
                />
              </FormControl>

              <FormControl id="shares">
                <FormLabel># Shares</FormLabel>
                <Input
                  type="text"
                  className="form-control"
                  id="shares"
                  required
                  value={currentPortfolio.shares}
                  onChange={handleInputChange}
                  name="shares"
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

              <FormControl id="pctGain">
                <FormLabel>% Gain</FormLabel>
                <Input
                  type="text"
                  className="form-control"
                  id="pctGain"
                  value={currentPortfolio.pctGain}
                  onChange={handleInputChange}
                  name="pctGain"
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
                  value={currentPortfolio.dateStart}
                  onChange={handleInputChange}
                  name="dateEnd"
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={updatePortfolio}>
              Submit Edited Portfolio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPortfolio;
