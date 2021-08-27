import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();