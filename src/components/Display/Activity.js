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
      >
        {activity.slice(0, props.slice).map((item) => (
          <div key={item.id}>
            <span className="caption">{item.date}&nbsp;</span>&nbsp;
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
        height="100%"
        pb={9}
        justifyContent="space-evenly"
        flexDirection="column"
      >
        {activity.slice(0, props.slice).map((item) => (
          <div key={item.id}>
            <span className="caption">{item.date}&nbsp;</span>&nbsp;
            {item.description}
          </div>
        ))}
      </Flex>
    </>
  );
};
