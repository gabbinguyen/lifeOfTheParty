import React, { Component } from 'react';
import ReferenceCard from '../Cards/ReferenceCard';

const ReferencesContainer = (props) => {
    return (
        <div className="references-column">
            {props.references.map(references => <ReferenceCard referenceHover={props.referenceHover} key={references.id} references={references}/>)}
        </div>
    );
}

export default ReferencesContainer;