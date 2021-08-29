import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/Header";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
    <NavBar/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
