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
import FormLabel from "@material-ui/core/FormLabel";
import React, { Fragment } from "react";

import { area, year, month, status } from "../../Helpers/OptionHelpers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    minWidth: 250,
    height: 30,
  },
  title: {
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
    paddingTop: "5px",
    color: "black",
  },
  root: {
    display: "flex",
    flexDirection: "start",
  },
  paper: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  buttonEnable: {
    "&:hover": {
      backgroundColor: "#701611",
      colog: "#fff",
    },
    backgroundColor: "#e22925",
    color: "#fff",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 210,
  },
  radio: {
    marginLeft: theme.spacing(2),
  },
  spacing: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    minWidth: 300,
    height: 30,
  },
  buttonDisable: {
    "&:hover": {
      backgroundColor: "#fff",
      colog: "#701611",
      border: "2px solid #701611",
    },
    backgroundColor: "#fff",
    border: "2px solid #e22925",
    color: "#e22925",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 210,
  },
}));

function Home() {
  const classes = useStyles();
  console.log("Home");
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    color="primary"
                  >
                    Repository:
                  </Typography>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="active"
                    className={classes.radio}
                  >
                    <FormControlLabel
                      value="active"
                      control={<Radio color="primary" />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="archived"
                      control={<Radio color="primary" />}
                      label="Archived"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} style={{ border: "1px solid gray" }}>
                <Typography
                  className={classes.title}
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                >
                  {"Global Search:"}
                </Typography>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel color="secondary" id="year-label">
                    Year
                  </InputLabel>

                  <Select
                    id="year"
                    color="secondary"
                    labelId="year-label"
                    label="Year"
                  >
                    {year &&
                      year.map((ele) => (
                        <MenuItem key={ele} value={ele}>
                          {ele}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel color="secondary" id="month-label">
                    Month
                  </InputLabel>

                  <Select
                    id="month"
                    color="secondary"
                    labelId="month-label"
                    label="month"
                  >
                    {month &&
                      month.map((ele) => (
                        <MenuItem key={ele} value={ele}>
                          {ele}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel color="secondary" id="area-label">
                    Area
                  </InputLabel>

                  <Select
                    id="area"
                    color="secondary"
                    labelId="area-label"
                    label="area"
                  >
                    {area &&
                      area.map((ele) => (
                        <MenuItem key={ele} value={ele}>
                          {ele}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel color="secondary" id="status-label">
                    Status
                  </InputLabel>

                  <Select
                    id="status"
                    color="secondary"
                    labelId="status-label"
                    label="status"
                  >
                    {status &&
                      status.map((ele) => (
                        <MenuItem key={ele} value={ele}>
                          {ele}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>

                <Grid item xs={12}>
                  <TextField
                    size="small"
                    id="businessUnit"
                    color="secondary"
                    variant="outlined"
                    label="Business Unit"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    size="small"
                    id="account"
                    color="secondary"
                    variant="outlined"
                    label="Account"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    size="small"
                    id="product"
                    color="secondary"
                    variant="outlined"
                    label="Product"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                  >
                    {"Approvers:"}
                  </Typography>

                  <TextField
                    size="small"
                    id="assignedReconciler"
                    color="secondary"
                    variant="outlined"
                    label="Assigned Reconciler"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    size="small"
                    id="assignredApprover"
                    color="secondary"
                    variant="outlined"
                    label="Assignred Approver"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    size="small"
                    id="assignedAreaApprover"
                    color="secondary"
                    variant="outlined"
                    label="Assigned Area Approver"
                    className={classes.spacing}
                    inputProps={{ maxLength: 12 }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: 10 }}>
                <FormControl component="fieldset">
                  <Typography
                    className={classes.title}
                    variant="subtitle1"
                    color="primary"
                  >
                    Non-$0.00 Difference Only?:
                  </Typography>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="yes"
                    className={classes.radio}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </form>
            <Grid item lg={12}>
              <Button
                variant="contained"
                size="large"
                className={classes.buttonDisable}
                color="success"
              >
                Reset
              </Button>
              <Button
                variant="outlined"
                size="large"
                className={classes.buttonEnable}
                color="error"
              >
                Search
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
