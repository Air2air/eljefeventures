import { Center, Flex, Text } from "@chakra-ui/react";
import NumberFormat from "react-number-format";


export const DisplayChange = (props) => {
  // label, val, prevVal
  return (
    <>
      <Center w="100%">
        <Flex px={3} mr={5} align="center">
          <Text fontSize="sm" mr={2}>
            {props.label}
          </Text>
          <Text fontSize="3xl">{props.val}</Text>
        </Flex>
      </Center>
    </>
  );
};



export const DisplayStat = (label, val) => {
  return (
    <>
      <Center w="100%" color="white" bg="gray.500">
        <Flex align="center">
          <Text fontSize="sm" mr={2}>
            {label}
          </Text>
          <NumberFormat
            value={val}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </Flex>
      </Center>
    </>
  );
};


