import React from "react";
import NavBar from "../../components/NavBar/Header";
import Breadcrumb from "../../components/Breadcrumb";
import RankDetail from "../../components/Rank/Detail";

const RankPageDetail = (props) => {
  return (
    <>
      <NavBar />
      <Breadcrumb
        parentLink={props.parentLink}
        parentName={props.parentName}
        activeName={props.pageName}
      />
      <RankDetail />
    </>
  );
};

export default RankPageDetail;
