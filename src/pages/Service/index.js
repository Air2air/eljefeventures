import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ChartBar from "./../../components/ChartBar";
import ChartPie from "./../../components/ChartPie";
import { allocations } from "./../../data/allocations.js";
import { bardata1, bardata2 } from "./../../data/bardata.js";

const Service = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="top-padding" />
      <Container>
        <Row>
          <h1>Allocation</h1>
          <ChartBar dataSource={toggle === 1 ? bardata1 : bardata2} />
          <button onClick={() => setToggle(1)}>Toggle State</button>
          <button onClick={() => setToggle(0)}>Toggle State</button>
          <ChartPie dataSource={allocations} />
        </Row>
      </Container>
    </>
  );
};

export default Service;
