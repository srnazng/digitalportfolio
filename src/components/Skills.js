import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const words = [
    {
        text: 'ReactJS',
        value: 93,
    },
    {
        text: 'Java',
        value: 94,
    },
    {
        text: 'C',
        value: 94,
    },
    {
        text: 'JavaScript',
        value: 85,
    },
    {
        text: 'Django',
        value: 80,
    },
    {
        text: 'REST APIs',
        value: 90,
    },
    {
        text: 'Git/Github',
        value: 80,
    },
    {
        text: 'CSS',
        value: 95,
    },
    {
        text: 'Postman',
        value: 85,
    },
    {
        text: 'Material-UI',
        value: 85,
    },
    {
        text: 'Firebase',
        value: 85,
    },
    {
        text: 'Python',
        value: 70,
    },
    {
        text: 'Bootstrap',
        value: 80,
    },
    {
        text: 'Octave',
        value: 70,
    },
    {
        text: 'HTML',
        value: 70,
    },
    {
        text: 'Canva',
        value: 70,
    },
    {
        text: 'Heroku',
        value: 70,
    },
]

const callbacks = {
    getWordTooltip: word => ``,
}

const options = {
    colors: ["#75c9d3", "#51e3f0", "rgb(212, 196, 255)", "rgb(211, 107, 255)", "skyblue", "#af6acc", "black", "navy", "darkblue", "indigo"],
    fontSizes: [40, 90],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    transitionDuration: 1000
};

const useStyles = makeStyles({
    heading: {
        textAlign: "center",
        color: "#070033",
        padding: "20px",
    },
});

function Skills() {
    const classes = useStyles();
    return <div>
        <Typography variant="h2" className={classes.heading}>
            Skills and Tools
        </Typography>
        <ReactWordcloud
            callbacks={callbacks}
            options={options}
            words={words} />
    </div>
}

export default Skills;