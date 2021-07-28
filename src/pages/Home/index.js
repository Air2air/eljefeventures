import React from "react";
import Header from "./../../components/Header";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header version="loggedOut" />
      <div className="loading">
        <div className="main"></div>
      </div>
    </>
  );
};

export default Home;
