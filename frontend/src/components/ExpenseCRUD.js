import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import NewExpense from './NewExpense.js'

export default class ExpenseCard extends Component {
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
                    
                <Form.Dropdown
                    onChange={(e, {value}) => this.handleFilter({value})} 
                    placeholder='Select Collaborator'
                    fluid
                    selection
                    options={map}
                /> 
                <br/>
                <NewExpense 
                event_id={this.props.event_id} 
                newExpense={this.props.newExpense} 
                filter={this.state.filter} 
                collaborators={this.props.collaborators} 
                handleClose={this.props.handleClose}
                />
            </div>
        )
    }
}
