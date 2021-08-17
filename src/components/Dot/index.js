import React from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import CountUp from "react-countup";
import "./styles.scss";

const Dot = (props) => {
  return (
    <div
      className={`dot-panel d-flex flex-column align-items-center ${props.direction}`}
    >
      <div className="title d-flex align-items-end">{props.name}</div>
      <div className="value d-flex">
        <div className="arrow d-flex align-items-center justify-content-end mr-2">
          {props.arrow === "up" && <BsFillCaretUpFill size=".7em" />}
          {props.arrow === "down" && <BsFillCaretDownFill size=".7em" />}
        </div>
        <div className="count">
          <CountUp start={0} end={props.countEnd} delay={2} duration={0.1} />
          <span className="percent ml-1">%</span>
        </div>
      </div>
    </div>
  );
};

export default Dot;
