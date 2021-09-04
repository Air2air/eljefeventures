import React from "react";
import {
  Box,
  Center,
  Button,
  Collapse,
  Flex,
  Text,
  Stat,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const PortfolioRow = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex onClick={onToggle} direction="column">
        <Flex h="80px" mb={3} px={5} align="center" _hover={{ bg: "gray.200" }}>
          <Flex w={150} align="center" justify="start">
            <Stat w="10px">
              {props.portfolioTotalBasis > props.portfolioTotalValue ? (
                <StatArrow fontSize="xl" type="decrease" />
              ) : (
                <StatArrow fontSize="xl" type="increase" />
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

        <Collapse in={isOpen}>
          <Center h="200px" p={3} pt={0}>
            Stats about this portfolio
          </Center>
        </Collapse>
      </Flex>
    </>
  );
};

export default PortfolioRow;
