import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const containter = document.getElementById("root");
const root = ReactDOM.createRoot(containter);

root.render(<App />);
