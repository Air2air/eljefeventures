import React, { useState } from "react";
import EditFund from "./EditFund";
import {
  Box,
  Collapse,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NumberFormat from "react-number-format";

const FundRow = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  const pctGain = (props.fundValue / props.fundBasis) * 10;

  return (
    <>
      <Box mb={3} bg="gray.300" _hover={{ bg: "gray.400" }} align="center">
        <Flex
          h="50px"
          px={5}
          align="center"
          onClick={onToggle}
          style={{ opacity: isOpen ? 0.3 : 1 }}
        >
          <Flex w={180} pr={3} mr={10} justify="start">
            <Flex w="16px" align="center">
              <Stat>
                {props.fundBasis > props.fundValue ? (
                  <StatArrow type="decrease" />
                ) : (
                  <StatArrow type="increase" />
                )}
              </Stat>
            </Flex>
            <Flex w={120} mr={10} align="center" justify="center">
              <Text fontSize="xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={3}
                  allowNegative={true}
                  prefix={props.fundBasis > props.fundValue ? "- " : "+ "}
                />
              </Text>
              <Text color="gray.500" px={1}>
                {" "}
                %
              </Text>
            </Flex>
          </Flex>
          <Flex w={120} px={3} mr={5}>
            <Text fontSize="md" mr={2} color="gray.500">
              {props.fundBasis > props.fundValue ? "Loss:" : "Gain:"}
            </Text>
            <NumberFormat
              value={props?.fundValue - props?.fundBasis}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props.fundBasis > props.fundValue ? "$" : "+$"}
            />
          </Flex>
          <Flex w={120} px={3} mr={5}>
            <Text fontSize="md" mr={2} color="gray.500">
              Value:
            </Text>
            <NumberFormat
              value={props?.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>
          <Flex px={3} mr={5}>
            <Text fontSize="md">{props.fundName}</Text>
          </Flex>
          <Spacer />
          {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </Flex>
        <Collapse in={isOpen}>
          <Box p={3} pt={0}>
            <EditFund
              id={props?.id}
              fundName={props?.fundName}
              fundValue={props?.fundValue}
              fundBasis={props?.fundBasis}
            />
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default FundRow;
