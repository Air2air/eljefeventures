
import NumberFormat from "react-number-format";


export const DisplayChange = (props) => {
  // label, val, prevVal
  return (
    <>
      <div w="100%">
        <div className="flex"  px={3} mr={5} align="center">
          <div fontSize="sm" mr={2}>
            {props.label}
          </div>
          <div fontSize="3xl">{props.val}</div>
        </div>
      </div>
    </>
  );
};



export const DisplayStat = (label, val) => {
  return (
    <>
      <div w="100%" color="white" bg="gray.500">
        <div className="flex"  align="center">
          <div fontSize="sm" mr={2}>
            {label}
          </div>
          <NumberFormat
            value={val}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </div>
      </div>
    </>
  );
};


