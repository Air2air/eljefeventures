import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import {
  ButtonGroup,
  Center,
  Container,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioStat from "../components/Stat";
import AddPortfolio from "../components/AddPortfolio";
import EditPortfolio from "../components/EditPortfolio";

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

  const CurrentPortfolio = (props) => {
    return (
      <Center mb={5} bg="blue.100" height="180px">
        <h4>{props.title}</h4>
        <Center h="100%">
          <PortfolioStat
            title={props.title}
            symbol={props.symbol}
            shares={props.shares}
            portValue={props.portValue}
            pctGain={props.pctGain}
          />
        </Center>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="red" variant="outline" onClick={deletePortfolio}>
            Delete
          </Button>

          <EditPortfolio
            id={currentPortfolio.id}
            title={currentPortfolio.title}
            symbol={currentPortfolio.symbol}
            shares={currentPortfolio.shares}
            portValue={currentPortfolio.portValue}
            pctGain={currentPortfolio.pctGain}
          />

          <Button colorScheme="blue" variant="outline" onClick={refreshList}>
            Default
          </Button>
        </ButtonGroup>
      </Center>
    );
  };

  return (
    <>
      <Container maxW="container.lg">
        <Heading>Portfolios List</Heading>
        <Text p={10}>
          Manages my portfolios. Manage symbols and allocations.
        </Text>
        {currentPortfolio ? (
          <CurrentPortfolio
            title={currentPortfolio.title}
            symbol={currentPortfolio.symbol}
            shares={currentPortfolio.shares}
            portValue={currentPortfolio.portValue}
            pctGain={currentPortfolio.pctGain}
          />
        ) : (
          <Center mb={5} bg="gray.200" height="180px">
            <Center h="100%">
              <PortfolioStat
                title="All Portfolios"
                symbol="concat symbols"
                shares="sum shares"
                portValue="2300546"
                pctGain="12"
              />
            </Center>
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
                  bg={index === currentIndex ? "blue.100" : "gray.200"}
                  height="120px"
                  onClick={() => setActivePortfolio(portfolio, index)}
                  key={index}
                >
                  <PortfolioStat
                    title={portfolio.title}
                    symbol={portfolio.symbol}
                    shares={portfolio.shares}
                    portValue={portfolio.portValue}
                    pctGain={portfolio.pctGain}
                  />
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
