import { Center, Flex, Text, Stat } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import ChartBar from "../Chart/Bar";
import { activity } from "../../data/activity";

export const DisplayActivitySmall = (props) => {
  const slice = 0;
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
  const slice = 0;
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
