import React from "react";
import { Container } from "@mui/material";

import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { CssBaseline } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "start",
  },
  // appBarSpacer: theme.mixins.toolbar,
  Content: {
    height: "100vh",
    overflow: "auto",
    flexDirection: "flex-start",
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "colomn",
  },
}));
function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Navigation />
      <main className={classes.Content}>
        <div className={classes.appBarSpacer}>
          <Container maxWidth="xl" className={classes.container}>
            <div className={classes.root}>{props.children}</div>
          </Container>
        </div>
      </main>
      {/* {props.children} */}
      <Footer />
    </div>
  );
}

export default Layout;
