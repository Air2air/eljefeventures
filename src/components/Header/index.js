import { Box, Center } from "@chakra-ui/react";
import LogoImage from "./../../images/jalapeno.svg";
import currentDate from "./../../utilities/date";
import "./styles.scss";

const Header = () => (
  <Center height="90px" position="relative" justifyContent="space-between">
    <Box>
      <span className="date">{currentDate()}</span>
      <h1>Today</h1>
    </Box>
    <Box className="logo">
      <img src={LogoImage} alt="El Jefe" style={{ width: 30 }} />
    </Box>
  </Center>
);

export default Header;
