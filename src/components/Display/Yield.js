import { Center, Flex, Text, Stat } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

import { activity } from "../../data/activity";

export const DisplayYieldSmall = (props) => {
  // currVal, prevVal
  return (
    <>
      <Center w="100%">
        <Flex justify="center" align="center" fontSize="4.5em">
          <Stat>
            {props.currVal > props.prevVal ? (
              <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
            ) : (
              <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
            )}
          </Stat>
          <Text>
            <NumberFormat
              value={props.currVal}
              displayType={"text"}
              decimalScale={2}
              allowNegative={true}
            />
          </Text>
          <Text fontSize="4xl" color="gray.500" px={1}>
            %
          </Text>
        </Flex>
      </Center>
    </>
  );
};

export const DisplayYieldLarge = (props) => {
  // currVal, prevVal
  return (
    <>
      <Center w="100%">
        <Flex justify="center" align="center" fontSize="4.5em">
          <Stat>
            {props.currVal > props.prevVal ? (
              <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
            ) : (
              <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
            )}
          </Stat>
          <Text>
            <NumberFormat
              value={props.currVal}
              displayType={"text"}
              decimalScale={2}
              allowNegative={true}
            />
          </Text>
          <Text fontSize="4xl" color="gray.500" px={1}>
            %
          </Text>
        </Flex>
      </Center>
    </>
  );
};
