import React, { useState } from "react";
import { motion } from "framer-motion";
import { transitionDuration } from "./../../animations/animations";
import { Button } from "react-bootstrap";
import { dotData1, dotData2 } from "../../data/dot";
import Dot from "./../Dot";
import "./styles.scss";

const DotChart = (props) => {
  const [active, setActive] = useState(0);

  const textButton1 = "Last 12 months";
  const textButton2 = "Current quarter";

  /*----- DATA ------*/

  let data;

  if (active === 0) {
    data = dotData1;
  } else {
    data = dotData2;
  }

  const dotColumn = data.map((item, i) => (
    <>
      <div key={item.id} className="dot-column-outer">
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: -item.count * 6 }}
          exit={{ translateY: 0 }}
          transition={{ ease: "easeInOut", duration: transitionDuration * 5 }}
          className="dot-column-inner"
        >
          <div className="dot-default" />
          <div className="dot-default" />
          <Dot
            key={item.id}
            i={i}
            direction={item.direction}
            name={item.name}
            arrow={item.arrow}
            countEnd={item.count}
          />
          <div className="dot-default" />
          <div className="dot-default" />
        </motion.div>
      </div>
    </>
  ));

  return (
    <>
      <div className="dot-chart-wrapper mb-5">
        <div className="dot-header d-flex align-items-center justify-content-between">
          <h4>{props.title}</h4>
          <div>
            <Button
              className={active ? "btn mr-2 active" : "btn mr-2"}
              onClick={() => setActive(1)}
            >
              {textButton1}
            </Button>
            <Button
              className={active ? "btn mr-2 " : "btn mr-2 active"}
              onClick={() => setActive(0)}
            >
              {textButton2}
            </Button>
          </div>
        </div>
        <div className="dot-wrapper px-0">
          <div className="centerline" />
          {dotColumn}
          <div className="dot-wrapper-gradient">
            <div className="upper" />
            <div className="middle" />
            <div className="lower" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DotChart;
