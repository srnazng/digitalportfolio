import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Particle from "./components/Particle.js";
import prof from "./media/prof.png";
import Intro from "./components/Intro.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import { Grid, createMuiTheme } from "@material-ui/core";
import Socials from "./components/Socials.js";
import Skills from "./components/Skills.js"

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
    width: "100%"
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
    backgroundColor: "#406584",
    height: "400px",
    [theme.breakpoints.down('xs')]: {
      paddingBottom: "100px",
    },
  },
  projects: {
    backgroundColor: "#070033",
    height: "800px",
    paddingBottom: "100px",
  },
  skills: {
    backgroundColor: "#406584",
    height: "400px",
    width: "100vw",
    paddingTop: "20px",
    justify: "center",
    align: "center",
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
        <Grid item xs={12} className={classes.skills}>
          <Skills />
        </Grid>
      </Grid>
      <Socials />
    </div >
  );
}

export default Main;
