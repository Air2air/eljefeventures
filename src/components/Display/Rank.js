import { Center, Flex, Text, Stat } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import ChartBar from "../Chart/Bar";
import { activity } from "../../data/activity";

export const DisplayRankSmall = (props) => {
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

export const DisplayRankLarge = (props) => {
  return (
    <>
      <div className="title-container">
        <span className="caption">{props.category}</span>
        <h2>{props.title}</h2>
      </div>
      <Flex flexDirection="column">
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
        <Flex justify="center" align="center" fontSize="4.5em">
          <h1>Due to increased performance by the leaders</h1>
          <h1>Not due to your actions</h1>
        </Flex>

        {/* <ChartBar /> */}
      </Flex>
    </>
  );
};
