import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { useStyles } from "../styles";
import { useDispatch } from "react-redux";
import { addAreaProfile } from "../../Actions/areaProfile.action";
import { Alert, AlertTitle } from "@material-ui/lab";
import AddFileModal from "../modals/AddFileModal";

const initialValues = {
  newArea: "",
  newAreaApprover: "",
  newBackupApprover: "",
};
function AddAreaProfile() {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(initialValues);
  const classes = useStyles();
  const [successMessage, setSuccessMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [addFilemodal, setAddFileModal] = useState(false);
  const [approve, setApprove] = useState(false);

  approve &&
    dispatch(addAreaProfile(add)).then((response) => {
      if (response.status === 200) {
        console.log(response.data.message);
        setSuccessMessage(response.data.message);
      }
      console.log(successMessage);
    });
  const handleSubmit = () => {
    if (add.newArea && add.newAreaApprover && add.newBackupApprover) {
      setAlert(false);
      setAddFileModal(true);
    } else {
      setAlert(true);
    }
    console.log("submit clicked");
  };
  const onClickCancelHandler = () => {
    setAdd(initialValues);
    setSuccessMessage("");
    setAlert(false);
    setApprove(false);
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
                error={alert && !add.newArea}
                value={add.newArea}
                size="small"
                id="newArea"
                color="secondary"
                variant="outlined"
                label="Area"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newArea: event.target.value })
                }
                helperText={alert && !add.newArea && "Area Required"}
              />
              <TextField
                error={alert && !add.newAreaApprover}
                value={add.newAreaApprover}
                size="small"
                id="areaPrrover"
                color="secondary"
                variant="outlined"
                label="Area Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newAreaApprover: event.target.value })
                }
                helperText={
                  alert && !add.newAreaApprover && "Area Approver Required"
                }
              />
              <TextField
                error={alert && !add.newBackupApprover}
                value={add.newBackupApprover}
                size="small"
                id="backupApprover"
                color="secondary"
                variant="outlined"
                label="Backup Approver"
                className={classes.spacing}
                inputProps={{ maxLength: 12 }}
                onChange={(event) =>
                  setAdd({ ...add, newBackupApprover: event.target.value })
                }
                helperText={
                  alert && !add.newBackupApprover && "Backup Approver Required"
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
      {successMessage && (
        <Paper className={classes.paper}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              className={classes.profileTitle}
              variant="h6"
              color="secondary"
              gutterBottom
            >
              <span style={{ color: "red" }}>{JSON.parse(successMessage)}</span>
            </Typography>
          </Grid>
        </Paper>
      )}
      {addFilemodal && (
        <AddFileModal modal={setAddFileModal} approveAddFile={setApprove} />
      )}
    </Fragment>
  );
}

export default AddAreaProfile;
