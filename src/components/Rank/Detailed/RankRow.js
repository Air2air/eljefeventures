import React from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Box, Flex, Stat, StatArrow, Text, Spacer } from "@chakra-ui/react";
import { FaUser, FaChevronRight } from "react-icons/fa";

const RankRow = (props) => {
  const history = useHistory();
  const handleOnClick = () => history.push("/portfolio");

  const gainAmt = props.fundValue - props.fundBasis;
  const pctGain = ((props.fundValue - props.fundBasis) / props.fundValue) * 100;

  return (
    <>
      <Box
        mb={3}
        bg={props.isUser === "true" ? "gray.500" : "gray.50"}
        color={props.isUser === "true" ? "gray.50" : "gray.800"}
        _hover={
          props.isUser === "true" ? { bg: "gray.600" } : { bg: "gray.200" }
        }
        align="center"
        onClick={handleOnClick}
      >
        <Flex h="70px" px={5} align="center">
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
          <Text
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              {props?.fundBasis > props?.fundValue ? "LOSS:" : "GAIN:"}
            </Text>
            <NumberFormat
              value={gainAmt}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props?.fundBasis > props?.fundValue ? "$" : "+$"}
            />
          </Flex>

          <Flex w={170} px={3} mr={5} align="center">
            <Text
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              VALUE:
            </Text>

            <NumberFormat
              value={props.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </Flex>

          <Flex px={3} align="center">
          <Text
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              <FaUser />
            </Text>
            <Text fontSize="md">{props.fundName}</Text>
          </Flex>

          <Spacer />
          <FaChevronRight />
        </Flex>
      </Box>
    </>
  );
};

export default RankRow;
