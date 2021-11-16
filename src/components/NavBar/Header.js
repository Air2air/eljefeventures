import React from "react";

import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBardiv {...props}>
      <Logo w="100px" color={["white", "white", "gray.500", "gray.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBardiv>
  );
};

const CloseIcon = () => (
  <svg width="24" viewdiv="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <label>Close</label>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="28px"
    viewdiv="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <label>Menu</label>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <div display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <div href={to}>
      <div display="block" {...rest}>
        {children}
      </div>
    </div>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <div
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <div
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/layout">Layout</MenuItem>
        <MenuItem to="/rank">Rank</MenuItem>
        <MenuItem to="/rank-detail">Rank detail</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/portfolio-detail" isLast>
          Portfolio detail
        </MenuItem>
      </div>
    </div>
  );
};

const NavBardiv = ({ children, ...props }) => {
  return (
    <div className="flex" 
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      px={10}
      py={4}
      bg={["gray.500", "gray.500", "transparent", "transparent"]}
      color={["white", "white", "gray.500", "gray.500"]}
      {...props}
    >
      {children}
    </div>
  );
};

export default NavBar;
