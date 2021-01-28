import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { IoIosAddCircle } from 'react-icons/io'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import NewEvent from './NewEvent.js'


export default function NewEventModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button floated='right' basic color='teal' circular icon onClick={handleShow}>
                <IoIosAddCircle size={25} onClick={handleShow}/>  
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <NewEvent handleClose={handleClose} newEvent={props.newEvent}/>                             
                    </Modal.Body>
                </Modal>
        </div>
    )
}
