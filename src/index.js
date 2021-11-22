import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core";

//import components

const theme = createTheme();
theme.palette.primary.main = "#e22925";
theme.palette.secondary.main = "#0a70bc";
theme.palette.secondary.light = "#e75350";

theme.typography.h6 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: 19,
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: 17,
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
