import React from "react";
import { activity } from "../../data/activity";

export const DisplayActivitySmall = (props) => {
  return (
    <>
      {activity.slice(0, props.slice).map((item) => (
        <div
          className="flex"
          align="center"
          justify="flex-start"
          fontSize="1em"
          h="26px"
        >
          <div>{props.currPlace}</div>
          <div className="caption">{item.date}</div>
          <div
            color="gray.500"
            justify="flex-start"
            fontSize={["12px", "16px", "18px"]}
            isTruncated
          >
            {item.description}
          </div>
        </div>
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
