/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import "../../App.css";
import { ExportReactCSV } from "../../ExportReactCSV";
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

import { useStyles } from "../styles";
// import ContentTable from "./ContentTable";
import ActionModal from "../modals/ActionModal";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import CloseIcon from "@material-ui/icons/Close";

import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { responseContent } from "../../Helpers/OptionHelpers";
import { useDispatch } from "react-redux";
import { browseRecords } from "../../Actions/home.action";
import Browse from "./Browse";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "area",
    numeric: false,
    disablePadding: true,
    label: "Area",
  },
  {
    id: "businessUnit",
    numeric: false,
    disablePadding: true,
    label: "BusinessUnit",
  },
  {
    id: "account",
    numeric: false,
    disablePadding: true,
    label: "Account",
  },
  {
    id: "product",
    numeric: false,
    disablePadding: true,
    label: "Product",
  },
  {
    id: "assignedReconciler",
    numeric: false,
    disablePadding: true,
    label: "Assigned Reconciler",
  },
  {
    id: "assignedApprover",
    numeric: false,
    disablePadding: true,
    label: "Assigned Approver",
  },
  {
    id: "assignedAreaApprover",
    numeric: false,
    disablePadding: true,
    label: "Assigned Area Approver",
  },
  {
    id: "ledgerBalance",
    numeric: false,
    disablePadding: true,
    label: "Ledger Balance",
  },
  {
    id: "controlBalance",
    numeric: false,
    disablePadding: true,
    label: "Control Balance",
  },
  {
    id: "outstandingListing",
    numeric: false,
    disablePadding: true,
    label: "Outstanding Listing",
  },
  {
    id: "difference",
    numeric: false,
    disablePadding: true,
    label: "Difference",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all records" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={"none"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            > */}
            <span style={{ fontWeight: 600 }}>{headCell.label}</span>
            {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 && (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>

        //   ) : (
        //     <Typography
        //       className={classes.title}
        //       variant="h6"
        //       id="tableTitle"
        //       component="div"
        //     >
        //       Nutrition
        //     </Typography>
        //   )}

        //   {numSelected > 0 ? (
        //     <Tooltip title="Delete">
        //       <IconButton aria-label="delete">
        //         <DeleteIcon />
        //       </IconButton>
        //     </Tooltip>
        //   ) : (
        //     <Tooltip title="Filter list">
        //       <IconButton aria-label="filter list">
        //         <FilterListIcon />
        //       </IconButton>
        //     </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   paper: {
//     width: "100%",
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableContainer: {
//     maxHeight: 440,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1,
//   },
// }));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Content({ active, data, setOption }) {
  console.log("data:", data);
  const dispatch = useDispatch();
  const [rows, setRows] = useState(data);
  const [modal, setModal] = useState(false);
  const [approve, setApprove] = useState(false);
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [browseOpen, setOptionOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const componentRef = useRef("");

  // const [inputParamsBrowse, setInputParamsBrowse] = useState({
  //   accountId: "",
  //   instanceId: "",
  // });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAction = () => {
    console.log("action");
    setModal(true);
  };
  if (approve) {
    console.log("Approved");
    setApprove(false);
    setModal(false);
  }

  const handleClickBrowse = (value) => {
    let inputParam = rows.find((row) => row.account_id === selected[0]);
    console.log(rows, "selected:", selected[0], "inputParams:", inputParam);

    dispatch(
      browseRecords({
        accountId: inputParam.account_id,
        instanceId: inputParam.instnc_id,
      })
    ).then((response) => {
      if (response.status === 200) {
        setOption(value);
      }
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.account_id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    // setInputParamsBrowse({
    // accountId: row.account_id,
    // instanceId: row.instnc_id,
    // });
    const selectedIndex = selected.indexOf(row.account_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.account_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (account) => selected.indexOf(account) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item lg={12}>
              <ExportReactCSV
                csvData={rows}
                classes={classes.buttonDisable}
                fileName={"datadetails"}
              />
              {active === "Active" && (
                <Button
                  variant="contained"
                  size="large"
                  className={classes.buttonEnable}
                  color="success"
                  type="button"
                  onClick={handleClickAction}
                  disabled={selected.length >= 1 ? false : true}
                >
                  Action
                </Button>
              )}
              <Button
                variant="contained"
                size="large"
                className={classes.buttonEnable}
                color="success"
                disabled={selected.length === 1 ? false : true}
                onClick={() => handleClickBrowse("browse")}
              >
                Browse
              </Button>
              {/* <ReactToPrint
                content={() => componentRef.current}
                onBeforeGetContent={() => {
                  handleClickBrowse("print");
                }}
                trigger={() => ( */}
              <Button
                variant="contained"
                size="large"
                className={classes.buttonEnable}
                color="success"
                disabled={selected.length === 1 ? false : true}
                onClick={() => handleClickBrowse("print")}
              >
                Print
              </Button>
              {/* )} /> */}
              {/* <Browse
                option={"print"}
                setOption={() => {}}
                ref={componentRef}
              /> */}
            </Grid>
            <Grid item lg={12}>
              <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer className={classes.tableContainer}>
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    sx={{ fontSize: 14 }}
                    size={"4px"}
                    id="table-to-xls"
                  >
                    <EnhancedTableHead
                      classes={classes}
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.account_id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.account_id}
                              selected={isItemSelected}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  checked={isItemSelected}
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                id={labelId}
                                scope="row"
                              >
                                {row.date}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.area}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.businessUnit}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.account}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.product}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.assignedReconciler}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.assignedApprover}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.assignedAreaApprover}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.ledgerBalance}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.controlBalance}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.outstandingListing}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.difference}
                              </TableCell>
                              <TableCell
                                className={classes.tableCell}
                                align="center"
                              >
                                {row.status}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      {rows.length === 0 && (
                        <TableRow
                          style={{ height: (dense ? 33 : 53) * emptyRows }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {modal && active === "Active" && (
        <ActionModal modal={setModal} approveRecords={setApprove} />
      )}
    </Fragment>
  );
}

export default Content;
