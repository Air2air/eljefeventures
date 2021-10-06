import { Center, Text } from "@chakra-ui/react";
import { activity } from "../../data/activity";

export const DisplayActivitySmall = (props) => {
  return (
    <>
      {activity.slice(0, props.slice).map((item) => (
        <Center h="50px" key={item.id}>

          <Text isTruncated maxWidth="100%" key={item.id}>
          <div className="caption">{item.date}</div>
            {item.description}
          </Text>
        </Center>
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
