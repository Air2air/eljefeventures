import React from "react";
import { Flex, Container, Link, Fade } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import Portfolio from "../../components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Fade in offsetY="100px">
          <Flex my={4} align="center">
            <Link
              fontSize="xl"
              mr={2}
              fontWeight="500"
              color="gray.400"
              href="/rank"
            >
              My Ranking
            </Link>
            <FaChevronRight size=".7em" color="gray.400" />
            <Link
              fontSize="xl"
              mx={2}
              fontWeight="500"
              color="gray.700"
              href="#"
            >
              Kubelschiff Industries
            </Link>
          </Flex>
        </Fade>
        <Portfolio />
      </Container>
    </>
  );
};

export default PortfolioPage;
