import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@mui/material";

//import components
import Layout from "./Components/Layout/Layout";
import { Store } from "./Store/Store";
import Home from "./Components/Home/Home";

const Routing = (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

const theme = createMuiTheme();
theme.palette.primary.main = "#e22925";
theme.palette.secondary.main = "#0a70bc";
theme.palette.secondary.light = "#e75350";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={Store}>{Routing}</Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
