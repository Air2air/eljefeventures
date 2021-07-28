import React from "react";
import { Container, Row } from "react-bootstrap";
import Chart from "../../components/Chart";


const Service = () => {
  return (
    <>
      <div className="top-padding" />
      <Container>
        <Row>
          <Chart chartType="bar" title="Allocation" study="allocation"/>
          <Chart chartType="line" title="Yield" study="yield"/>
        </Row>
      </Container>
    </>
  );
};

export default Service;
