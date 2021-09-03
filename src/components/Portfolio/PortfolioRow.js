import React from "react";
import {
  Box,
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
        <Flex h="80px" mx={7} align="center">
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

        <Collapse in={isOpen}>
          <Box p={3} pt={0}>
            <form>
              <Flex h="90px">Stats</Flex>
              <Flex justifyContent="space-between">
                <Button colorScheme="red" onClick={onToggle}>
                  Cancel
                </Button>
              </Flex>
            </form>
          </Box>
        </Collapse>
      </Flex>
    </>
  );
};

export default PortfolioRow;
