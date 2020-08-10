import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Particle from "./components/Particle.js";
import prof from "./media/prof.png";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import { Grid, createMuiTheme } from "@material-ui/core";

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
    background: "#070033",
    height: "800px",
  },
  body: {
    color: "white",
    position: "absolute",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  experience: {
    backgroundColor: "#75c9d3",
    height: "400px",
    [theme.breakpoints.down('xs')]: {
      paddingBottom: "100px",
    },
  },
  projects: {
    backgroundColor: "#2c5f72",
    height: "800px",
    paddingBottom: "100px",
  }
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Particle className={classes.particle} />
      <Grid container className={classes.body} spacing={0}>
        <Grid item xs={12}>
          <Intro />
        </Grid>
        <Grid item xs={12} className={classes.experience}>
          <Experience />
        </Grid>
        <Grid item xs={12} className={classes.projects}>
          <Projects />
        </Grid>
      </Grid>
    </div >
  );
}

export default Main;
