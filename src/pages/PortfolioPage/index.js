import React from "react";
import NavBar from "../../components/NavBar/Header";
import Breadcrumb from "../../components/Breadcrumb";
import PortfolioSimple from "../../components/Portfolio/Simple";

const PortfolioPage = (props) => {

  return (
    <>
      <NavBar />
      <Breadcrumb
        parentLink={props.parentLink}
        parentName={props.parentName}
        activeName={props.pageName}
      />
      <PortfolioSimple />
    </>
  );
};

export default PortfolioPage
