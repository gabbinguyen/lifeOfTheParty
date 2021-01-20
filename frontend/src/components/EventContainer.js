import React, { Component } from 'react'
import EventCard from './EventCard'
import {Button, Card, Row, Col} from 'react-bootstrap'

let eventsURL = 'http://localhost:3000/events/'

export default class EventContainer extends Component {
    state={
        events: [],
    }

    componentDidMount(){
        fetch(eventsURL, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(events => this.setState({events}))
    }

    handleDelete = (event) => {
        fetch(`http://localhost:3000/events/${event.id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        let array = this.state.events;
        
        let i = array.indexOf(event);
            if (i > -1) {
                array.splice(i, 1);
            }
        this.setState({
            events: array
        })
    }

    // handleEditEvent = info => {
    //     fetch(`http://localhost:3000/events/${event.id}`, {
    //       method: 'PATCH',
    //       headers: {
    //         'Auth-Key': localStorage.getItem('auth_key'),
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //       },
    //       body: JSON.stringify(info)
    //     })
    //       .then(res => res.json())
    //       .then(event => console.log(event));
    //   };
    

    render() {
        const myEvents = this.state.events.map(event => 
            <Card > 
                <EventCard 
                    key={event.id}
                    event={event}
                    name={event.name} 
                    date={event.date} 
                    location={event.location}
                    handleDelete={this.handleDelete}
                    handleEditEvent={this.handleEditEvent}
                    />
            </Card> 
            )

        return (
            <div>
                {myEvents}
            </div>
        )
    }
}
