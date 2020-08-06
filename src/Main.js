import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid, Card, CardMedia, createMuiTheme } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTPSLogo from "./MTPSLogo.png";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Backdrop from '@material-ui/core/Backdrop';
import Particle from "./Particle.js";
import Footer from "./Footer";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
    height: "100vh",
    margin: 0,
  },
  body: {
    color: "white",
    paddingTop: "10%",
    zIndex: 1,
    position: "absolute",
    top: "0px",
  },
  particle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    zIndex: 0,
  },
  heading: {
    textAlign: "center",
    justify: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: "40px",
    },
  },
  image: {
    width: "30%",
    align: "center",
    justify: "center",
    paddingTop: "50px",
    paddingBottom: "100px",
    zIndex: 1,

  },
  menu: {
    textAlign: "center",
    color: "white",
    justify: "center",
    zIndex: 1,
  },
  button: {
    color: "white",
    fontSize: "20px"
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Particle className={classes.particle} />
      <Grid container
        className={classes.body}
        spacing={1}
        direction="column"
        alignItems="stretch"
        display="flex"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs="12">
          <Typography variant="h1" className={classes.heading}>
            MTPSHacks
          </Typography>
        </Grid>

        <Grid item xs="12" className={classes.menu}>
          <ButtonGroup
            variant="text"
            aria-label="text primary button group"
          >
            <Button
              className={classes.button}
              to="/About"
              component={RouterLink}
            >
              About
            </Button>
            <Button
              className={classes.button}
              to="/Submissions"
              component={RouterLink}
            >
              Submissions
            </Button>
            <Button
              className={classes.button}
              to="/Sponsors"
              component={RouterLink}
            >
              Sponsors
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs="12"
          align="center"
        >
          <CardMedia
            className={classes.image}
            component="img"
            image={MTPSLogo}
            title="Logo"
          />
        </Grid>

      </Grid>
    </div >
  );
}

export default Main;
