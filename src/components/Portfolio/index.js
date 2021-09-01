import React, { useState, useEffect } from "react";
import PortfolioDataService from "./../../api/apiService";
import {
  Center,
  Flex,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioRow from "./PortfolioRow";
import AddPortfolio from "./AddPortfolio";
import StatsVertical from "./../Stats/StatsVertical";
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
        <Center h="160" w="100%">
          <StatGroup>
            <Stat>
              <StatLabel>My Portfolios</StatLabel>
              <StatNumber>
                <NumberFormat
                  value={portfolioTotalValue}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </StatNumber>
              <StatHelpText>
                {pctGain > 0 ? (
                  <StatArrow type="increase" />
                ) : (
                  <StatArrow type="decrease" />
                )}
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"%"}
                />
              </StatHelpText>
            </Stat>
          </StatGroup>

          <AddPortfolio />
        </Center>

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
