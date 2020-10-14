import React from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./TabularView.css";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(title, picture, details) {
  return { title, picture, details};
}

export default function AddNews() {
  const classes = useStyles();
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
  ];

  //get all news from database -- for some reason not working :(
  axios.get('http://localhost:8080/api/news/all')
        .then(response => {
            for (const [, value] of response.data.entries()) {
                let q = {
                    picture: value.picture,
                    title: value.title,
                    details: value.details
                };
                rows.push(q);
            }
        })
        .catch(error => {
            console.log(error);
        });
        

  return (
    <div className="TableView">
      <p class="text">List of all the news you've added and edited:</p>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Picture</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.picture}</TableCell>
              <TableCell align="right">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}