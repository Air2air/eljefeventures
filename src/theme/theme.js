import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#142329",
  blue: "#264653",
  green: "#2a9d8f",
  lightgreen: "#8ab17d",
  gold: "#e9c46a",
  orange: "#f4a261",
  red: "#d7431d",
  white: "#FFF",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  config,
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
});

export default theme;
