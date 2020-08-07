import React, { Component } from "react";
import logo from "./logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MTPSLogo from "./MTPSLogo.png";
import { Grid } from "@material-ui/core";
import { Paper, createMuiTheme } from "@material-ui/core";
import SubmissionList from "./SubmissionList";

import SubmissionCard from "./Card.js";
import data from "./csvjson.json";
import { withTheme } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { borders } from "@material-ui/system";

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
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: "100%",
    paddingTop: "100px",
    paddingBottom: "60%",
  },
  image: {
    alignItems: "center",
    width: "20%",
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  heading: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  text: {
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    color: "white",
  },
  card: {
    width: "800px",
  },
});

function Submissions() {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = data.filter((data) =>
      data.memberNames.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={classes.root}>
      <IconButton to="/" component={RouterLink} className={classes.image}>
        <img
          src={MTPSLogo}
          alt="Logo"
          justify="center"
          className={classes.image}
        />
      </IconButton>
      <Grid item xs="12" spacing="1">
        <Typography variant="h1" className={classes.heading}>
          Submissions
        </Typography>
      </Grid>
      <Grid item xs="12">
        <Typography variant="h6" justify="center" className={classes.text} padding="10px">
          Teams of students submitted their project for either the Social Good
          Challenge or the Marketing Challenge!
        </Typography>
      </Grid>

      <Grid item xs="12">
        <SubmissionList />
      </Grid>
    </div>
  );
}

export default Submissions;
