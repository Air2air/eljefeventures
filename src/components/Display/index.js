import { Center, Flex, Text, Stat } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { activity } from "../../data/activity";
import "./styles.scss";

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

export const DisplayActivity = () => {
  return (
    <>
      <Flex
        height="100%"
        pb={9}
        justifyContent="space-evenly"
        flexDirection="column"
      >
        {activity.slice(0, 3).map((item) => (
          <div key={item.id}><span className="caption">{item.date}&nbsp;</span>&nbsp;{item.description}</div>
        ))}
      </Flex>
    </>
  );
};

export const DisplayRank = (props) => {
  // rankVal={9} prevVal={11} places={35}
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
          <Text>{props.currVal}</Text>
          <Text mx={1} color="gray.500">
            /
          </Text>
          <Text color="gray.500">{props.places}</Text>
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

export const DisplayYield = (props) => {
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
