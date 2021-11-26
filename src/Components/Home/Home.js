import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { Fragment, useState } from "react";
import Content from "./Content";
import { area, year, month, status } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";

const initialValues = {
  repository: "active",
  year: "",
  month: "",
  area: "",
  status: "",
  product: "",
  businessUnit: "",
  account: "",
  assignedReconciler: "",
  assignedApprover: "",
  assignedAreaApprover: "",
};

function Home() {
  const classes = useStyles();
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState(initialValues);
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = (event) => {
    console.log(search.repository);
    console.log(event);
    console.log(search);
    if (
      search.year ||
      search.month ||
      search.area ||
      search.status ||
      search.businessUnit ||
      search.account ||
      search.product ||
      search.assignedReconciler ||
      search.assignedApprover ||
      search.assignedAreaApprover
    ) {
      !active && setSearch({ ...search, repository: "archived" });
      setShowContent(true);
    }
  };

  const onChangeRepositoryHandler = (event) => {
    console.log(event.target.value);
    event.target.value === "active" ? setActive(true) : setActive(false);
  };

  const onClickResetHandler = () => {
    window.location.reload(false);
  };
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit}>
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
                    defaultValue={search.repository}
                    className={classes.radio}
                    onClick={onChangeRepositoryHandler}
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
                    value={search.year}
                    color="secondary"
                    labelId="year-label"
                    label="Year"
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        year: event.target.value,
                      })
                    }
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
                    value={search.month}
                    id="month"
                    color="secondary"
                    labelId="month-label"
                    label="month"
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        month: event.target.value,
                      })
                    }
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
                    value={search.area}
                    id="area"
                    color="secondary"
                    labelId="area-label"
                    label="area"
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        area: event.target.value,
                      })
                    }
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
                    value={search.status}
                    id="status"
                    color="secondary"
                    labelId="status-label"
                    label="status"
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        status: event.target.value,
                      })
                    }
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
                    value={search.businessUnit}
                    size="small"
                    id="businessUnit"
                    color="secondary"
                    variant="outlined"
                    label="Business Unit"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        businessUnit: event.target.value,
                      })
                    }
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    value={search.account}
                    size="small"
                    id="account"
                    color="secondary"
                    variant="outlined"
                    label="Account"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        account: event.target.value,
                      })
                    }
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    value={search.product}
                    size="small"
                    id="product"
                    color="secondary"
                    variant="outlined"
                    label="Product"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        product: event.target.value,
                      })
                    }
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
                    value={search.assignedReconciler}
                    size="small"
                    id="assignedReconciler"
                    color="secondary"
                    variant="outlined"
                    label="Assigned Reconciler"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        assignedReconciler: event.target.value,
                      })
                    }
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    value={search.assignedApprover}
                    size="small"
                    id="assignredApprover"
                    color="secondary"
                    variant="outlined"
                    label="Assignred Approver"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        assignedApprover: event.target.value,
                      })
                    }
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    value={search.assignedAreaApprover}
                    size="small"
                    id="assignedAreaApprover"
                    color="secondary"
                    variant="outlined"
                    label="Assigned Area Approver"
                    className={classes.spacing}
                    onChange={(event) =>
                      setSearch({
                        ...search,
                        assignedAreaApprover: event.target.value,
                      })
                    }
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

              <Grid item lg={12}>
                <Button
                  type="button"
                  variant="contained"
                  size="large"
                  className={classes.buttonDisable}
                  color="secondary"
                  onClick={onClickResetHandler}
                >
                  Reset
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  size="large"
                  className={classes.buttonEnable}
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      {showContent && <Content active={search.repository} />}
    </Fragment>
  );
}

export default Home;
