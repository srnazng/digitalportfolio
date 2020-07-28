import React from 'react';
import logo from './logo.svg';
import { Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MTPSLogo from './MTPSLogo.png';
import Submissions from './Submissions.js';
import { Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    height: '800',
    paddingTop: "10%",
    paddingBottom: "40%",
  },
  heading: {
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
    width: '200px',
    paddingLeft: "30%",
  },
  menu: {
    alignItems: 'center',
    paddingLeft: "22%",
    color: 'white',
  },
  button: {
    color: 'white',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs="12" spacing="1">
          <Typography variant="h1" className={classes.heading}>
            MTPSHacks
        </Typography>
          <img src={MTPSLogo} className={classes.image} alt="Logo" justify="center" />
          <Submissions />
        </Grid>
        <Grid item xs="12">
          <ButtonGroup className={classes.menu} variant="text" aria-label="text primary button group">
            <Button className={classes.button}>About</Button>
            <Button className={classes.button}>Submissions</Button>
            <Button className={classes.button}>Sponsors</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;