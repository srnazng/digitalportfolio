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
        backgroundColor: "#75c9d3",
        width: "100vw",
        boxShadow: "none",
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
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
        backgroundColor: "#75c9d3",
        boxShadow: "none",
        minHeight: "300px"
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
                style={{ minHeight: '300px' }}
            >
                <Grid item xs={12}>
                    <Typography variant="h2">
                        <br />Experience<br />
                    </Typography>
                </Grid>
                <Grid item xs={0} sm={0} md={2} lg={2} xl={2}>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                    <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                        <ListItem button onClick={() => setSlide(0)} style={{ backgroundColor: slide === 0 ? 'rgba(212, 244, 228, 0.5)' : 'rgba(52, 92, 108, 0.08)' }}>
                            <ListItemText primary="Junior Achievement of NJ Internship" align="right" />
                        </ListItem>
                        <ListItem button onClick={() => setSlide(1)} style={{ backgroundColor: slide === 1 ? 'rgba(212, 244, 228, 0.5)' : 'rgba(52, 92, 108, 0.08)' }}>
                            <ListItemText primary="Computer Science Teacher Assistant" align="right" />
                        </ListItem>
                        <ListItem button onClick={() => setSlide(2)} style={{ backgroundColor: slide === 2 ? 'rgba(212, 244, 228, 0.5)' : 'rgba(52, 92, 108, 0.08)' }}>
                            <ListItemText primary="Built By Me LLC Instructor" align="right" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper} align="left">
                        {slide === 0 ?
                            <div>
                                <Typography variant="h5">
                                    Junior Achievement of NJ Intern
                            </Typography>
                                <Typography variant="p2" >
                                    <i>July 2020 - Present</i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    - Developed a React based website platform to display project submissions for Marlboro Township public school district's middle school <br />
                                - Marketing <br />
                                - Program Organization
                            </Typography>
                            </div>
                            : ""}
                        {slide === 1 ?
                            <div>
                                <Typography variant="h5" >
                                    Computer Science Teacher Assistant
                            </Typography>
                                <Typography variant="p2" >
                                    <i>March 2020 - June 2020 </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    AP Computer Science A and Introduction to Computer Science with Python teacher assistant at Middlesex County Academy for Science, Mathematics and Engineering Technologies
                            </Typography>
                            </div>
                            : ""}
                        {slide === 2 ?
                            <div>
                                <Typography variant="h5" >
                                    Built By Me LLC Instructor
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