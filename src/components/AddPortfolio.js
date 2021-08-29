import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import PortfolioDataService from "../api/apiService";

const AddPortfolio = () => {
  const initialPortfolioState = {
    id: null,
    title: "",
    symbol: "",
    shares: "",
    dateStart: "",
    dateEnd: "",
  };
  const [portfolio, setPortfolio] = useState(initialPortfolioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPortfolio({ ...portfolio, [name]: value });
  };

  const savePortfolio = () => {
    var data = {
      title: portfolio.title,
      symbol: portfolio.symbol,
      shares: portfolio.shares,
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
      <Container maxW="container.lg">
      <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Add a Portfolio
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className="btn btn-success" onClick={newPortfolio}>
                    Add Another
                  </button>
                </div>
              ) : (
                <div>
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

                  <button onClick={savePortfolio} className="btn btn-success">
                    Submit Portfolio
                  </button>
                </div>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
};

export default AddPortfolio;
