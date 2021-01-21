import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewAct from './NewAct.js'

export default class ActCard extends Component {
    state = {
        description: this.props.event.activities.map(activity => activity.description),
        date: this.props.event.activities.map(activity => activity.date),
        time: this.props.event.activities.map(activity => activity.time)
    }
        
    newActHandler = (data) => {
        this.setState({description: [...this.state.description, data.description]})
        this.setState({date: [...this.state.date, data.date]})
        this.setState({time: [...this.state.time, data.time]})
    }

    render() {
        return (
            <div>
            {this.state.description} <br/> 
            {this.state.date} <br/> 
            {this.state.time} <br/> 
            <Button> <NewAct event_id={this.props.event.id} newAct={this.newActHandler}/> </Button>
            </div>
        )
    }
}
