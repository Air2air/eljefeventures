
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { activity } from "../../data/activity";

export const DisplayActivitySmall = (props) => {
  return (
    <>
      {activity.slice(0, props.slice).map((item) => (
        <Flex align="center" justify="flex-start" fontSize="1em" h="26px">
          <Text>{props.currPlace}</Text>
          <Text className="caption" w={[, "30%", "30%", "30%"]}>
            {item.date}
          </Text>
          <Text
            color="gray.500"
            w={[, "70%", "70%", "70%"]}
            justify="flex-start"
            fontSize={["12px", "16px", "18px"]}
            isTruncated
          >
            {item.description}
          </Text>
        </Flex>
      ))}
    </>
  );
};

export const DisplayActivityLarge = (props) => {
  return (
    <>
      {activity.slice(0, props.slice).map((item) => (
        <div key={item.id}>
          <div className="caption">{item.date}</div>
          {item.description}
        </div>
      ))}
    </>
  );
};
