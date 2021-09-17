import React from "react";
import NavBar from "../../components/NavBar/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Layout from "./layout";

const LayoutPage = (props) => {

  return (
    <>
      <NavBar />
      <Breadcrumb
        parentLink={props.parentLink}
        parentName={props.parentName}
        activeName={props.pageName}
      />
      <Layout />
    </>
  );
};

export default LayoutPage
