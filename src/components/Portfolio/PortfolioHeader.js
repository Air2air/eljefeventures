import React from "react";
import {
  Center,
  Collapse,
  Flex,
  Text,
  Stat,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const PortfolioHeader = (props) => {
  const pctGain =
    ((props.portfolioTotalValue - props.portfolioTotalBasis) /
      props.portfolioTotalValue) *
    100;

  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex onClick={onToggle} direction="column">
        <Flex h="80px" mb={3} px={5} align="center" _hover={{ bg: "gray.200" }}>
          <Flex w={170} pr={1}>
            <Flex w="16px" align="center">
              <Stat>
                {props.portfolioTotalBasis > props.portfolioTotalValue ? (
                  <StatArrow type="decrease" />
                ) : (
                  <StatArrow type="increase" />
                )}
              </Stat>
            </Flex>
            <Flex w={140} mr={10} align="center" justify="center">
              <Text fontSize="3xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={2}
                  allowNegative={true}
                />
              </Text>
              <Text color="gray.500" px={1}>
                {" "}
                %
              </Text>
            </Flex>
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              {props?.portfolioTotalBasis > props?.portfolioTotalValue
                ? "LOSS:"
                : "GAIN:"}
            </Text>
            <Text fontSize="xl">
              <NumberFormat
                value={props?.portfolioTotalValue - props?.portfolioTotalBasis}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Text>
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              VALUE:
            </Text>
            <Text fontSize="xl">
              <NumberFormat
                value={props?.portfolioTotalValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </Text>
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              BASIS:
            </Text>
            <Text fontSize="xl">
              <NumberFormat
                value={props?.portfolioTotalBasis}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />{" "}
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

export default PortfolioHeader;