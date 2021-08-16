import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

const Performance = () => {
  return (
    <>
      <Header authState="LoggedIn" />
      <Container>
        <Chart chartType="line" title="Performance" study="yield" />
        <Chart chartType="bar" title="Allocations" study="yield" />
      </Container>
      <Footer />
    </>
  );
};

export default Performance;
