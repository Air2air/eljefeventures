import React from "react";
import EditFund from "./FundEdit";
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
import { HiChartBar } from "react-icons/hi";
import NumberFormat from "react-number-format";

const FundRow = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  const pctGain = ((props.fundValue - props.fundBasis) / props.fundValue) * 100;

  return (
    <>
      <Box mb={3} bg="gray.50" _hover={{ bg: "gray.200" }} align="center">
        <Flex
          h="70px"
          px={5}
          align="center"
          onClick={onToggle}
          style={{ opacity: isOpen ? 0.3 : 1 }}
        >
          <Flex w={170} pr={1}>
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
              {props?.fundBasis > props?.fundValue ? "LOSS:" : "GAIN:"}
            </Text>
            <NumberFormat
              value={props?.fundValue - props?.fundBasis}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props?.fundBasis > props?.fundValue ? "$" : "+$"}
            />
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text fontSize="sm" mr={2} color="gray.500">
              VALUE:
            </Text>
            <NumberFormat
              value={props?.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>

          <Flex px={3} align="center">
            <Text fontSize="sm" mr={3} color="gray.300">
              <HiChartBar />
            </Text>
            <Text fontSize="md">{props.fundName}</Text>
          </Flex>

          <Spacer />
          {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </Flex>
        <Collapse in={isOpen}>
          <EditFund
            id={props?.id}
            fundName={props?.fundName}
            fundValue={props?.fundValue}
            fundBasis={props?.fundBasis}
          />
        </Collapse>
      </Box>
    </>
  );
};

export default FundRow;
