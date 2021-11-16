import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

const LeadersStatSmall = (props) => (
  <div className="flex"  align="center" fontSize="1em" h="26px" >
    <div>{props.currPlace}</div>
    <div className="flex"  justify="center" align="center" mx={4}>
      {props.currPlace > props.prevPlace ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
          <div color="red" px={1}>
            {props.prevPlace}
          </div>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
          <div color="green" px={1}>
            {props.prevPlace}
          </div>
        </>
      )}
    </div>
    <div color="gray.500" w="25%" isTruncated maxWidth="25%">
      {props.userName}
    </div>
    <div color="gray.500" mx={4} isTruncated maxWidth="50%">
      {props.description}
    </div>
  </div>
);

const LeadersStatLarge = (props) => (
  <div className="flex"  justify="space-between" align="center" h="30px" mb={2} px={6} fontSize="1.1em">
    <div w="24px">{props.currPlace}</div>
    <div className="flex"  justify="center" align="center" mx={2} w="30px">
      {props.currPlace > props.prevPlace ? (
        <>
          <GoTriangleDown style={{ color: "red", fontSize: ".7em" }} />
          <div color="red" px={1}>
            {props.prevPlace}
          </div>
        </>
      ) : (
        <>
          <GoTriangleUp style={{ color: "green", fontSize: ".7em" }} />
          <div color="green" px={1}>
            {props.prevPlace}
          </div>
        </>
      )}
    </div>
    <div color="gray.500" w="160px" maxWidth="160px" isTruncated>
      {props.userName}
    </div>
    <div color="gray.500" maxWidth="200px" isTruncated>
      {props.description}
    </div>
    <FaChevronRight />
  </div>
);

export const DisplayLeadersSmall = () => {
  return (
    <>
      <LeadersStatSmall
        currPlace={1}
        prevPlace={4}
        userName="Soldotna"
        description="Reduced Tech to 10%.  Added positions in commodities"
      />
      <LeadersStatSmall
        currPlace={2}
        prevPlace={1}
        userName="Air2air"
        description="Added 12% UBS to portfolio from Vanguard. "
      />
      <LeadersStatSmall
        currPlace={3}
        prevPlace={1}
        userName="Chataqua7"
        description="Added rare earth minerals to portfolio, reducing exposure to Chinese inflation"
      />
      <LeadersStatSmall
        currPlace={4}
        prevPlace={7}
        userName="DefinanceBlock"
        description="Exited positions in homebuilders and mortgage"
      />
    </>
  );
};

export const DisplayLeadersLarge = () => {
  return (
    <>
      <LeadersStatLarge
        currPlace={1}
        prevPlace={4}
        userName="Soldotna"
        description="Reduced Tech to 10%.  Added positions in commodities"
      />
      <LeadersStatLarge
        currPlace={2}
        prevPlace={1}
        userName="Air2air"
        description="Added 12% UBS to portfolio from Vanguard. "
      />
      <LeadersStatLarge
        currPlace={3}
        prevPlace={1}
        userName="Chataqua7"
        description="Added rare earth minerals to portfolio, reducing exposure to Chinese inflation"
      />
      <LeadersStatLarge
        currPlace={4}
        prevPlace={7}
        userName="DefinanceBlock"
        description="Exited positions in homebuilders and mortgage"
      />
      <LeadersStatLarge
        currPlace={5}
        prevPlace={4}
        userName="ArmchairGeneral"
        description="Reduced exposure within the insurance sector"
      />
      <LeadersStatLarge
        currPlace={6}
        prevPlace={13}
        userName="LaterAlligator"
        description="What this guy did recently"
      />
    </>
  );
};
