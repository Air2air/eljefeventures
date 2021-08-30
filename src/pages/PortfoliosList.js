import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import {
  ButtonGroup,
  Center,
  Container,
  SimpleGrid,
  Heading,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AddPortfolio from "../components/AddPortfolio";

const PortfoliosList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePortfolios();
    setActivePortfolio(0);
  }, []);

  const retrievePortfolios = () => {
    PortfolioDataService.getAll()
      .then((response) => {
        setPortfolios(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePortfolios();
    setCurrentPortfolio(null);
    setCurrentIndex(-1);
  };

  const setActivePortfolio = (portfolio, index) => {
    setCurrentPortfolio(portfolio);
    setCurrentIndex(index);
  };

  const deletePortfolio = () => {
    PortfolioDataService.remove(currentPortfolio.id)
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Container maxW="container.lg">
        <Heading>Portfolios List</Heading>

        {currentPortfolio ? (
          <Center mb={5} bg="blue.100" height="180px">
            <h4>{currentPortfolio.title}</h4>

            <div>
              <label>
                <strong>Symbol:</strong>
              </label>
              {currentPortfolio.symbol}
            </div>

            <div>
              <label>
                <strong># Shares:</strong>
              </label>
              {currentPortfolio.shares}
            </div>

            <div>
              <label>
                <strong>Start Date: </strong>
              </label>
              {currentPortfolio.dateStart}
            </div>

            <div>
              <label>
                <strong>End Date: </strong>
              </label>
              {currentPortfolio.dateEnd}
            </div>
            <ButtonGroup variant="outline" spacing="6">
              <Button
                colorScheme="red"
                variant="outline"
                onClick={deletePortfolio}
              >
                Delete
              </Button>
              <Button
                colorScheme="blue"
                variant="outline"
                onClick={refreshList}
              >
                Back
              </Button>
            </ButtonGroup>
          </Center>
        ) : (
          <Center mb={5} bg="gray.200" height="180px">
            <Center bg="gold" h="100%">
              <StatGroup>
                <Stat>
                  <StatLabel>All Portfolios</StatLabel>
                  <StatNumber>$2,345,678</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </Center>

            <div>
              <label>
                <strong>Value:</strong>
              </label>
              Total value
            </div>
          </Center>
        )}
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={4} spacing={4}>
          {portfolios &&
            portfolios.map((portfolio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                <Center
                  bg="gray.200"
                  height="120px"
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActivePortfolio(portfolio, index)}
                  key={index}
                >
                  
                  {portfolio.symbol}
                  <StatGroup>
                    <Stat>
                      <StatLabel>{portfolio.title}</StatLabel>
                      <StatNumber>{portfolio.shares}</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </Center>
              </motion.div>
            ))}
        </SimpleGrid>
      </Container>

      <AddPortfolio />
    </>
  );
};

export default PortfoliosList;
