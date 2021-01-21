import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewFlight from './NewFlight.js'

export default class FlightCard extends Component {
    state = {
        flight_info: this.props.event.flights.map(flight => flight.flight_info),
        date: this.props.event.flights.map(flight => flight.date),
        time: this.props.event.flights.map(flight => flight.time)
    }
        
    newFlightHandler = (data) => {
        this.setState({flight_info: [...this.state.flight_info, data.flight_info]})
        this.setState({date: [...this.state.date, data.date]})
        this.setState({time: [...this.state.time, data.time]})
    }

    render() {
        return (
            <div>
            {this.state.flight_info} <br/> 
            {this.state.date} <br/> 
            {this.state.time} <br/> 
            <Button> <NewFlight event_id={this.props.event.id} newFlight={this.newFlightHandler}/> </Button>
            </div>
        )
    }
}




// t.string "flight_info"
// t.string "date"
// t.string "time"