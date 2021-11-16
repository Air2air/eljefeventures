import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <div maxW="container.lg" m="0 auto">
          <App />
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
