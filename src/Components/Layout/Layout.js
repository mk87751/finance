import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "../Home/Home";
import Content from "../Home/Content";
import AreaProfile from "../AreaProfile/AreaProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  appBarSpacer: theme.mixins.toolbar,
  Content: {
    paddingLeft: "50px",
    paddingRight: "50px",
    overflow: "auto",
    flexDirection: "flex-start",
  },
  container: {
    justifyContent: "flex-start",
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "colomn",
  },
}));
function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Router>
        <main className={classes.Content}>
          <Navigation />
          <div className={classes.appBarSpacer}>
            <Container maxWidth="xl" className={classes.container}>
              <Switch className={classes.root}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/areaProfile" component={AreaProfile} />
              </Switch>
            </Container>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default Layout;
