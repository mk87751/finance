import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
// import MenuIcon from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transition.create(["width", "margin"], {
    //   easing: theme.transition.easing.sharp,
    //   duration: theme.transition.duration.leavingScreen,
    // }),
  },
  menuButton: {
    marginRight: 15,
  },
}));

function Header() {
  const classes = useStyles();
  const heading = "HOME";
  const subHeading = "Document Storage file/ record lookup";
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div style={{ flexGrow: 2 }}>
          <Typography variant="h6" className={classes.root}>
            {heading}
          </Typography>
          <Typography variant="button" className={classes.root}>
            {subHeading}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
