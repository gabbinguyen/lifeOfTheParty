import React, { Component } from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import NewAccom from './NewAccom.js'

export default class AccomCard extends Component {

    render() {
        return (
            <div>
            {this.props.location} <br/> 
            {this.props.date} <br/> 
            <Button onClick={() => this.props.accomDelete(this.props.accommodation)} > Delete Accommodation </Button>
            {/* <Row> 
                <Col> <Button> 
                    <NewAccom 
                    event_id={this.props.event.id} 
                    newAccom={this.props.newAccom}
                    /> 
                </Button></Col>                 
            </Row> */}
            </div>
        )
    }
}
