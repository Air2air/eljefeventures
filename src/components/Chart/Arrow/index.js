import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { dotData1, dotData2 } from "../../../data/dot";
import Arrow from "./arrow";
import "./index.scss";

const ArrowChart = (props) => {
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

  const arrowColumn = data.map((item, i) => (

      <div key={item.id} className="arrow-column-outer">
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: -item.count * 6 }}
          exit={{ translateY: 0 }}
          transition={{ ease: "easeInOut", duration: 0.1 * 5 }}
          className="arrow-column-inner"
        >
          <div className="arrow-default" />
          <div className="arrow-default" />
          <Arrow
            key={item.id}
            i={i}
            direction={item.direction}
            name={item.name}
            arrow={item.arrow}
            countEnd={item.count}
          />
          <div className="arrow-default" />
          <div className="arrow-default" />
        </motion.div>
      </div>
  ));

  return (
    <>
      <div className="arrow-chart-wrapper mb-5">
        <div className="arrow-header d-flex align-items-center justify-content-between">
          <h4>{props.fundName}</h4>
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
        <div className="arrow-wrapper">
          <div className="centerline" />
          {arrowColumn}
          <div className="arrow-wrapper-gradient">
            <div className="upper" />
            <div className="middle" />
            <div className="lower" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrowChart;
