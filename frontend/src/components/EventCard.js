import React, { Component } from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import AccomCard from './AccomCard.js'
import ActCard from './ActCard.js'
import FlightCard from './FlightCard.js'


export default class EventCard extends Component {
    constructor(){
        super()
    }
    
    render() {

        return (
            <div>
            <h5>{this.props.event.name} <br />  </h5>
            {this.props.event.date} <br /> 
            {this.props.event.location} <br/><br/>

            <h6> Accommodations</h6>
            <AccomCard event={this.props.event} accommodations={this.props.event.accommodations} /> <br/> <br/>

            <h6> Activities </h6>
            <ActCard event={this.props.event} activities={this.props.event.activities} /> <br/> <br/>

            <h6> Flights </h6>
            <FlightCard event={this.props.event} flights={this.props.event.flights} /> <br/> <br/>
            
            <h6> Expenses</h6> 
            {this.props.event.expenses.map(expense => expense.description)}<br/>
            ${this.props.event.expenses.map(expense => expense.total)}<br/><br/>


            <Row> 
                <Col> <Button> Edit Event </Button></Col>
                <Col> <Button onClick={() => this.props.handleDelete(this.props.event)} > Delete </Button> </Col>
            </Row>
            </div>
        )
    }
}
