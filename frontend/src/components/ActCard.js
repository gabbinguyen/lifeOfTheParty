import React, { Component } from 'react'
import {Button, Col} from 'react-bootstrap'
import {Icon, Grid } from 'semantic-ui-react'
import NewAct from './NewAct.js'

export default class ActCard extends Component {


    render() {
        return (
            <div>
            <Icon name='remove' size='small' onClick={() => this.props.actDelete(this.props.activity)} /><br/>

            {this.props.description} <br/> 
            {this.props.date} <br/> 
            {this.props.time} <br/> <br/>
            {/* <Button onClick={() => this.props.actDelete(this.props.activity)} > Delete Activity </Button> */}
            </div>
        )
    }
}
