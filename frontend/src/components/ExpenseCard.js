import React, { Component } from 'react'
import {Button, Col} from 'react-bootstrap'
import NewAct from './NewAct.js'

export default class ExpenseCard extends Component {


    render() {
        return (
            <div>
            {this.props.name} <br/> 
            {this.props.description} <br/> 
            ${this.props.total} <br/> 
            <Button onClick={() => this.props.expenseDelete(this.props.expense)} > Delete Expense </Button>
            </div>
        )
    }
}
