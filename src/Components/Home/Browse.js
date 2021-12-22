import React, { Fragment, useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonEnable: {
    "&:hover": {
      backgroundColor: "#701611",
      color: "#fff",
    },
    backgroundColor: "#e22925",
    borderRadius: "24px",
    color: "#fff",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 150,
  },
}));

export const Browse = React.forwardRef(({ option, setOption }, ref) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const data = useSelector((state) => state.home?.browseData?.data[0]);
  const [browseData, setBrowseData] = useState({});
  console.log(browseData);

  const componentRef = useRef();
  const printRef = useRef();

  useEffect(() => {
    option === "print" && printRef.current.handleClick();
  }, [option]);

  useEffect(() => {
    setBrowseData(data);
  }, [data, dispatch]);

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <ReactToPrint
          onBeforePrint={() => setOption("")}
          trigger={() => <React.Fragment />}
          content={() => componentRef.current}
          ref={printRef}
        />

        <div
          ref={componentRef}
          style={{ padding: 60 }}
          // className={browse || "printContent"}
        >
          <div style={{ overflow: "auto" }}>
            {option === "browse" && (
              <Button
                variant="contained"
                size="large"
                className={classes.buttonEnable}
                color="success"
                onClick={() => setOption("")}
              >
                Close Browse
              </Button>
            )}
            <center>
              <b>
                FINANCE INSURANCE COMPANIES
                <br />
                Document Storage File/Record Lookup
                <br />
                December, 2021
              </b>
            </center>
            <br />
            <br />
            <table style={{ border: "0", cellpadding: "0", cellspacing: "0" }}>
              <tbody>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Account Information:</b>
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Reconcilation Status:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Account:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.account_no}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Area:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_name}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Business Unit:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.business_unit}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Product:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.product}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    CW:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Zero Balance Account (Monthly):
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    No
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Zero Balance Account (EOY):
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    No
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Assigned Reconciler:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Assigned Approver:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.approver}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Assigned Area Approver:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_approver}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <table style={{ border: "0", cellpadding: "0", cellspacing: "0" }}>
              <tbody>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Balance Information:</b>
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Ledger Balance:
                  </td>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.led_bal_amt}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Control Balance:
                  </td>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.cntrl_bal_amt}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Outstanding Listing:
                  </td>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.outstanding_list}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Difference:
                  </td>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.diff}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <table style={{ border: "0", cellpadding: "0", cellspacing: "0" }}>
              <tbody>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Explanation:</b>
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Action Plan:</b>
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Estimated Date Of Resolution:</b>
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  ></td>
                </tr>
              </tbody>
            </table>
            <br />
            <table style={{ border: "0", cellpadding: "0", cellspacing: "0" }}>
              <tbody>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Status History:</b>
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Opened:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.open_date}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Reconciled:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.reconciled_date}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.reconciled_by}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Approved:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.approved_date}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.approved_by}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Area Approved:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_approved_date}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_approved_by}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <table style={{ border: "0", cellpadding: "0", cellspacing: "0" }}>
              <tbody>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Edit History:</b>
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Action:</b>
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Person:</b>
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "350px",
                      fontSize: "13px",
                    }}
                  >
                    <b>Date/Time:</b>
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Opened:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "350px",
                      fontSize: "13px",
                    }}
                  ></td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.open_date}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Reconciled:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "350px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.reconciled_by}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.reconciled_date}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Approved:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "350px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.approved_by}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.approved_date}
                  </td>
                </tr>
                <tr>
                  <td
                    align="right"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    Area Approved:
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "8px",
                      width: "350px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_approved_by}
                  </td>
                  <td
                    align="left"
                    valign="top"
                    style={{
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      width: "250px",
                      fontSize: "13px",
                    }}
                  >
                    {browseData?.area_approved_date}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </Paper>
    </Fragment>
  );
});

export default Browse;
