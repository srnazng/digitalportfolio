import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Card, Paper, Grid, Link } from "@material-ui/core";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

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
        backgroundColor: "white",
        width: "100vw",
        boxShadow: "none",
        paddingBottom: "30px",
    },
    heading: {
        textAlign: "center",
        color: "#070033"
    },
    subheading: {
        textAlign: "left",
        color: "#75c9d3",
    },
    paragraph: {
        textAlign: "left",
    },
    timeline: {
        position: "relative",
        flex: 0
    },
    oppositeContent: {
        flex: 0
    }
});

function Experience() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container
                spacing={1}
                style={{ minHeight: '300px' }}
                margin="10px"
            >
                <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Typography variant="h2" className={classes.heading} >
                        <br />Education<br />
                    </Typography>
                    <Timeline align="left" className={classes.timeline}>
                        <TimelineItem>
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Rutgers University Honors Program</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>Class of 2024</i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Computer Science major
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem >
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Middlesex County College High School Scholar</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>2019-2020 </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    - Discrete Mathematics <br />
                                    - Linear Algebra
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Typography variant="h2" className={classes.heading}>
                        <br />Experience<br />
                    </Typography>
                    <Timeline >
                        <TimelineItem align="left">
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
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
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem align="left">
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Built By Me LLC Instructor</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>July 2020 - Present </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Taught and developed curriculum for classes including Pygames and Scratch
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Typography variant="h2" className={classes.heading}>
                        <br />Certification<br />
                    </Typography>
                    <Timeline >
                        <TimelineItem align="left">
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Machine Learning</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>August 2020</i> <br /><br />
                                    Stanford University through Coursera <br />
                                    Certificate ID: SU3UTZTM7VR4<br />
                                    <Link href="https://www.coursera.org/account/accomplishments/certificate/SU3UTZTM7VR4">View Certificate</Link>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem align="left">
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>CS50: Introduction to Computer Science</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>January 2020</i> <br /><br />
                                    HarvardX - An Online Learning Initiative by Harvard University through edX <br />
                                    Certificate ID: 2e53a7758765434ab2fba56326160f79<br />
                                    <Link href="https://cs50.harvard.edu/certificates/7236c07e-8af7-455c-b343-df0170e7e597">View Certificate</Link>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem align="left">
                            <TimelineOppositeContent
                                className={classes.oppositeContent}
                                color="textSecondary"
                            >
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Typography variant="h5" className={classes.subheading}>
                                    <b>Programming Foundations with JavaScript, HTML and CSS</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>August 2017</i> <br /><br />
                                    Duke University through CourseraX <br />
                                    Certificate ID: EETAEHGZYMJN9<br />
                                    <Link href="https://www.coursera.org/account/accomplishments/verify/EETAEHGZYMJN">View Certificate</Link>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default Experience;