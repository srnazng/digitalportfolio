import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Paper, Grid } from "@material-ui/core";
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
                spacing={0}
                style={{ minHeight: '300px' }}
                margin="10px"
            >
                <Grid xs={0} sm={0} md={1} lg={2} xl={2}></Grid>
                <Grid xs={12} sm={12} md={10} lg={8} xl={8}>
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
                                    <b>Verizon</b>
                                </Typography>
                                <Typography variant="p2" >
                                    Device Technology Intern<br />
                                    <i>June 2021 - August 2021</i>
                                    <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Verizon Modeling and Analytics Systems Team <br />
                                    <ul>
                                        <li>Developed real-time analytics web portal with data visualizations and proactive alarming</li>
                                        <li>Developed an automated email notification system for performance degradation alarms</li>
                                        <li>Technologies: Reactjs, JavaScript, Restful API integration, Node.js, cron, Postgres</li>
                                    </ul>
                                    <br />
                                    Verizon Identity Management Team<br />
                                    <ul>
                                        <li>Performed research on different trends in identity and authentication technology (digital identity, biometrics, self-sovereign identity, decentralization, etc.) and how upcoming technology can be leveraged by the company</li>
                                        <li>Developed test plan for vendors offering behavioral biometric technology</li>
                                        <li>Helped create demo videos for the team's proof of concepts that were presented to leadership and partner companies</li>
                                    </ul>
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
                                    <b>Junior Achievement of NJ</b>
                                </Typography>
                                <Typography variant="p2" >
                                    Software Development Intern<br />
                                    <i>August 2021 - Present</i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Develop proof of concept application for students to track hours spent volunteering at JANJ. Includes developing a web app and admin portal.</li>
                                        <li>Manage team of volunteers developing the mobile app portion of the project. </li>
                                        <li>Technologies used: Reactjs, Django REST Framework, JavaScript, Python, REST APIs, Heroku</li>
                                    </ul>
                                    <br />
                                </Typography>
                                <Typography variant="p2" >
                                    Programs Intern<br />
                                    <i>July 2020 - August 2021</i>
                                    <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Managed STEM programs for hundreds of students across NJ including the <a href="https://www.crackthecodeja.com/">Crack the Code Workshop Series</a>, <a href="https://www.adptechchallenge.com/">ADP Tech Challenge</a>, EY Tech Talks, and JANJ App Challenge.</li>
                                        <li>Reached 550+ students and worked with 80+ corporate volunteers and 80+ high school volunteers overall. </li>
                                        <li>Developed workshop curriculum (Python, HTML/CSS, JavaScript, etc.), program marketing, communicated with corporate partners.</li>
                                        <li>Website development/maintenance (Reactjs, Wix, dotCMS).</li>
                                    </ul>
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
                                    <b>Project Lead and Software Architect</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>
                                        HackRU Research and Development Team Volunteer<br />
                                        June 2020 - Present
                                    </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Lead frontend and backend development teams for MentorQ, a web application which connects hackathon attendees with mentors at
                                    Rutgers’ biannual HackRU events
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
                                    <b>STEM Instructor and Curriculum Developer</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <i>
                                        Built By Me LLC <br />
                                        July 2020 - June 2021
                                    </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    Taught and developed curriculum for classes including Python, Pygames and Scratch
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <br /><br />
                </Grid>
                <Grid xs={0} sm={0} md={1} lg={2} xl={2}></Grid>
            </Grid>
        </Paper >
    );
}

export default Experience;