import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  makeStyles,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { Fragment, useState } from "react";
import { area, year, month, status } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";
import ViewAreaProfile from "./ViewAreaProfile";
import AddAreaProfile from "./AddAreaProfile";

function AreaProfile() {
  const [openView, setOPenView] = useState("view");
  const classes = useStyles();
  const onChangeRadioHandler = (event) => {
    console.log(event.target.value);
    setOPenView(event.target.value);
  };

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Paper className={classes.paper}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="view"
                className={classes.radio}
                onChange={onChangeRadioHandler}
              >
                <FormControlLabel
                  value="view"
                  control={<Radio color="primary" />}
                  label="View Area Profile"
                />
                <FormControlLabel
                  value="add"
                  control={<Radio color="primary" />}
                  label="Add Area Profile"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
      {openView === "view" ? <ViewAreaProfile /> : <AddAreaProfile />}
    </Fragment>
  );
}

export default AreaProfile;
