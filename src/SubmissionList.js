import React, { Component } from "react";
import SubmissionCard from "./Card.js";
import data from "./csvjson.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, withTheme } from "@material-ui/core";

function SubmissionList() {
  const useStyles = makeStyles((Theme) => ({
    grid: {
      width: "100%",
      margin: "0px",
    },
  }));

  const classes = useStyles();

  const Data = data.map((data) => {
    return (
      <Grid item xs={4}>
        <SubmissionCard
          key={data.email}
          projectName={data.teamName}
          memberNames={data.memberNames}
          description={data.description}
          inspiration={data.inspiration}
          challenges={data.challenge}
          accomplishments={data.accomplishments}
          learn={data.learn}
          nextSteps={data.nextSteps}
          link1={data.link1}
          link2={data.link2}
        />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={2}
      className={classes.grid}
      alignItems="stretch"
      direction="row"
    >
      {Data}
    </Grid>
  );
}

export default SubmissionList;
