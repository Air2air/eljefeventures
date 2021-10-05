import React from "react";
import logo from "./../../images/text_logo.svg";
import { motion } from "framer-motion";
import "./styles.scss";

const HomePage = () => {
  return (
    <>
      <div className="full-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="logo-div"
        >
          <img className="logo" src={logo} alt="El Jefe Ventures" />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
