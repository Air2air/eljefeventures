import React from "react";
import { Container, Row } from "react-bootstrap";
import Minidash from "../../components/Minidash";
import Chart from "../../components/Chart";

const Service = () => {
  return (
    <>
      <div className="top-padding" />
      <Container>
        <Row>
          <Minidash title="Summary" />
          <Chart chartType="bar" title="Allocation" study="allocation" />
          <Chart chartType="line" title="Yield" study="yield" />
        </Row>
      </Container>
    </>
  );
};

export default Service;
