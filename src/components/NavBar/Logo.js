import React from "react";
import { Box } from "@chakra-ui/react";
import LogoImage from "./../../images/jalapeno.svg";

export default function Logo(props) {
  return (
    <Box {...props}>
      <img src={LogoImage} alt="El Jefe" style={{ width: 30 }} />
    </Box>
  );
}
