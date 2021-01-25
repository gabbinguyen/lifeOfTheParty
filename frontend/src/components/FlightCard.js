import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewFlight from './NewFlight.js'

export default class FlightCard extends Component {

    render() {
        
        return (
            <div>
            {this.props.collabname}<br/>
            {this.props.flight_info}<br/>
            {this.props.date}<br/>
            {this.props.time}<br/> <br/>
            <Button onClick={() => this.props.flightDelete(this.props.flight)} > Delete Flight </Button>
            </div>
        )
    }
}
