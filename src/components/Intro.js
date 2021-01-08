import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid, Card, CardMedia, createMuiTheme, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import prof from "../media/prof.png";
import Resume from "../media/SerenaZeng_Resume.pdf";

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
    body: {
        color: "white",
        paddingTop: "10%",
        position: "absolute",
        top: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        textAlign: "center",
        justify: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "50px",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "40px",
        },
    },
    image: {
        width: "10%",
        minWidth: "200px",
        paddingTop: "80px",
    },
    subheading: {
        textAlign: "left",
        color: "#75c9d3",
        [theme.breakpoints.down('xs')]: {
            fontSize: "20px",
        },
    },
    paragraph: {
        textAlign: "left",
        [theme.breakpoints.down('xs')]: {
            fontSize: "16px",
        },
    },
    button: {
        borderRadius: "0px",
        fontSize: "20px",
        border: "none",
        backgroundColor: 'rgba(212, 196, 255, 0.9)',
        '&:hover': {
            backgroundColor: "rgba(211, 107, 255, 0.8)",
        },
    }
}
);

function Intro() {
    const classes = useStyles();
    return (
        <div theme={theme}>
            <Grid container
                spacing={4}
                direction="column"
                display="flex"
                align="center"
                alignItems="center"
                style={{ minHeight: '800px' }}
            >
                <Grid item xs="12"
                    align="center"
                >
                    <CardMedia
                        className={classes.image}
                        component="img"
                        image={prof}
                        title="Profile Photo"
                    />
                </Grid>
                <Grid item xs="12" align="center">
                    <Typography variant="h6" >
                        Hi my name is
                    </Typography>
                    <Typography variant="h1" className={classes.heading}>
                        Serena Zeng
                    </Typography>
                </Grid>
                <Grid item xs="7">
                    <Typography variant="h5" className={classes.subheading} >
                        <b>Welcome to my portfolio!</b>
                    </Typography>
                    <Typography variant="h6" className={classes.paragraph} >
                        I am a student at Rutgers University majoring in Computer Science. Some of my interests include web development, machine learning, and STEM education.
                    </Typography>
                </Grid>
                <Grid item xs="7">
                    <Button variant="contained" className={classes.button} href={Resume}>Resume</Button>
                </Grid>
            </Grid>

        </div >
    );
}

export default Intro;
