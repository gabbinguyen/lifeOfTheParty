import React, { Component } from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import NewAccom from './NewAccom.js'


export default class CollabCard extends Component {

    render() {
        return (
            <div>
                {this.props.name}
            <Row> 
                <Col> <Button onClick={() => this.props.collabDelete(this.props.collaborator)} > 
                    X
                </Button></Col>                 
            </Row>
            </div>
        )
    }
}
