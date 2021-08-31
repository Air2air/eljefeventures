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
  const initialPortfolioState = {
    id: null,
    title: "",
    symbol: "",
    shares: "",
    pctGain: "",
    dateStart: "",
    dateEnd: "",
  };

  const [portfolio, setPortfolio] = useState(initialPortfolioState);
  const [submitted, setSubmitted] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPortfolio({ ...portfolio, [name]: value });
  };

  const savePortfolio = () => {
    var data = {
      title: portfolio.title,
      symbol: portfolio.symbol,
      shares: portfolio.shares,
      pctGain: portfolio.pctGain,
      dateStart: portfolio.dateStart,
      dateEnd: portfolio.dateEnd,
    };

    PortfolioDataService.create(data)
      .then((response) => {
        setPortfolio({
          id: response.data.id,
          title: response.data.title,
          symbol: response.data.symbol,
          shares: response.data.shares,
          pctGain: response.data.pctGain,
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
    setPortfolio(initialPortfolioState);
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
                <button className="btn btn-success" onClick={newPortfolio}>
                  Add Another
                </button>
              </div>
            ) : (
              <form>
                <FormControl id="title">
                  <FormLabel>Title</FormLabel>
                  <Input
                    w={200}
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={portfolio.title}
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
                    value={portfolio.symbol}
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
                    value={portfolio.shares}
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
                    required
                    value={portfolio.portValue}
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
                    required
                    value={portfolio.pctGain}
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
                    value={portfolio.dateStart}
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
