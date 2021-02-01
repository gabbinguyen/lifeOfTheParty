import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import NewFlight from './NewFlight.js'

export default class FlightCard extends Component {
    state = {
        filter: " ",
    }

    handleFilter = filter => {
        this.setState({filter: filter["value"]})
        console.log(filter["value"])
      }

    render() {
        const map = this.props.collaborators.map(collaborator => ({key: collaborator.user.name, value: collaborator.id, text: collaborator.user.name}))

        return (
            <div>
                {/* <strong>Collaborator:</strong>
                    <select onChange={(e) => this.handleFilter(e.target.value)} >
                        {this.props.collaborators.map(collaborator => 
                        <option id="collaborator" name="collaborator" value={collaborator.id} >{collaborator.user.name}</option>
                    )}
                    </select><br/> */}

                <Form.Dropdown
                onChange={(e, {value}) => this.handleFilter({value})} 
                placeholder='Select Collaborator'
                fluid
                selection
                options={map}
                /> 
                <br/>


                <NewFlight 
                handleClose={this.props.handleClose}
                event_id={this.props.event_id} 
                newFlight={this.props.newFlight} 
                filter={this.state.filter} 
                collaborators={this.props.collaborators} 
                // collaborator_id={this.state.collaborator_id}
                />
            </div>
        )
    }
}
