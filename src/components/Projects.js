import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Card, Paper, Grid, CardMedia, Link, Chip, ThemeProvider } from "@material-ui/core";
import mtpshacks_demo from '../media/mtpshacks_demo.png';
import mentorq_demo from '../media/mentorq_demo.png';
import white_hackru from '../media/white_hackru.png';
import prof from '../media/prof.png';
import mybus from '../media/mybus.png';
import mtpshacks from '../media/mtpshacks.png';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReactPlayer from 'react-player';
import theme from '../theme.js';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f2f2f2",
        boxShadow: "none",
    },
    title: {
        color: "#070033",
    },
    card: {
        paddingTop: "20px",
        width: "98%",
        height: "99%",
        backgroundColor: "rgba(212, 196, 255, 0.9)",
        borderRadius: "0px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flext",
        direction: "column",
        '&:hover': {
            boxShadow: 3,
            width: "100%",
            height: "100%",
        }
    },
    image: {
        width: "50%",
        marginBottom: "30px",
    },
    dialogTitle: {
        backgroundColor: "rgb(212, 196, 255)",
    },
    dialogimage: {
        width: "80%",
    },
    text: {
        display: "flex",
        flex: "1 0 auto",
        alignItems: "flex-end",
        justifyContent: "center",
        margin: "10px",
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h4">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

function Experience() {
    const classes = useStyles();
    const [slide, setSlide] = useState(0);
    const [open0, setOpen0] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClickOpen0 = () => {
        setOpen0(true);
    };

    const handleClose0 = () => {
        setOpen0(false);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <Paper className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container
                    spacing={2}
                    align="center"
                    style={{ minHeight: '400px' }}
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography variant="h2" className={classes.title}>
                            <br />Projects
                        </Typography>
                        <Typography variant="p2" className={classes.text}>
                            Click project to learn more<br /> <br />
                        </Typography>
                    </Grid>
                    <Grid container
                        spacing={4}
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={10} sm={7} md={3} lg={2} xl={2}>
                            <Card className={classes.card} onClick={handleClickOpen0}>
                                <Typography variant="h5" className={classes.text} >
                                    MentorQ
                            </Typography>

                                <CardMedia component="img" image={white_hackru} className={classes.image} />
                                <Chip label="React" color="primary" /> <Chip label="Redux" /> <Chip label="Material UI" color="secondary" />

                            </Card>
                        </Grid>

                        <Dialog onClose={handleClose0} aria-labelledby="customized-dialog-title" open={open0}>
                            <DialogTitle onClose={handleClose0} className={classes.dialogTitle}>
                                MentorQ
                        </DialogTitle>
                            <DialogContent dividers align="center">
                                <CardMedia component="img" image={mentorq_demo} className={classes.dialogimage} />
                                <Typography gutterBottom align="left">
                                    <br />
                                MentorQ is a web based system to connect hackers to mentors at Rutgers University's virtual hackathon in Fall 2020.
                                As a frontend developer on the MentorqQ team, I have worked with API integration, the administration view, user feedback system, website design, and more.
                                The MentorQ frontend was built using a React framework and styled with Material-UI.
                            </Typography>
                            </DialogContent>
                        </Dialog>


                        <Grid item xs={10} sm={7} md={3} lg={2} xl={2}>
                            <Card className={classes.card} onClick={handleClickOpen1}>
                                <Typography variant="h5" className={classes.text}>
                                    MTPSHacks Website
                                </Typography>

                                <CardMedia component="img" image={mtpshacks} className={classes.image} />
                                <Chip label="React" color="primary" /> <Chip label="Material UI" color="secondary" />
                            </Card>
                        </Grid>

                        <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1}>
                            <DialogTitle onClose={handleClose1} className={classes.dialogTitle}>
                                MTPSHacks Submission Site
                        </DialogTitle>
                            <DialogContent dividers align="center">
                                <CardMedia component="img" image={mtpshacks_demo} className={classes.dialogimage} />
                                <Typography gutterBottom align="left">
                                    <br />
                                The MTPSHacks website platform displayed project submissions for Marlboro Township public school district's middle school hackathon.
                                The 50+ student submissions originally through a Google form could be viewed by students, parents, as well as sponsors of the hackathon.
                                The website was created using a React framework, styled using Material-UI, and hosted using Heroku.
                            </Typography>
                                <Link href="https://mtpshacks.herokuapp.com/" >
                                    View live site here
                            </Link>
                            </DialogContent>
                        </Dialog>



                        <Grid item xs={10} sm={7} md={3} lg={2} xl={2}>
                            <Card className={classes.card} onClick={handleClickOpen2}>
                                <Typography variant="h5" className={classes.text}>
                                    MyBus
                                </Typography>

                                <CardMedia component="img" image={mybus} className={classes.image} />
                                <Chip label="HTML" color="primary" /> <Chip label="CSS" color="secondary" /> <Chip label="JavaScript" /> <Chip label="Firebase" /> <Chip label="Bootstrap" color="secondary" />
                            </Card>
                        </Grid>

                        <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
                            <DialogTitle onClose={handleClose2} className={classes.dialogTitle}>
                                MyBus
                            </DialogTitle>
                            <DialogContent dividers align="center">
                                <ReactPlayer url='https://youtu.be/fD_90OBuaqU' playing width="auto" />
                                <Typography gutterBottom align="left">
                                    <br />
                                MyBus is a product to improve communication through the school bus system consisting of a trackerBox, mobile application and administration website
                                My role in this project was making the trackerBox using an Arduino Uno and GPS/LTE shield. I also created the administration site using HTML, CSS and JavaScript.
                                The site was styled using Bootstrap and hosted using Firebase hosting. All authorization and user information was stored through a Firestore database.
                                <br /><br />
                                MyBus won the 2019 Congressional App Challenge. Our submission video can be seen <Link href="https://youtu.be/Vz4HAo7gtr4"> <u>here</u></Link>.
                                <br /><br />
                                </Typography>

                                <Typography variant="h6">
                                    Articles on MyBus
                                </Typography>
                                <div align="left">
                                    <ul>
                                        <li>
                                            <Link href="https://pallone.house.gov/media/press-releases/pallone-announces-winner-2019-congressional-app-challenge#:~:text=Pallone%20Announces%20Winner%20of%202019%20Congressional%20App%20Challenge,-January%206%2C%202020&text=Serena%20Zeng%20and%20Adhya%20Khare,school%20officials%2C%20and%20bus%20drivers." >
                                                <u>NJ Congressman Frank Pallone's Press Release</u>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.mycentraljersey.com/story/news/education/in-our-schools/2020/01/10/nj-students-pallone-announces-winners-congressional-app-challenge/2797282001/">
                                                <u>MyCentralJersey</u>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.tapinto.net/articles/piscataway-student-wins-congressional-app-challenge-for-mybus">
                                                <u>TapInto</u>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </DialogContent>
                        </Dialog>



                        <Grid item xs={10} sm={7} md={3} lg={2} xl={2}>
                            <Link href="https://github.com/srnazng/digitalportfolio" style={{ textDecoration: 'none' }}>
                                <Card className={classes.card} spacing={1}>
                                    <Typography variant="h5" className={classes.text}>
                                        Digital Portfolio
                                    </Typography>

                                    <CardMedia component="img" image={prof} className={classes.image} />
                                    <Chip label="React" color="primary" /> <Chip label="Material UI" color="secondary" />
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Paper >
    );
}

export default Experience;