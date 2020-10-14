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
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

const useStyles = makeStyles({
  table: {
    minWidth: 20,
  },
});

function createData(title, details) {
  return { title, details};
}

export default function AddNews() {
  const classes = useStyles();
  const rows = [
    createData("Novi rekord u BiH: Na koronavirus pozitivne još 482 osobe", "U protekla 24 sata u Bosni i Hercegovini zaraza koronavirusom je potvrđena kod još 482 osobe. Preminulo je 11 osoba."),
    createData("Alonso vozio Renaultov bolid u Barceloni: Nije se lako vratiti, ali osjećaj je sjajan", "Iskusni španski vozač Fernando Alonso ponovo je sjeo u bolid Formule 1, ovog puta za upravljač Renaulta."),
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
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div class="search">
    <FormGroup className="username" controlId="email" bsSize="large">
          <ControlLabel className="usernameLabel">Search:</ControlLabel>
          <FormControl
            autoFocus
            type="text"
          />
          <Button>Confirm</Button>
      </FormGroup>
    </div>
    </div>
  );
}