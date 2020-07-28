import React, { Component } from 'react';
import logo from './logo.svg';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SubmissionCard from "./Card.js";
import MTPSLogo from './MTPSLogo.png';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        height: '800',
        paddingTop: "100px",
        paddingBottom: "50%",
    },
    image: {
        alignItems: 'center',
        width: '100px',
        position: 'absolute',
        top: '20px',
        left: '20px',
    },
    heading: {
        textAlign: 'center',
    },
    text: {
        alignItems: 'center',
        textAlign: 'center',

    },
    button: {
        color: 'white',
    },
});

function createList(item) {
    return (
        <li key={item.key}>
            <SubmissionCard projectName="" memberNames="" description="" inspiration="" challenges="" accomplishments="" learn="" nextSteps="" link1="" link2="" />
        </li>
    )
}

const classes = useStyles();

class Submissions extends Component() {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.createList = this.createList.bind(this);
    }

    render() {
        return (
            <div className={classes.root} >
                <Grid >
                    <Grid item xs="12" spacing="1">
                        <IconButton to="/" component={RouterLink} className={classes.image}>
                            <img src={MTPSLogo} alt="Logo" justify="center" className={classes.image} />
                        </IconButton>

                        <Typography variant="h1" className={classes.heading}>
                            Submissions
                    </Typography>
                    </Grid>
                    <Grid item xs="12">
                        <Typography variant="body1" justify="center" className={classes.text}>
                            Teams of students submitted their project for either the Social Good Challenge or the Marketing Challenge!
                    </Typography>
                    </Grid>
                    <Grid item xs="12">
                        <SubmissionCard projectName="" memberNames="" description="" inspiration="" challenges="" accomplishments="" learn="" nextSteps="" link1="" link2="" />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default Submissions;