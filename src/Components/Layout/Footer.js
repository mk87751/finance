/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "20px", marginLeft: "5px" }}
    >
      <Grid>
        <Typography variant="caption">{"For internal use Only"}</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
