import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { dashData1, dashData2 } from "./../../data/minidash";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import "./styles.scss";

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

const Minidash = (props) => {

  const [active, setActive] = useState(0);

  const textButton1 = "vs. previous period";
  const textButton2 = "vs. Benchmark";



  /*----- DATA ------*/

  let data;

  if (active === 0) {
    data = dashData1;
  } else {
    data = dashData2;
  }




  const dashitems = data.map((item, i) => (
    <Col key={item.id}>
      <motion.div
        custom={i}
        animate="visible"
        variants={variants}
        className={`minidash-panel d-flex flex-column align-items-center ${item.direction}`}
      >
        <div className="title d-flex align-items-end">{item.name}</div>
        <div className="value d-flex">
          <div className="arrow d-flex align-items-center justify-content-end mr-2">
            {item.arrow === "up" && <BsFillCaretUpFill size=".7em" />}
            {item.arrow === "down" && <BsFillCaretDownFill size=".7em" />}
          </div>
          <div className="count">
          <CountUp start={0} end={item.count} delay={2} duration={.1}/>
            <span className="percent ml-1">%</span>
          </div>
        </div>
      </motion.div>
    </Col>
  ));

  return (
    <>
      <div className="minidash-component-wrapper px-4 mb-5">
        <div className="minidash-header d-flex align-items-center justify-content-between">
          <h4>{props.title}</h4>
          <div>
            <Button
              className={active ? "btn mr-2 active" : "btn mr-2"}
              onClick={() => setActive(1)}
            >
              {textButton1}
            </Button>
            <Button
              className={active ? "btn  mr-2 " : "btn mr-2 active"}
              onClick={() => setActive(0)}
            >
              {textButton2}
            </Button>
          </div>
        </div>
        <Row className="minidash-wrapper">{dashitems}</Row>
      </div>
    </>
  );
};

export default Minidash;
