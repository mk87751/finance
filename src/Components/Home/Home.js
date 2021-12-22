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
// import Axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React, { Fragment, useState, useEffect } from "react";
import Content from "./Content";
import { area, year, month, status } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";
import { getAreaDetails, searchRecords } from "../../Actions/home.action";
import { useDispatch } from "react-redux";
import Browse from "./Browse";

const initialValues = {
  repositorystatus: "Active",
  year: "",
  month: "",
  area: "",
  status: "",
  product: "",
  businessUnit: "",
  account: "",
  AssignedReconciler: "",
  AssignedApprover: "",
  AssignedAreaApprover: "",
};

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState(initialValues);
  const [areaDetails, setAreaDetails] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    !areaDetails &&
      dispatch(getAreaDetails()).then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          setAreaDetails(response.data.data);
        }
      });
  }, []);

  const handleSubmit = (event) => {
    console.log(search.repositorystatus);
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
      search.AssignedReconciler ||
      search.AssignedApprover ||
      search.AssignedAreaApprover
    ) {
      !active && setSearch({ ...search, repositorystatus: "archived" });
      dispatch(searchRecords(search)).then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          setData(response.data.data);
        }
      });
    }
  };

  const onChangeRepositoryHandler = (event) => {
    console.log(event.target.value);
    event.target.value === "Active" ? setActive(true) : setActive(false);
  };

  const onClickResetHandler = () => {
    window.location.reload(false);
    setSearch(initialValues);
    setData([]);
    setOption("");
  };
  return (
    <>
      {option !== "browse" && (
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
                        defaultValue={search.repositorystatus}
                        className={classes.radio}
                        onClick={onChangeRepositoryHandler}
                      >
                        <FormControlLabel
                          value="Active"
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
                        <MenuItem value=""></MenuItem>
                        {areaDetails &&
                          areaDetails.map((ele) => (
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
                        value={search.AssignedReconciler}
                        size="small"
                        id="assignedReconciler"
                        color="secondary"
                        variant="outlined"
                        label="Assigned Reconciler"
                        className={classes.spacing}
                        onChange={(event) =>
                          setSearch({
                            ...search,
                            AssignedReconciler: event.target.value,
                          })
                        }
                        inputProps={{ maxLength: 50 }}
                      />
                      <TextField
                        value={search.AssignedApprover}
                        size="small"
                        id="assignredApprover"
                        color="secondary"
                        variant="outlined"
                        label="Assignred Approver"
                        className={classes.spacing}
                        onChange={(event) =>
                          setSearch({
                            ...search,
                            AssignedApprover: event.target.value,
                          })
                        }
                        inputProps={{ maxLength: 12 }}
                      />
                      <TextField
                        value={search.AssignedAreaApprover}
                        size="small"
                        id="assignedAreaApprover"
                        color="secondary"
                        variant="outlined"
                        label="Assigned Area Approver"
                        className={classes.spacing}
                        onChange={(event) =>
                          setSearch({
                            ...search,
                            AssignedAreaApprover: event.target.value,
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
          {data.length > 0 && (
            <Content
              active={search.repositorystatus}
              data={data}
              setOption={setOption}
            />
          )}
        </Fragment>
      )}
      {option !== "" && <Browse option={option} setOption={setOption} />}
    </>
  );
}

export default Home;
