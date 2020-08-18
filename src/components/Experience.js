import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Card, Paper, Grid } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
        backgroundColor: "#406584",
        width: "100vw",
        boxShadow: "none",
    },
    heading: {
        color: "white"
    },
    subheading: {
        textAlign: "left",
        color: "#75c9d3",
    },
    paragraph: {
        textAlign: "left",
    },
    paper: {
        paddingLeft: "20px",
        paddingTop: "5px",
        borderRadius: "0px",
        backgroundColor: "rgba(117, 201, 211, 0)",
        boxShadow: "none",
        minHeight: "300px",
        color: "white"
    },
    list: {
        marginLeft: "40px",
    },
    button: {
        '&:hover': {
            background: "none",
        },
        border: 1,
        borderColor: 'black',
    }
});

function Experience() {
    const classes = useStyles();
    const [slide, setSlide] = useState(0);

    return (
        <Paper className={classes.root}>
            <Grid container
                spacing={1}
                align="center"
                justify="center"
                style={{ minHeight: '300px' }}
            >
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.heading}>
                        <br />Experience<br />
                    </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={3} lg={3} xl={2}>
                    <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                        <ListItem button onClick={() => setSlide(0)} style={{ backgroundColor: slide === 0 ? 'rgba(212, 196, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)' }}>
                            <ListItemText primary="Junior Achievement of NJ Internship" align="right" />
                        </ListItem>
                        <ListItem button onClick={() => setSlide(1)} style={{ backgroundColor: slide === 1 ? 'rgba(212, 196, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)' }}>
                            <ListItemText primary="Computer Science Teacher Assistant" align="right" />
                        </ListItem>
                        <ListItem button onClick={() => setSlide(2)} style={{ backgroundColor: slide === 2 ? 'rgba(212, 196, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)' }}>
                            <ListItemText primary="Built By Me LLC Instructor" align="right" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
                    <Paper className={classes.paper} align="left">
                        {slide === 0 ?
                            <div>
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Junior Achievement of NJ Internship</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>July 2020 - Present</i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    - Web Development <br />
                                - Marketing <br />
                                - Program Organization
                            </Typography>
                            </div>
                            : ""}
                        {slide === 1 ?
                            <div>
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Computer Science Teacher Assistant</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>March 2020 - June 2020 </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    AP Computer Science A and Introduction to Computer Science with Python teacher assistant at Middlesex County Academy for Science, Mathematics and Engineering Technologies
                                <br /><br />
                                </Typography>
                            </div>
                            : ""}
                        {slide === 2 ?
                            <div>
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Built By Me LLC Instructor</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>July 2020 - Present </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Taught and developed curriculum for classes including Pygames and Scratch
                            </Typography>
                            </div>
                            : ""}
                    </Paper>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default Experience;