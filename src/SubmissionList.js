import React, { Component } from "react";
import SubmissionCard from "./Card.js";
import data from "./csvjson.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, withTheme, createMuiTheme } from "@material-ui/core";
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
    searchbar: {
      padding: "0.2%",
      background: "white",
      opacity: "70%",
      display: "flex",
      flexDirection: "row",
      width: "75%",
      minWidth: "75vw",
      justify: "center",
      height: "45px",
      borderRadius: "5px",
      left: "50%",
      transform: "translate(-50% , -50%)",
      paddingLeft: "10px",
      marginTop: "30px",
      // top: "300px",
    },
    searchFormat: {
      paddingTop: "3%",
      paddingBottom: "3%",
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
      data.memberNames.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div width="100%">
      <Grid
        container
        spacing={4}
        className={classes.grid}
        alignItems="stretch"
        direction="row"
        justify="center"
      >
        <Grid item xs="12" className={classes.searchFormat}>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.searchbar}
              type="text"
              fullWidth
              placeholder="SEARCH FOR A STUDENT'S NAME"
              value={searchTerm}
              onChange={handleChange}
              margin="dense"
              defaultValue="Naked input"
            />
          </form>
        </Grid>

        {searchResults.map((data) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
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
