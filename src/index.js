import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as BR } from "react-router-dom";

import "./normalize.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BR>
    <App />
  </BR>,
  document.getElementById("root")
);
