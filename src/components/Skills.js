import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
    {
        text: 'React',
        value: 95,
    },
    {
        text: 'Java',
        value: 94,
    },
    {
        text: 'JavaScript',
        value: 85,
    },
    {
        text: 'HTML',
        value: 80,
    },
    {
        text: 'APIs',
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
        text: 'Material UI',
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
        text: 'Microsoft Office',
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
    colors: ["white", "#75c9d3", "#51e3f0", "rgb(212, 196, 255)", "rgb(211, 107, 255)", "skyblue", "#af6acc", "black", "lightblue", "navy"],
    fontSizes: [40, 90],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    transitionDuration: 1000
};

function Skills() {
    return <ReactWordcloud
        callbacks={callbacks}
        options={options}
        words={words} />
}

export default Skills;