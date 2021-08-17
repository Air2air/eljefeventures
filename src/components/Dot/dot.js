import React from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./styles.scss";

const Dot = (props, i) => {
    
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      custom={i}
      animate="visible"
      variants={variants}
      className={`dot-panel mb-2 d-flex flex-column align-items-center ${props.direction}`}
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
    </motion.div>
  );
};

export default Dot;
