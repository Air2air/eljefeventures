import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import {
  ButtonGroup,
  Center,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TiChevronLeft } from "react-icons/ti";
import PortfolioStat from "../components/Stat";
import AddPortfolio from "../components/Portfolio/AddPortfolio";
import EditPortfolio from "../components/Portfolio/EditPortfolio";

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
      <Flex mb={5} bg="gray.100" h="160" justify>
        <Center h="100%" w="33%">
          <PortfolioStat
            title={props.title}
            symbol={props.symbol}
            shares={props.shares}
            portValue={props.portValue}
            pctGain={props.pctGain}
          />
        </Center>
        <Center h="100%" w="33%" onClick={refreshList}>
          <TiChevronLeft size="5em" color="gray.200" />
        </Center>
        <Center h="100%" w="33%">
          <ButtonGroup spacing="6">
            <Button colorScheme="red" onClick={deletePortfolio}>
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
          </ButtonGroup>
        </Center>
      </Flex>
    );
  };

  return (
    <>
      <Container maxW="container.lg">
        <Heading>My Portfolios</Heading>
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
          <>
            <Flex mb={5} bg="gray.300" h="160" justify>
              <Center h="100%" w="33%">
                <PortfolioStat
                  title="All Portfolios"
                  symbol="concat symbols"
                  shares="sum shares"
                  portValue="2300546"
                  pctGain="12"
                />
              </Center>
              <Center h="100%" w="33%" />
              <Center h="100%" w="33%">
                <AddPortfolio />
              </Center>
            </Flex>
          </>
        )}
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={3} spacing={4}>
          {portfolios &&
            portfolios.map((portfolio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                <Center
                  bg={index === currentIndex ? "gray.100" : "gray.300"}
                  height="120px"
                  onClick={() => setActivePortfolio(portfolio, index)}
                  key={index}
                  _hover={{ bg: "gray.200" }}
                  _focus={{ bg: "gray.400" }}
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
    </>
  );
};

export default PortfoliosList;
