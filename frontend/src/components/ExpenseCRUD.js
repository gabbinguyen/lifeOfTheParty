import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewExpense from './NewExpense.js'

export default class ExpenseCard extends Component {
    state = {
        filter: " ",
    }

    handleFilter = filter => {
        this.setState({filter})
        console.log(this.state)
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
                <NewExpense 
                event_id={this.props.event_id} 
                newExpense={this.props.newExpense} 
                filter={this.state.filter} 
                collaborators={this.props.collaborators} 
                />
                </Button>
            </div>
        )
    }
}
