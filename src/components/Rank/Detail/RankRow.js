
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { div, Flex, Stat, StatArrow, Text, Spacer } from "@emotion/react";
import { FaUser, FaChevronRight } from "react-icons/fa";

const RankRow = (props) => {
  const history = useHistory();
  const handleOnClick = () => history.push("/portfolio");

  const gainAmt = props.fundValue - props.fundBasis;
  const pctGain = ((props.fundValue - props.fundBasis) / props.fundValue) * 100;

  return (
    <>
      <div
        mb={3}
        bg={props.isUser === "true" ? "gray.500" : "gray.50"}
        color={props.isUser === "true" ? "gray.50" : "gray.800"}
        _hover={
          props.isUser === "true" ? { bg: "gray.600" } : { bg: "gray.200" }
        }
        align="center"
        onClick={handleOnClick}
      >
        <div className="flex"  h="70px" px={5} align="center">
          <div className="flex"  w={170} pr={1}>
            <div className="flex"  w="16px" align="center">
              <div>
                {props?.fundBasis > props?.fundValue ? (
                  <divArrow type="decrease" />
                ) : (
                  <divArrow type="increase" />
                )}
              </div>
            </div>

            <div className="flex"  w={140} mr={10} align="center" justify="center">
              <div fontSize="xl">
                <NumberFormat
                  value={pctGain}
                  displayType={"text"}
                  decimalScale={2}
                  allowNegative={true}
                />
              </div>
              <div color="gray.500" px={1}>
                {" "}
                %
              </div>
            </div>
          </div>

          <div className="flex"  w={170} px={3} mr={5} align="center">
          <div
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              {props?.fundBasis > props?.fundValue ? "LOSS:" : "GAIN:"}
            </div>
            <NumberFormat
              value={gainAmt}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props?.fundBasis > props?.fundValue ? "$" : "+$"}
            />
          </div>

          <div className="flex"  w={170} px={3} mr={5} align="center">
            <div
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              VALUE:
            </div>

            <NumberFormat
              value={props.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </div>

          <div className="flex"  px={3} align="center">
          <div
              fontSize="sm"
              mr={3}
              color={props.isUser === "true" ? "gray.300" : "gray.400"}
            >
              <FaUser />
            </div>
            <div fontSize="md">{props.fundName}</div>
          </div>

          <Spacer />
          <FaChevronRight />
        </div>
      </div>
    </>
  );
};

export default RankRow;
