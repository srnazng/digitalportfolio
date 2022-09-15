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
                                    <b>Meta (Facebook)</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <b>MetaU Software Engineering Intern</b><br />
                                    <i>May 2022 - August 2022</i>
                                    <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Designed and developed an Android mobile app to help roommates/housemates organize their chores and expenses</li>
                                        <li>Implemented performance optimizations, OO design, API integration, unit testing, Parse database, Firebase Messaging</li>
                                        <li>Technologies: Android Studio, Java, Firebase, Parse, Git/Github, JUnit4, Google OAuth2, Figma, Postman, REST APIs</li>
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
                                    <b>Verizon</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <b>Device Technology Intern</b><br />
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
                                    <b>Software Development Intern</b><br />
                                    <i>August 2021 - Present</i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Designed & developed <a href="https://janj-activity-tracker.com/">web</a>, <a href="https://play.google.com/store/apps/details?id=com.janj.activity.tracker">
                                            Android</a>, and <a href="https://apps.apple.com/us/app/janj-activity-tracker/id1632976353">iOS</a> apps for students to track volunteer hours. Includes backend, admin portal for data analysis.</li>
                                        <li>Managed and mentored team of interns helping develop the mobile app portion of the project. </li>
                                        <li>Technologies used: Reactjs, React Native, Django REST Framework, JavaScript, Python, REST APIs, Heroku</li>
                                    </ul>
                                    <br />
                                </Typography>
                                <Typography variant="p2" >
                                    <b>Programs Intern</b><br />
                                    <i>July 2020 - August 2021</i>
                                    <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Managed STEM programs for hundreds of students across NJ including the Crack the Code Workshop Series, ADP Tech Challenge, EY Tech Talks, and JANJ App Challenge.</li>
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
                                    <b>HackRU</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <b>RND Director</b><br />
                                    <i>
                                        May 2022 - Present
                                    </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Manage 6 project teams under HackRU's research and development branch</li>
                                    </ul>
                                </Typography><br />
                                <Typography variant="p2" >
                                    <b>Project Lead</b><br />
                                    <i>
                                        Jan 2021 - Aug 2022
                                    </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Led weekly team meetings, worked closely with developers, reviewed code, trained and onboarded 4 new members to the MentorQ team</li>
                                        <li>Tested and deployed MentorQ for Rutger's HackRU events</li>
                                    </ul>
                                </Typography><br />
                                <Typography variant="p2" >
                                    <b>Software Architect</b><br />
                                    <i>
                                        July 2020 - Jan 2021
                                    </i> <br /> <br />
                                </Typography>
                                <Typography variant="p1">
                                    <ul>
                                        <li>Develop and maintain web app called MentorQ which connects hackathon attendees to mentors at Rutgers' biannual HackRU events</li>
                                        <li>Created an administration web portal, user feedback feature, UI redesign, REST API development & integration</li>
                                        <li>Technologies: ReactJS, JavaScript, Redux, Material-UI, REST APIs, Django REST Framework, Jest</li>
                                    </ul>
                                </Typography><br />
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
                                    <b>Built By Me LLC</b>
                                </Typography>
                                <Typography variant="p2" >
                                    <b>STEM Instructor and Curriculum Developer</b><br />
                                    <i>
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