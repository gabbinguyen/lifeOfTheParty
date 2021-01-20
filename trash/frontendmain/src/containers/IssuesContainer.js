import React, { Component } from 'react';
import IssueCard from '../Cards/IssueCard';

const IssuesContainer = (props) => {
    return (
        <div className="projects-column-container">
            <div className="issues-column">
                {props.issues.map(issues => <IssueCard deleteIssue={props.deleteIssue} editIssue={props.editIssue} handleClick={props.showIssuePage} key={issues.id} issues={issues} />)}
            </div>
        </div>
    );
}

export default IssuesContainer;