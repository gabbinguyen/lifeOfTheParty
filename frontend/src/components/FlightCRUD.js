import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewFlight from './NewFlight.js'

export default class FlightCard extends Component {
    state = {
        filter: " ",
    }

    handleFilter = filter => {
        this.setState({filter})
      }

    render() {
        return (
            <div>
            <Button> 
                <strong>Collaborator:</strong>
                    <select onClick={(e) => this.handleFilter(e.target.value)} >
                        {this.props.collaborators.map(collaborator => 
                        <option id="collaborator" name="collaborator" value={collaborator.id} >{collaborator.user.name}</option>
                    )}
                    </select><br/>
                <NewFlight 
                event_id={this.props.event_id} 
                newFlight={this.props.newFlight} 
                filter={this.state.filter} 
                collaborators={this.props.collaborators} 
                // collaborator_id={this.state.collaborator_id}
                />
                </Button>
            </div>
        )
    }
}
