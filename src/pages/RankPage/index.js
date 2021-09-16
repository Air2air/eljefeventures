import React from "react";
import NavBar from "../../components/NavBar/Header";
import Breadcrumb from "../../components/Breadcrumb";
import RankSimple from "../../components/Rank/Simple";

const RankPage = (props) => {
  return (
    <>
      <NavBar />
      <Breadcrumb
        parentLink={props.parentLink}
        parentName={props.parentName}
        activeName={props.pageName}
      />
      <RankSimple />
    </>
  );
};

export default RankPage;
