import React from "react";
import { Container, Row } from "react-bootstrap";
import ChartPie from "./../../components/ChartPie"
import {allocations} from "./../../data/allocations.js"

const Service = () => {

  return (
    <>
    <div className="top-padding" />
      <Container>
        <Row>
        <h1>Allocation</h1>
        <ChartPie dataSource={allocations} />
        </Row>
      </Container>
    </>
  );
};

export default Service;
