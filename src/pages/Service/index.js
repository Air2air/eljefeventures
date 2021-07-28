import React from "react";
import { Container } from "react-bootstrap";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Minidash from "../../components/Minidash";
import Chart from "../../components/Chart";

const Service = () => {
  return (
    <>
    <Header authState="isLoggedIn"/>
      <Container>
        <Minidash title="Snapshot" />
        <Chart chartType="bar" title="Allocation" study="allocation" />
        <Chart chartType="line" title="Yield" study="yield" />
      </Container>
      <Footer />
    </>
  );
};

export default Service;
