import { Flex } from "@chakra-ui/react";
import { activity } from "../../data/activity";

export const DisplayActivitySmall = (props) => {
  return (
    <>
      <Flex
        height="100%"
        pb={9}
        justifyContent="space-evenly"
        flexDirection="column"
        fontSize="1em"
      >
        {activity.slice(0, props.slice).map((item) => (
          <div key={item.id}>
            <div className="caption">{item.date}</div>
            {item.description}
          </div>
        ))}
      </Flex>
    </>
  );
};

export const DisplayActivityLarge = (props) => {
  return (
    <>
      <Flex
        justify="space-between"
        height="100%"
        justifyContent="space-evenly"
        flexDirection="column"
        fontSize="1.1em"
      >
        {activity.slice(0, props.slice).map((item) => (
          <div key={item.id}>
            <div className="caption">{item.date}</div>
            {item.description}
          </div>
        ))}
      </Flex>
    </>
  );
};
