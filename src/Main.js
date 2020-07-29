import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTPSLogo from "./MTPSLogo.png";
import Submissions from "./Submissions.js";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Sponsors from "./Sponsors.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: "800",
    paddingTop: "10%",
    paddingBottom: "40%",
  },
  heading: {
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    width: "600px",
    paddingLeft: "0%",
    paddingTop: "30px",
  },
  menu: {
    alignItems: "center",
    paddingLeft: "25%",
    color: "white",
  },
  button: {
    color: "white",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs="12" spacing="1">
          <Typography variant="h1" className={classes.heading}>
            MTPSHacks
          </Typography>
        </Grid>
        <Grid item xs="12">
          <ButtonGroup
            className={classes.menu}
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
        <Grid item xs="12">
          <img
            src={MTPSLogo}
            className={classes.image}
            alt="Logo"
            justify="center"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
