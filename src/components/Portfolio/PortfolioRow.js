import React from "react";
import { Flex, Text, Stat, StatArrow } from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const PortfolioRow = props => {
  return (
    <>
      <Flex p={4} bg="gray.200" flexDirection="column">
        <Flex h="100px" mx={7} align="center">
          <Flex w={150} align="center" justify="start">
            <Stat w="30px">
              {props.portfolioTotalBasis > props.portfolioTotalValue ? (
                <StatArrow fontSize="24px" type="decrease" />
              ) : (
                <StatArrow fontSize="2em" type="increase" />
              )}
            </Stat>
            <Text fontSize="3xl">
              <NumberFormat
                value={props.pctGain}
                displayType={"text"}
                decimalScale={3}
                allowNegative={true}
                prefix={
                  props.portfolioTotalBasis > props.portfolioTotalValue
                    ? "-"
                    : "+"
                }
              />
            </Text>
            <Text fontSize="xl" color="gray.500" px={1}>
              %
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PortfolioRow;
