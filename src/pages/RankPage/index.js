import React from "react";
import { Flex, Container, Link, Fade } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import Rank from "../../components/Rank";

const RankPage = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Fade in offsetY="100px">
          <Flex my={4} color="gray.600" align="center">
            <Link fontSize="xl" mr={2} fontWeight="500" href="/rank">
              My Ranking
            </Link>
          </Flex>
        </Fade>
        <Rank />
      </Container>
    </>
  );
};

export default RankPage;
