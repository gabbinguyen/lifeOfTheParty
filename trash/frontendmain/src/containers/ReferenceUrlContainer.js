import React, { Component } from 'react';
import Reference from '../Cards/Reference';

const ReferenceUrlContainer = (props) => {
    return (
        <div className="references-preview">
            {props.references.map(references => <Reference key={references.id} references={references}/>)}
        </div>
    );
}

export default ReferenceUrlContainer;