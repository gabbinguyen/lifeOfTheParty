import React, { Component } from 'react';

const Reference = (props) => {
    return (

        <div className="references-preview">
                <div class="box">
                    <object data={props.url} width="800" height="800" type="text/html"> </object>
                </div>
            
        </div>
    )

}

export default Reference