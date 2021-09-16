import React from "react";
import NavBar from "../../components/NavBar/Header";
import Breadcrumb from "../../components/Breadcrumb";
import PortfolioDetail from "../../components/Portfolio/Detail";

const PortfolioPageDetail = (props) => {
  return (
    <>
      <NavBar />
        <Breadcrumb
          parentLink={props.parentLink}
          parentName={props.parentName}
          activeName={props.pageName}
        />
        <PortfolioDetail />
    </>
  );
};

export default PortfolioPageDetail;
