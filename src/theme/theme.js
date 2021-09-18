import { extendTheme } from "@chakra-ui/react";

// const lightColors = {
//   primary: "#5798b2",
//   black: "#142329",
//   blue: "#5798b2",
//   green: "#6f9283",
//   gold: "#e9c46a",
//   orange: "#f0852d",
//   red: "#d7431d",
//   cream:"#f4f1de",
//   white: "#FFF",
// };

// const darkColors = {
//   black: "#142329",
//   blue: "#264653",
//   green: "#2a9d8f",
//   lightgreen: "#8ab17d",
//   gold: "#e9c46a",
//   orange: "#f4a261",
//   red: "#d7431d",
//   white: "#FFF",
// };

// const colors = lightColors;

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  // colors,
  config,
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
});

export default theme;
