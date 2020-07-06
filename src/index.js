import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";
ReactGA.initialize("UA-169923260-01");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
