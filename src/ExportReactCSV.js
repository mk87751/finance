import React from 'react'
import { CSVLink } from 'react-csv'
import {Button} from "@material-ui/core";


export const ExportReactCSV = ({csvData, fileName,classes}) => {
    return (
        
            <CSVLink style={{textDecoration: 'none'}} data={csvData} filename={fileName}><Button  variant="outlined"
            size="large"
            className={classes}
            color="error"
            >
            Export
        </Button>
        </CSVLink>
    )
}