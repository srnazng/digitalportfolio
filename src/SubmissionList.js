import React, { Component } from "react";
import SubmissionCard from "./Card.js";
import data from "./csvjson.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, withTheme } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { borders } from "@material-ui/system";

function SubmissionList() {
  const useStyles = makeStyles((Theme) => ({
    grid: {
      width: "100%",
      margin: "0px",
    },
    root: {
      background: "white",
      opacity: "70%",
      fontSize: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "45px",
      borderRadius: "5px",
    },
  }));

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
    <div>
      <Grid
        container
        spacing={5}
        className={classes.grid}
        alignItems="stretch"
        direction="row"
        justify="center"
      >
        <Grid xs={10}>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.root}
              type="text"
              fullWidth
              placeholder="SEARCH FOR A STUDENT'S NAME"
              value={searchTerm}
              onChange={handleChange}
              margin="dense"
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
            />
          </form>
        </Grid>
        {searchResults.map((data) => {
          return (
            <Grid item xs={3} direction="row" justify="center">
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
        })}
      </Grid>
    </div>
  );
}

export default SubmissionList;
