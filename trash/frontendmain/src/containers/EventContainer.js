import React, { Component } from 'react'
import EventCard from '../components/EventCard'
import {Button, Card} from 'react-bootstrap'

export default class EventContainer extends Component {
    render() {
        const myEvents = this.props.events.map(event => 
            <Card > 
                <EventCard 
                    key={event.id}
                    event={event}
                    name={event.name} 
                    date={event.date} 
                    location={event.location}
                    />
                <Button href ="/event"> Edit </Button>
            </Card> 
            )
        return (
            <div>
                {myEvents}
            </div>
        )
    }
}
