import React from "react";
import NumberFormat from "react-number-format";
import { Box, Flex, Stat, StatArrow, Text, Spacer } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const ReportRow = (props) => {

  const gainAmt = props.fundValue - props.fundBasis;
  const pctGain = ((props.fundValue - props.fundBasis) / props.fundValue) * 100;

  return (
    <>
      <Box mb={3} bg="gray.50" _hover={{ bg: "gray.200" }} align="center">
        <Flex h="70px" px={5} align="center">
          <Flex w={180} pr={3} mr={10} justify="start">
            <Flex w="16px" align="center">
              <Stat>
                {props?.fundBasis > props?.fundValue ? (
                  <StatArrow type="decrease" />
                ) : (
                  <StatArrow type="increase" />
                )}
              </Stat>
            </Flex>

            <Flex w={140} mr={10} align="center" justify="center">
              <Text fontSize="xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={3}
                  allowNegative={true}
                />
              </Text>
              <Text color="gray.500" px={1}>
                {" "}
                %
              </Text>
            </Flex>
          </Flex>

          <Flex w={140} px={3} mr={5}>
            <Text fontSize="md" mr={2} color="gray.500">
              {props?.fundBasis > props?.fundValue ? "Loss:" : "Gain:"}
            </Text>
            <NumberFormat
              value={gainAmt}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props?.fundBasis > props?.fundValue ? "$" : "+$"}
            />
          </Flex>

          <Flex w={140} px={3} mr={5}>
            <Text fontSize="md" mr={2} color="gray.500">
              Value:
            </Text>
            <NumberFormat
              value={props.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>

          <Flex px={3} mr={5}>
            <Text fontSize="md">{props.fundName}</Text>
          </Flex>

          <Spacer />
          <FaChevronRight />
        </Flex>
      </Box>
    </>
  );
};

export default ReportRow;