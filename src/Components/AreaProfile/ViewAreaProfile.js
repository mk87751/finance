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
import React, { Fragment, useState } from "react";
import { area } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";
import AreaContent from "./AreaContent";

const initialValues = {
  area: "",
  areaApprover: "",
  backupApprover: "",
};
function ViewAreaProfile() {
  const [view, setView] = useState(initialValues);
  const [showContent, setShowContent] = useState(false);
  const classes = useStyles();
  const handleSubmit = () => {
    if (view.area || view.areaApprover || view.backupApprover) {
      setShowContent(true);
    }
    console.log("submit clicked");
  };

  const onClickCancelHandler = () => {
    setShowContent(false);
    setView(initialValues);
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
                {"View Area Profile:"}
              </Typography>

              <FormControl
                size="small"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel color="secondary" id="area-label">
                  Area
                </InputLabel>

                <Select
                  value={view.area}
                  id="area"
                  color="secondary"
                  labelId="area-label"
                  label="area"
                  onChange={(event) =>
                    setView({ ...view, area: event.target.value })
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

              <TextField
                value={view.areaApprover}
                size="small"
                id="areaApprover"
                color="secondary"
                variant="outlined"
                label="Area Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setView({ ...view, areaApprover: event.target.value })
                }
              />
              <TextField
                value={view.backupApprover}
                size="small"
                id="backupApprover"
                color="secondary"
                variant="outlined"
                label="BackupApprover"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onCgange={(event) =>
                  setView({ ...view, backupApprover: event.target.value })
                }
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
      {showContent && <AreaContent />}
    </Fragment>
  );
}

export default ViewAreaProfile;
