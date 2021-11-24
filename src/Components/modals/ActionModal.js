import { Button, Grid, IconButton, Modal, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: "absolute",
    display: "block",
    top: `${top}%`,
    left: `${left}%`,
    height: 210,
    transform: `translate(-${top}%,-${left}%)`,
  };
}

function ActionModal() {
  const classes = useStyles();
  const modalStyle = getModalStyle();
  const subTitle = "Do you want to Approve the selected Records";

  const handleCancel = () => {
    console.log("Cancel button CLicked");
  };

  const handleApprove = () => {
    console.log("Approve clicked");
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <IconButton
        areia-label="close"
        onClick={() => handleCancel()}
        className={classes.closeButton}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        variant="h5"
        color="initial"
        className={classes.modalTitle}
        gutterBottom
      >
        Are you sure?
      </Typography>
      <Typography
        variant="body1"
        className={classes.modalTitle}
        color="initial"
        gutterBottm
      >
        {subTitle}
      </Typography>
      <Grid container>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            size="large"
            className={classes.buttonDisable}
            color="secondary"
            onCLick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="large"
            className={classes.buttonEnable}
            color="secondary"
            onClick={handleApprove}
          >
            Approve
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
    </div>
  );

  return (
    <div>
      <Modal
        disableBackdropClick
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ActionModal;
