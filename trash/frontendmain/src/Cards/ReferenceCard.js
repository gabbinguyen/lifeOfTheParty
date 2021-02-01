import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { ReactTinyLink } from "react-tiny-link";
import Card from '@material-ui/core/Card';

const ReferenceCard = (props) => {
    return (

        <div>
            <div className="reference-card">
                <h3 style={{color: "white"}}>{props.references.note}</h3>
                
                    <div className="tiny-link" onMouseEnter={() => props.referenceHover(props.references)}>
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url={props.references.url}
                            
                        />
                    </div>
                
       
            </div>
        </div>
    )

}




export default ReferenceCard