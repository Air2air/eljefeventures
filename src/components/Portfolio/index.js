import React, { useState, useEffect } from "react";
import PortfolioDataService from "./../../api/apiService";
import { Flex, Heading, Text, Spacer, Stat, StatArrow } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioRow from "./PortfolioRow";
import AddPortfolio from "./AddPortfolio";
import NumberFormat from "react-number-format";

const PortfoliosList = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    retrievePortfolios();
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
  };

  const portfolioTotalValue = portfolios.reduce(
    (total, currentValue) => (total = total + currentValue.portValue),
    0
  );

  const portfolioTotalBasis = portfolios.reduce(
    (total, currentValue) => (total = total + currentValue.portBasis),
    0
  );

  const pctGain = (portfolioTotalValue / portfolioTotalBasis) * 10;

  return (
    <>
      <Heading>My Portfolios</Heading>
      <Text p={10}>Manages my portfolios. Manage symbols and allocations.</Text>
      <Flex p={4} bg="gray.200" flexDirection="column">
        <Flex h={20} mx={7} align="center">
          <Flex w={120}>
            <Stat w="10px">
              {portfolioTotalBasis > portfolioTotalValue ? (
                <StatArrow type="decrease" />
              ) : (
                <StatArrow type="increase" />
              )}
            </Stat>
            <Text fontSize="2xl">
              <NumberFormat
                value={pctGain}
                displayType={"text"}
                decimalScale={3}
                suffix={"%"}
                allowNegative={true}
                prefix={portfolioTotalBasis > portfolioTotalValue ? "-" : "+"}
              />
            </Text>
          </Flex>
          <Spacer />
          <AddPortfolio />
        </Flex>

        {portfolios &&
          portfolios.map((portfolio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.1, delay: i * 0.1 }}
            >
              <PortfolioRow
                i={i}
                id={portfolio.id}
                portName={portfolio.portName}
                portValue={portfolio.portValue}
                portBasis={portfolio.portBasis}
                startDate={portfolio.startDate}
                endDate={portfolio.endDate}
              />
            </motion.div>
          ))}
      </Flex>
    </>
  );
};

export default PortfoliosList;
