import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { dotData1, dotData2 } from "../../data/dot";
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

const Minidot = (props) => {

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


  const dotitems = data.map((item, i) => (
    <Col key={item.id} xs={4} sm={4} md={2} className="px-1">
      <motion.div
        custom={i}
        animate="visible"
        variants={variants}
        className={`dot-panel mb-1 d-flex flex-column align-items-center ${item.direction}`}
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
      <div className="dot-component-wrapper mb-5">
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
              className={active ? "btn  mr-2 " : "btn mr-2 active"}
              onClick={() => setActive(0)}
            >
              {textButton2}
            </Button>
          </div>
        </div>
        <Row className="dot-wrapper px-0">{dotitems}</Row>
      </div>
    </>
  );
};

export default Minidot;
