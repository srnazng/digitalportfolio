import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import SummerLauren from './projectMedia/SummerLauren.mp4';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "30px",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    media: {
        marginTop: "0px",
        paddingTop: "0px",
        contentAlign: "center",
        justify: "center",
    }
}));

export default function SubmissionCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const preventDefault = (event) => event.preventDefault();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function showMedia(url) {
        console.log(url);
        return (
            <div width={1} className={classes.media}>
                <ReactPlayer url={SummerLauren} playing width="400px" justify="center" />
            </div>);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.projectName}
                subheader={props.memberNames}
            />
            <CardContent>
                {props.projectName == "Summer and Lauren's Social Good Website" ? showMedia("SummerLauren") : ""}
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>What inspired your project idea?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.inspiration}
                        <br /><br />
                    </Typography>
                    <Typography>What challenges did your team run into?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.challenges}
                        <br /><br />
                    </Typography>
                    <Typography>What accompmlishments are you proud of?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.accomplishments}
                        <br /><br />
                    </Typography>
                    <Typography>What did you learn?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.learn}
                        <br /><br />
                    </Typography>
                    <Typography>What are the next steps for you and your team?</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.nextSteps}
                        <br /><br />
                    </Typography>
                    <Typography>Links</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Link href={props.link1} >
                            {props.link1}
                        </Link>
                        <br />
                        <Link href={props.link2}>
                            {props.link2}
                        </Link>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
