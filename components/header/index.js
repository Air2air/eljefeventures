import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Header.module.scss"


const Header = () => {
  return (
    <Navbar className="mb-5">
      <Container className={styles.container}>
        <Link href="/allocation">
          <motion.div
            whileHover={{ scale: 1.07}}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <AiFillHome size="2em" />
          </motion.div>
        </Link>

        <motion.div
          whileHover={{ scale: 1.03}}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.15 }}
          className="d-flex align-items-center"
        >
          <Image src="/el-jefe.svg" alt="El Jefe" width="100" height="40" />
        </motion.div>

        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            <FaUserAlt size="2em" />
          </motion.div>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
