import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Container maxW="container.lg" m="0 auto">
          <App />
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
