import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import {
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
    setActivePortfolio(1);
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
          <Center p={5} mb={2} bg="blue" height="180px">
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

            <Button
              className="badge badge-danger mr-2"
              onClick={deletePortfolio}
            >
              Delete
            </Button>
          </Center>
        ) : (
          <Center>
            <br />
            <p>Please click on a Portfolio...</p>
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
                  bg="tomato"
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
