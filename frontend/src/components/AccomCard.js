import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewAccom from './NewAccom.js'

export default class AccomCard extends Component {
    state = {
        location: this.props.event.accommodations.map(accommodation => accommodation.location),
        date: this.props.event.accommodations.map(accommodation => accommodation.date)
    }
        
    newAccomHandler = (data) => {
        this.setState({location: [...this.state.location, data.location]})
        this.setState({date: [...this.state.date, data.date]})
    }

    render() {
        return (
            <div>
            {this.state.location} <br/> 
            {this.state.date} <br/> 
            <Button> <NewAccom event_id={this.props.event.id} newAccom={this.newAccomHandler}/> </Button>
            </div>
        )
    }
}
