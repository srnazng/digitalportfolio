import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Card, Paper, Grid, CardMedia, Link } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import hackru from '../media/hackru.jpg';
import white_hackru from '../media/white_hackru.png';
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

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
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
        backgroundColor: "#070033",
        width: "100vw",
        boxShadow: "none",
    },
    title: {
        color: "white",
    },
    card: {
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingTop: "20px",
        width: "80%",
        height: "100%",
        backgroundColor: "rgba(212, 196, 255, 0.9)",
        borderRadius: "0px",
    },
    image: {
        width: "80%",
        marginBottom: "30px",
    },
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
            <Grid container
                spacing={2}
                align="center"
                style={{ minHeight: '400px' }}
                alignItems="center"

            >
                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.title}>
                        <br />Projects <br /> <br />
                    </Typography>
                </Grid>
                <Grid container
                    spacing={4}
                    alignItems="stretch"
                    direction="row"
                    justify="center"
                >
                    <Grid item xs={10} sm={7} md={4} lg={2} xl={2}>
                        <Card className={classes.card} onClick={handleClickOpen0}>
                            <CardMedia component="img" image={white_hackru} className={classes.image} />
                            <Typography variant="h5">
                                Mentorq
                        </Typography>
                        </Card>
                    </Grid>

                    <Dialog onClose={handleClose0} aria-labelledby="customized-dialog-title" open={open0} >
                        <DialogTitle id="customized-dialog-title" onClose={handleClose0}>
                            Mentorq
                        </DialogTitle>
                        <DialogContent dividers >
                            <Typography gutterBottom>
                                Mentorq is a web based system to connect hackers to mentors at Rutgers University's virtual hackathon in Fall 2020.
                                As a frontend developer on the Mentorq team, I have worked with API integration, administration view, user feedback system, website design, and more.
                                The Mentorq frontend was built using a React framework and styled with Material-UI.
                            </Typography>
                        </DialogContent>
                    </Dialog>

                    <Grid item xs={10} sm={7} md={4} lg={2} xl={2}>
                        <Card className={classes.card} onClick={handleClickOpen1}>
                            <CardMedia component="img" image={mtpshacks} className={classes.image} />
                            <Typography variant="h5">
                                MTPSHacks Submission Site
                        </Typography>
                        </Card>
                    </Grid>

                    <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
                            MTPSHacks Submission Site
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                The MTPSHacks website platform displayed project submissions for Marlboro Township public school district's middle school hackathon.
                                The 50+ student submissions originally through a Google form could be viewed by students, parents, as well as sponsors of the hackathon.
                                The website was created using a React framework, styled using Material-UI, and hosted using Heroku.
                            </Typography>
                            <Link href="https://mtpshacks.herokuapp.com/" >
                                View live site here
                            </Link>
                        </DialogContent>
                    </Dialog>

                    <Grid item xs={10} sm={7} md={4} lg={2} xl={2}>
                        <Card className={classes.card} onClick={handleClickOpen2}>
                            <CardMedia component="img" image={mybus} className={classes.image} />
                            <Typography variant="h5">
                                <br />
                                MyBus
                        </Typography>
                        </Card>
                    </Grid>

                    <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose2}>
                            MyBus
                        </DialogTitle>
                        <DialogContent dividers>
                            <ReactPlayer url='https://youtu.be/fD_90OBuaqU' playing width="auto" />
                            <Typography gutterBottom>
                                <br />
                                MyBus is a product to improve communication through the school bus system consisting of a trackerBox, mobile application and administration website
                                My role in this project was making the trackerBox using an Arduino Uno and GPS/LTE shield. I also created the administration site using HTML, CSS and JavaScript.
                                The site was styled using Bootstrap and hosted using Firebase hosting. All authorization and user information was stored through a Firestore database.
                                <br /><br />
                                MyBus won the 2019 Congressional App Challenge. Our submission video can be seen <Link href="https://youtu.be/Vz4HAo7gtr4">here</Link>.
                                <br /><br />
                            </Typography>
                            <Link href="https://pallone.house.gov/media/press-releases/pallone-announces-winner-2019-congressional-app-challenge#:~:text=Pallone%20Announces%20Winner%20of%202019%20Congressional%20App%20Challenge,-January%206%2C%202020&text=Serena%20Zeng%20and%20Adhya%20Khare,school%20officials%2C%20and%20bus%20drivers." >
                                View Congressman Frank Pallone's article on MyBus!
                            </Link>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default Experience;