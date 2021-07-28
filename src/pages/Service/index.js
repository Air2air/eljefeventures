import React from "react";
import { Container, Row } from "react-bootstrap";
import ChartBarComponent from "./../../components/ChartBar";
import ChartPie from "./../../components/ChartPie";
import { allocations } from "./../../data/allocations.js";

const Service = () => {
  return (
    <>
      <div className="top-padding" />
      <Container>
        <Row>
          <ChartBarComponent title="Allocation" study="allocation"/>
          <ChartPie dataSource={allocations} />
        </Row>
      </Container>
    </>
  );
};

export default Service;
