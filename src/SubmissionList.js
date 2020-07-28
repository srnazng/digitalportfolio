import React, { Component } from "react";
import SubmissionCard from './Card.js';
import data from './csvjson.json';

function SubmissionList() {

    const Data = data.map((data) => {
        return (
            <SubmissionCard key={data.email} projectName={data.teamName} memberNames={data.memberNames} description={data.description} inspiration={data.inspiration} challenges={data.challenge} accomplishments={data.accomplishments} learn={data.learn} nextSteps={data.nextSteps} link1={data.link1} link2={data.link2} />
        )
    }
    )

    return (
        <div className="todoListMain">
            {Data}
        </div>
    );

}

export default SubmissionList;