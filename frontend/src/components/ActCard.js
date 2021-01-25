import React, { Component } from 'react'
import {Button, Col} from 'react-bootstrap'
import NewAct from './NewAct.js'

export default class ActCard extends Component {


    render() {
        return (
            <div>
            {this.props.description} <br/> 
            {this.props.date} <br/> 
            {this.props.time} <br/> <br/>
            <Button onClick={() => this.props.actDelete(this.props.activity)} > Delete Activity </Button>
            </div>
        )
    }
}
