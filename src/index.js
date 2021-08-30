import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/Header";
import { ChakraProvider, Flex } from "@chakra-ui/react";
// import { ColorModeProvider } from "@chakra-ui/color-mode"
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
        >
          <NavBar />
          <App />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
