import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import NewAct from './NewAct.js'

export default class ActCRUD extends Component {

    render() {
        return (
            <div>
            <Button> <NewAct event_id={this.props.event_id} newAct={this.props.newAct}/> </Button>
            </div>
        )
    }
}
