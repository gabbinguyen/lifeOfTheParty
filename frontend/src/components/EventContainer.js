import React, { Component } from 'react'
import EventCard from './EventCard'
import {Button, Card, Row, Col} from 'react-bootstrap'
import ControlPanel from './ControlPanel'
import NewEvent from './NewEvent'
import NewEventModal from './NewEventModal'

let eventsURL = 'http://localhost:3000/events/'
let usersURL = "http://localhost:3000/users/"

export default class EventContainer extends Component {
    state={
        users: [],
        events: []
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
        .then(events => {
            this.setState({events: events})
        })

        fetch(usersURL, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(users => this.setState({users: users})
        )
    }

// New Attribute Handlers 

    newEventHandler = (data) => {
        this.setState({events: data})
    }

    addCollabHandler = (data) => {
        this.setState({events: data})
    }

    newAccomHandler = (data) => {
        this.setState({events: data})    
    }

    newActHandler = (data) => {
        this.setState({events: data})
    }

    newFlightHandler = (data) => {
        this.setState({events: data})
    }

    newExpenseHandler = (data) => {
        this.setState({events: data})
    }


// Event Delete
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

// Collab Delete
handleCollabDelete = (collaborator) => {
    let events = this.state.events.filter(event=>event.id !== collaborator.event_id)
    fetch(`http://localhost:3000/collaborators/${collaborator.id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Auth-Key': localStorage.getItem('auth_key')
        }
    })

    let event = this.state.events.filter(event => event.id == collaborator.event_id)
    let totalEvents = [...events,event[0]]
    totalEvents.sort(function(a,b){
        return a.id-b.id
    })
    this.setState({
            events: totalEvents
        })
    let filteredEvent = event[0]
    let filteredAct = event[0].collaborators
    
    let i = filteredEvent.collaborators.indexOf(collaborator);
        if (i > -1) {
            filteredEvent.collaborators.splice(i, 1);
        }

}

// Accomodation Delete
handleAccomDelete = (accommodation) => {
    console.log(accommodation)
    let events = this.state.events.filter(event=>event.id !== accommodation.event_id)
    fetch(`http://localhost:3000/accommodations/${accommodation.id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Auth-Key': localStorage.getItem('auth_key')
        }
    })

    let event = this.state.events.filter(event => event.id == accommodation.event_id)
    let totalEvents = [...events,event[0]]
    totalEvents.sort(function(a,b){
        return a.id-b.id
    })
    this.setState({
            events: totalEvents
        })
    let filteredEvent = event[0]
    let filteredAct = event[0].accommodations
    
    let i = filteredEvent.accommodations.indexOf(accommodation);
        if (i > -1) {
            filteredEvent.accommodations.splice(i, 1);
        }

}

// Activities Delete
    handleActDelete = (activity) => {
        let events = this.state.events.filter(event=>event.id !== activity.event_id)
        fetch(`http://localhost:3000/activities/${activity.id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })

        let event = this.state.events.filter(event => event.id == activity.event_id)
        let totalEvents = [...events,event[0]]
        totalEvents.sort(function(a,b){
            return a.id-b.id
        })
        this.setState({
                events: totalEvents
            })
        let filteredEvent = event[0]
        let filteredAct = event[0].activities
        
        let i = filteredEvent.activities.indexOf(activity);
            if (i > -1) {
                filteredEvent.activities.splice(i, 1);
            }

    }

// Flight Delete
handleFlightDelete = (flight) => {
    let events = this.state.events.filter(event=>event.id !== flight.event_id)
    fetch(`http://localhost:3000/flights/${flight.id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Auth-Key': localStorage.getItem('auth_key')
        }
    })

    let event = this.state.events.filter(event => event.id == flight.event_id)
    let totalEvents = [...events,event[0]]
    totalEvents.sort(function(a,b){
        return a.id-b.id
    })
    this.setState({
            events: totalEvents
        })
    let filteredEvent = event[0]
    let filteredAct = event[0].flight
    
    let i = filteredEvent.flights.indexOf(flight);
        if (i > -1) {
            filteredEvent.flights.splice(i, 1);
        }
}

// Expense Delete
handleExpenseDelete = (expense) => {
    let events = this.state.events.filter(event=>event.id !== expense.event_id)
    fetch(`http://localhost:3000/expenses/${expense.id}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Auth-Key': localStorage.getItem('auth_key')
        }
    })

    let event = this.state.events.filter(event => event.id == expense.event_id)
    let totalEvents = [...events,event[0]]
    totalEvents.sort(function(a,b){
        return a.id-b.id
    })
    this.setState({
            events: totalEvents
        })
    let filteredEvent = event[0]
    let filteredAct = event[0].expense
    
    let i = filteredEvent.expenses.indexOf(expense);
        if (i > -1) {
            filteredEvent.expenses.splice(i, 1);
        }
}
    
    render() {
        return (
            <div>
                <NewEventModal newEvent={this.newEventHandler}  /> <br/>
                {/* <NewEvent newEvent={this.newEventHandler} />  */}
            {this.state.events.map(event => 
                    <EventCard 
                        users={this.state.users}
                        key={event.id}
                        event={event}
                        name={event.name} 
                        date={event.date}
                        collaborators={event.collaborators} 
                        activities={event.activities}
                        accommodations={event.accommodations}
                        expenses={event.expenses}
                        flights={event.flights}
                        location={event.location}
                        addCollab={this.addCollabHandler}
                        collabDelete={this.handleCollabDelete}
                        handleDelete={this.handleDelete}
                        newAccom={this.newAccomHandler}
                        accomDelete={this.handleAccomDelete}
                        newAct={this.newActHandler}
                        actDelete={this.handleActDelete}
                        newFlight={this.newFlightHandler}
                        flightDelete={this.handleFlightDelete}
                        newExpense={this.newExpenseHandler}
                        expenseDelete={this.handleExpenseDelete}
                        handleEditEvent={this.handleEditEvent}
                        />
            )} 
            </div>
        )
    }
}
