import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./HomePage.css";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  width: 1290,
	  marginTop: 50,
	},
	paper: {
	  padding: theme.spacing(2),
	  margin: 'auto',
	  width: 1000
	},
	image: {
	  width: 128,
	  height: 128,
	},
	img: {
	  margin: 'auto',
	  display: 'block',
	  maxWidth: '100%',
	  maxHeight: '100%',
	},
	title: {
	  fontSize: 20
	},
  }));

export default function HomePage() {
	const history = useHistory();
	const navigateTo = () => history.push('/login');
	const classes = useStyles();
	  
	const news = [];
	//get all news from database -- for some reason not working :(
  	axios.get('http://localhost:8080/api/news/all')
  	.then(response => {
	  for (const [, value] of response.data.entries()) {
		  let q = {
			  picture: value.picture,
			  title: value.title,
			  details: value.details
		  };
		  news.push(q);
	  }
  })
  .catch(error => {
	  console.log(error);
  });

  return(
  	<body>
  	<div class="topBar">
  	<h1 class="title">Softray Soultions News Portal</h1>
  	<button class="login" onClick={navigateTo}>Login for Admin</button>
  	</div>
	  <div >
    <FormGroup className="searchBar" controlId="email" bsSize="large">
          <ControlLabel className="searchTitle">Search:</ControlLabel>
          <FormControl
            autoFocus
            type="text"
          />
          <Button>Confirm</Button>
      </FormGroup>
    </div>
	  <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require('./korona.jpg')}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.title}>
				Novi rekord u BiH: Na koronavirus pozitivne još 482 osobe
                </Typography>
                <Typography variant="body2" gutterBottom>
				U protekla 24 sata u Bosni i Hercegovini zaraza koronavirusom je potvrđena kod još 482 osobe. Preminulo je 11 osoba.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
	<div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require('./korona.jpg')}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.title}>
				Novi rekord u BiH: Na koronavirus pozitivne još 482 osobe
                </Typography>
                <Typography variant="body2" gutterBottom>
				U protekla 24 sata u Bosni i Hercegovini zaraza koronavirusom je potvrđena kod još 482 osobe. Preminulo je 11 osoba.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
	<div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require('./korona.jpg')}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.title}>
				Novi rekord u BiH: Na koronavirus pozitivne još 482 osobe
                </Typography>
                <Typography variant="body2" gutterBottom>
				U protekla 24 sata u Bosni i Hercegovini zaraza koronavirusom je potvrđena kod još 482 osobe. Preminulo je 11 osoba.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
	<div class="meni">
	  <ul>
		<li></li>
		<li></li>
		</ul>
	  </div>
  	</body>
  	);
}