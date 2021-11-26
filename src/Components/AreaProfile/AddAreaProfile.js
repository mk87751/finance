import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { useStyles } from "../styles";

const initialValues = {
  newArea: "",
  newAreaApprover: "",
  newBackupApprover: "",
};
function AddAreaProfile() {
  const [add, setAdd] = useState(initialValues);
  const classes = useStyles();
  const handleSubmit = () => {
    console.log("submit clicked");
  };
  const onClickCancelHandler = () => {
    setAdd(initialValues);
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
                {"Add Area Profile:"}
              </Typography>

              <TextField
                value={add.newArea}
                size="small"
                id="area"
                color="secondary"
                variant="outlined"
                label="New Area"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newArea: event.target.value })
                }
              />
              <TextField
                value={add.newAreaApprover}
                size="small"
                id="areaPrrover"
                color="secondary"
                variant="outlined"
                label="New Area Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newAreaApprover: event.target.value })
                }
              />
              <TextField
                value={add.newBackupApprover}
                size="small"
                id="backupApprover"
                color="secondary"
                variant="outlined"
                label="New Backup Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newBackupApprover: event.target.value })
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
                Add
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default AddAreaProfile;
