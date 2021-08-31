import React, { useState, useEffect } from "react";
import PortfolioDataService from "../api/apiService";
import {
  Stack,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TiChevronLeft } from "react-icons/ti";
import StatsHorizontal from "../components/Stats/StatsHorizontal";
import AddPortfolio from "../components/Portfolio/AddPortfolio";
import EditPortfolio from "../components/Portfolio/EditPortfolio";
import StatsVertical from "../components/Stats/StatsVertical";

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
      <Flex mb={2} bg="gray.100" h="160" justify>
        <Center h="100%" w="33%">
          <StatsHorizontal
            id={props.id}
            portName={props.portName}
            portValue={props.portValue}
            portBasis={props.portBasis}
            startDate={props.startDate}
            endDate={props.endDate}
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
              portName={currentPortfolio.portName}
              portValue={currentPortfolio.portValue}
              portBasis={currentPortfolio.portBasis}
              startDate={currentPortfolio.startDate}
              endDate={currentPortfolio.endDate}
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
            id={currentPortfolio.id}
            portName={currentPortfolio.portName}
            portValue={currentPortfolio.portValue}
            portBasis={currentPortfolio.portBasis}
            startDate={currentPortfolio.startDate}
            endDate={currentPortfolio.endDate}
          />
        ) : (
          <>
            <Flex mb={2} bg="gray.300" h="160" justify>
              <Center h="100%" w="33%">
                <StatsVertical
                  portName="All Portfolios"
                  portValue="2300546"
                  portBasis="123456"
                  startDate="start Date"
                  endDate="end Date"
                />
              </Center>
              <Center h="100%" w="33%" />
              <Center h="100%" w="33%">
                <AddPortfolio />
              </Center>
            </Flex>
          </>
        )}

        {portfolios &&
          portfolios.map((portfolio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.1, delay: i * 0.1 }}
            >
              <Flex
                align="center"
                mb={2}
                px={7}
                bg={i === currentIndex ? "gray.100" : "gray.300"}
                height="60px"
                onClick={() => setActivePortfolio(portfolio, i)}
                _hover={{ bg: "gray.200" }}
                _focus={{ bg: "gray.400" }}
              >
                <StatsHorizontal
                  portName={portfolio.portName}
                  portValue={portfolio.portValue}
                  portBasis={portfolio.portBasis}
                  startDate={portfolio.startDate}
                  endDate={portfolio.endDate}
                />
              </Flex>
            </motion.div>
          ))}
      </Container>
    </>
  );
};

export default PortfoliosList;
