import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { DisplayButton } from "./Button";

const RankStat = ({ currVal, prevVal, places }) => (
  <div className="flex"  justify="center" align="center" fontSize="4em">
    <div className="flex"  justify="center" align="center">
      {currVal > prevVal ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".5em" }} />
          <div color="red" fontSize={[".7em", ".8em", ".9em"]}>
            {currVal - prevVal}{" "}
          </div>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".5em" }} />
          <div color="green" fontSize={[".7em", ".8em", ".9em"]}>
            {currVal - prevVal}{" "}
          </div>
        </>
      )}
    </div>

    <div
      px={["2", "2", "4"]}
      fontSize={[".5em", ".6em", ".7em"]}
      color="gray.500"
    >
      to
    </div>
    <div px={1} color="gray.500" fontSize=".6em">
      #
    </div>
    <div fontSize={[".7em", ".8em", ".9em"]}>{currVal} </div>
    <div color="gray.500" fontSize={["20px", ".7em", ".7em"]}>
      /
    </div>
    <div color="gray.500" fontSize={[".7em", ".8em", ".9em"]}>
      {places}
    </div>
  </div>
);

export const DisplayRankSmall = (props) => {
  return (
    <>
      <RankStat
        currVal={props.currVal}
        prevVal={props.prevVal}
        places={props.places}
      />
    </>
  );
};

export const DisplayRankLarge = (props) => {
  return (
    <>
      <RankStat
        currVal={props.currVal}
        prevVal={props.prevVal}
        places={props.places}
      />
      <DisplayButton count={0} influence="me" />
      <DisplayButton count={2} influence="others" />
      <DisplayButton count={4} influence="external" />
    </>
  );
};
