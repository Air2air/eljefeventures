import React from "react";
import { Flex, Link, Fade } from "@chakra-ui/react";

const Breadcrumb = (props) => {
  // parentName = ""
  // parentLink = ""
  // activeName = ""

  return (
    <>
      <Fade in offsetY="100px">
        <Flex my={4} align="center">
          {props.parentName &&
            `<Link
            fontSize="xl"
            mr={2}
            fontWeight="500"
            color="gray.400"
            href=${props.parentLink}
          >
            ${props.parentName}
          </Link>
          <FaChevronRight size=".7em" color="gray.400" />`}

          <Link fontSize="xl" mx={2} fontWeight="500" color="gray.700" href="#">
            {props.activeName}
          </Link>
        </Flex>
      </Fade>
    </>
  );
};

export default Breadcrumb;
