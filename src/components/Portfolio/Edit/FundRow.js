import React from "react";
import EditFund from "./FundEdit";
import {
  div,
  Collapse,
  Flex,
  Spacer,
  Stat,
  StatArrow,
  Text,
  useDisclosure,
} from "@emotion/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import NumberFormat from "react-number-format";

const FundRow = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  const pctGain = ((props.fundValue - props.fundBasis) / props.fundValue) * 100;

  return (
    <>
      <div mb={3} bg="gray.50" _hover={{ bg: "gray.200" }} align="center">
        <div className="flex" 
          h="70px"
          px={5}
          align="center"
          onClick={onToggle}
          style={{ opacity: isOpen ? 0.3 : 1 }}
        >
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
            <div fontSize="sm" mr={2} color="gray.500">
              {props?.fundBasis > props?.fundValue ? "LOSS:" : "GAIN:"}
            </div>
            <NumberFormat
              value={props?.fundValue - props?.fundBasis}
              displayType={"text"}
              thousandSeparator={true}
              prefix={props?.fundBasis > props?.fundValue ? "$" : "+$"}
            />
          </div>

          <div className="flex"  w={170} px={3} mr={5} align="center">
            <div fontSize="sm" mr={2} color="gray.500">
              VALUE:
            </div>
            <NumberFormat
              value={props?.fundValue}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          </div>

          <div className="flex"  px={3} align="center">
            <div fontSize="sm" mr={3} color="gray.300">
              <HiChartBar />
            </div>
            <div fontSize="md">{props.fundName}</div>
          </div>

          <Spacer />
          {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </div>
        <div in={isOpen}>
          <EditFund
            id={props?.id}
            fundName={props?.fundName}
            fundValue={props?.fundValue}
            fundBasis={props?.fundBasis}
          />
        </div>
      </div>
    </>
  );
};

export default FundRow;
