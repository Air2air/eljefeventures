import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { dotData1, dotData2 } from "../../data/dot";
import Dot from "./../DotChart/dot";
import "./styles.scss";

const DotList = (props) => {
  const [active, setActive] = useState(0);

  const textButton1 = "Last 12 months";
  const textButton2 = "Current quarter";


  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };


  /*----- DATA ------*/

  let data;

  if (active === 0) {
    data = dotData1;
  } else {
    data = dotData2;
  }

  const dotRow = data.map((item, i) => (
    <Col key={item.id} xs={4} sm={4} md={2} className="px-1">
      <Dot
        i={i}
        direction={item.direction}
        name={item.name}
        arrow={item.arrow}
        countEnd={item.count}
        variants={variants}
      />
    </Col>
  ));


  return (
    <>
      <div className="dot-list-wrapper mb-5">
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
        <Row className="dot-wrapper px-0">{dotRow}</Row>
      </div>
    </>
  );
};

export default DotList;
