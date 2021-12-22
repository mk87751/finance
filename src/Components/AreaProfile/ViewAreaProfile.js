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
import React, { Fragment, useState, useEffect } from "react";
import { getAreaProfile } from "../../Actions/areaProfile.action";
import { getAreaDetails } from "../../Actions/home.action";
import { Alert, AlertTitle } from "@material-ui/lab";
import { area } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";
import AreaContent from "./AreaContent";
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
  Area: "",
  AreaApprover: "",
  BackupApprover: "",
};
function ViewAreaProfile() {
  const dispatch = useDispatch();
  const [area, setArea] = useState(
    useSelector((state) => state.home?.area?.data)
  );
  const [view, setView] = useState(initialValues);
  const [showContent, setShowContent] = useState(false);
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);
  const classes = useStyles();
  console.log(area);
  useEffect(() => {
    !area &&
      dispatch(getAreaDetails()).then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          setArea(response.data.data);
        }
      });
  }, []);
  const handleSubmit = () => {
    if (view.Area || view.AreaApprover || view.BackupApprover) {
      setShowContent(true);
      dispatch(getAreaProfile(view)).then((response) => {
        if (response.status === 200) {
          console.log(JSON.parse(response.data.data));
          setData(JSON.parse(response.data.data));
        }
      });
    } else {
      setAlert(true);
    }
  };

  const onClickCancelHandler = () => {
    setShowContent(false);
    setView(initialValues);
    setData([]);
    setAlert(false);
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
          <form>
            <Grid item xs={12}>
              <Typography
                className={classes.profileTitle}
                variant="h6"
                color="primary"
                gutterBottom
              >
                {"View Area Profile:"}{" "}
              </Typography>
              {alert && (
                <Typography
                  className={classes.profileTitle}
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    At least one field should be filled to View —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </Typography>
              )}

              <FormControl
                size="small"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel color="secondary" id="area-label">
                  Area
                </InputLabel>

                <Select
                  value={view.Area}
                  id="area"
                  color="secondary"
                  labelId="area-label"
                  label="area"
                  onChange={(event) => {
                    setView({ ...view, Area: event.target.value });
                    setAlert(false);
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  {area &&
                    area.map((ele) => (
                      <MenuItem key={ele} value={ele}>
                        {ele}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              {/* <TextField
                value={view.Area}
                size="small"
                id="area"
                color="secondary"
                variant="outlined"
                label="Area"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) => {
                  setView({ ...view, Area: event.target.value });
                  setAlert(false);
                }}
              /> */}
              <TextField
                value={view.AreaApprover}
                size="small"
                id="areaApprover"
                color="secondary"
                variant="outlined"
                label="Area Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) => {
                  setView({ ...view, AreaApprover: event.target.value });
                  setAlert(false);
                }}
              />
              <TextField
                value={view.BackupApprover}
                size="small"
                id="backupApprover"
                color="secondary"
                variant="outlined"
                label="BackupApprover"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onCgange={(event) => {
                  setView({ ...view, BackupApprover: event.target.value });
                  setAlert(false);
                }}
              />
            </Grid>
            <Grid item lg={12}>
              <Button
                type="button"
                variant="contained"
                size="large"
                className={classes.buttonDisable}
                color="secondary"
                onClick={onClickCancelHandler}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="outlined"
                size="large"
                className={classes.buttonEnable}
                color="secondary"
                onClick={() => handleSubmit()}
              >
                View
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
      {data.length > 0 && <AreaContent data={data} />}
    </Fragment>
  );
}

export default ViewAreaProfile;
