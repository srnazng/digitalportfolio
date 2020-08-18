import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GithubLogo from '../media/github.png';
import LinkedinLogo from '../media/linkedin.png';
import EmailLogo from '../media/email.png';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        position: "fixed",
        bottom: "10px",
        left: "10px",
        display: "flex",
        flexDirection: "column",
    },
    imageIcon: {
        width: "50px",
        padding: "0px",
        margin: "0px"
    },
    iconRoot: {
        align: "center",
        backgroundColor: "rgb(245, 254, 255)",
    }
}));

function openEmail() {
    window.location.href = `mailto:srnazng@gmail.com`;
}

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab aria-label="add" className={classes.iconRoot} href="https://github.com/srnazng">
                <img className={classes.imageIcon} src={GithubLogo} />
            </Fab>
            <Fab aria-label="add" className={classes.iconRoot} href="https://www.linkedin.com/in/serena-zeng-b57a37180/">
                <img className={classes.imageIcon} src={LinkedinLogo} />
            </Fab>
            <Fab aria-label="add" className={classes.iconRoot} onClick={openEmail}>
                <img className={classes.imageIcon} src={EmailLogo} />
            </Fab>
        </div >
    );
}