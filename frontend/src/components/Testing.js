import { Box, Card, CardBody, CardFooter, CardHeader, Icons } from 'grommet';
import {Accordion, Col, Modal, Button} from 'react-bootstrap'

import React, { Component } from 'react'

export default class Testing extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <CardBody>Hello! I'm the body</CardBody>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}
