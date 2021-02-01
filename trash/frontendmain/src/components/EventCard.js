import React from 'react'

export default function EventCard(props) {
    return (
        <div>
            {props.event.name} <br /> 
            {props.event.date} <br /> 
            {props.event.location} <br /> <br />

        </div>
    )
}
