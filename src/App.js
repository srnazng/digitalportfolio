import React from 'react';
import logo from './logo.svg';
import { Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MTPSLogo from './MTPSLogo.png';
import Submissions from './Submissions.js';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '800',
    padding: '0 30px',
  },
  heading: {
    paddingTop: "20%",
    textAlign: 'center',
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs="12" >
          <Typography variant="h1" className={classes.heading}>
            MTPSHacks
        </Typography>
          <img src={MTPSLogo} alt="Logo" justify="center" />
          <Submissions />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;