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
import React, { Fragment } from "react";
import { area, year, month, status } from "../../Helpers/OptionHelpers";
import { useStyles } from "../styles";
import AreaContent from "./AreaContent";
function ViewAreaProfile() {
  const classes = useStyles();
  const handleSubmit = () => {
    console.log("submit clicked");
  };
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
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

              <TextField
                size="small"
                id="areaApprover"
                color="secondary"
                variant="outlined"
                label="Area Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
              />
              <TextField
                size="small"
                id="backupApprover"
                color="secondary"
                variant="outlined"
                label="BackupApprover"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
              />
            </Grid>
            <Grid item lg={12}>
              <Button
                type="button"
                variant="contained"
                size="large"
                className={classes.buttonDisable}
                color="secondary"
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
      <AreaContent />
    </Fragment>
  );
}

export default ViewAreaProfile;
