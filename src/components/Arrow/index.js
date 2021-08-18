import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./styles.scss";

const rotateDuration = 0.1;
const countUpDuration = 0.2;

const Arrow = (props) => {


const [arrowState, setArrowState] = useState("good");

  return (
    <>
      <div
        className={`arrow-panel d-flex flex-column align-items-center ${props.direction}`}
      >
        {props.direction === arrowState && (
          <>
            <div className="indicator-section d-flex justify-content-center align-items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: rotateDuration,
                }}
                className="arrow good"
              />
              <div className="count good d-flex justify-content-center align-items-center">
                <CountUp
                  start={0}
                  end={props.countEnd}
                  delay={1}
                  duration={countUpDuration}
                />
                <span className="percent ml-1">%</span>
              </div>
            </div>
            <div className="title-section d-flex justify-content-center align-items-center">
              {props.name}
            </div>
          </>
        )}

        {props.direction === "unchanged" && (
          <>
            <div className="title-section d-flex justify-content-center align-items-center">
              {props.name}
            </div>
            <div className="indicator-section d-flex justify-content-center align-items-center">
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 0 }}
                exit={{ rotateX: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: rotateDuration,
                }}
                className="arrow bad"
              />
              <div className="count unchanged d-flex justify-content-center align-items-center">
                <CountUp
                  start={0}
                  end={props.countEnd}
                  delay={1}
                  duration={countUpDuration}
                />
                <span className="percent ml-1">%</span>
              </div>
            </div>
          </>
        )}

        {props.direction === "bad" && (
          <>
            <div className="title-section d-flex justify-content-center align-items-center">
              {props.name}
            </div>
            <div className="indicator-section d-flex justify-content-center align-items-center">
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 180 }}
                exit={{ rotateX: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: rotateDuration,
                }}
                className="arrow bad"
              />
              <div className="count bad d-flex justify-content-center align-items-center">
                <CountUp
                  start={0}
                  end={props.countEnd}
                  delay={1}
                  duration={countUpDuration}
                />
                <span className="percent ml-1">%</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Arrow;
