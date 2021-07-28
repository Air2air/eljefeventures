import React from "react";
import { Container } from "react-bootstrap";
import Minidash from "../../components/Minidash";
// import { proxy } from 'valtio'
import Chart from "../../components/Chart";

// const loginState = proxy({ isLoggedIn: 0 });



const Service = () => {
  return (
    <>
      <Container>
        <Minidash title="Snapshot" />
        <Chart chartType="bar" title="Allocation" study="allocation" />
        <Chart chartType="line" title="Yield" study="yield" />
      </Container>
    </>
  );
};

export default Service;
