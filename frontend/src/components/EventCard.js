import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'


export default function EventCard(props) {
    return (
        <div>
            {props.event.name} <br /> 
            {props.event.date} <br /> 
            {props.event.location} <br /> <br />
            <Row> 
                <Col> <Button> Edit Event </Button></Col>
                <Col> <Button onClick={() => props.handleDelete(props.event)} > Delete </Button> </Col>
            </Row>
        </div>
    )
}
