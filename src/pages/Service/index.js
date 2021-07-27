import React from "react";
import { Container, Row } from "react-bootstrap";
import ChartBar from "./../../components/ChartBar";
import ChartPie from "./../../components/ChartPie";
import { allocations } from "./../../data/allocations.js";
import { bardata } from "./../../data/bardata.js";

const Service = () => {
  return (
    <>
      <div className="top-padding" />
      <Container>
        <Row>
          <h1>Allocation</h1>
          <ChartBar dataSource={bardata} />
          <ChartPie dataSource={allocations} />
        </Row>
      </Container>
    </>
  );
};

export default Service;
