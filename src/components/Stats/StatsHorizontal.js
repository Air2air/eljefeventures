import React from "react";
import { Center, Flex, Stat, StatArrow, Text } from "@chakra-ui/react";
import NumberFormat from "react-number-format";

const StatsHorizontal = (props) => {
  const pctGain = props.portBasis / props.portValue;

  return (
    <>
      <Flex w={100} mr={10} justify="start">
        <Stat w="20px">
          {props.portBasis > props.portValue ? (
            <StatArrow type="decrease" />
          ) : (
            <StatArrow type="increase" />
          )}
        </Stat>
        <Text fontSize="xl">
          <NumberFormat
            value={pctGain}
            displayType={"text"}
            decimalScale={3}
            suffix={"%"}
            allowNegative={true}
            prefix={props.portBasis > props.portValue && "-"}
          />
        </Text>
      </Flex>
      <Flex w={180} mr={5}>
        <Text fontSize="md" mr={2} color="gray.500">Gain/Loss:</Text>
        <NumberFormat
          value={props?.portValue - props?.portBasis}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Flex>
      <Flex w={160} mr={5}>
        <Text fontSize="md" mr={2} color="gray.500">
          Current:
        </Text>
        <NumberFormat
          value={props?.portValue}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Flex>
    </>
  );
};

export default StatsHorizontal;
