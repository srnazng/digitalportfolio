import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const words = [
    {
        text: 'ReactJS',
        value: 95,
    },
    {
        text: 'React Native',
        value: 87,
    },
    {
        text: 'Java',
        value: 93,
    },
    {
        text: 'Android Studio',
        value: 94,
    },
    {
        text: 'SQL',
        value: 90,
    },
    {
        text: 'HTML',
        value: 53,
    },
    {
        text: 'CSS',
        value: 57,
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
        text: 'REST APIs',
        value: 90,
    },
    {
        text: 'Git/Github',
        value: 60,
    },
    {
        text: 'Python',
        value: 70,
    },
    {
        text: 'Django',
        value: 76,
    },
    {
        text: 'Firebase',
        value: 50,
    },
    {
        text: 'Postman',
        value: 40,
    },
]

const callbacks = {
    getWordTooltip: word => ``,
}

const options = {
    colors: ["#75c9d3", "#51e3f0", "rgb(212, 196, 255)", "rgb(211, 107, 255)", "skyblue", "#af6acc", "black", "navy", "darkblue", "indigo"],
    fontSizes: [20, 70],
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
        padding: "0px",
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