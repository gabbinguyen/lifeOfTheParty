import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { MdHotel } from 'react-icons/md'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import NewAccom from './NewAccom.js'


export default function NewAccomModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                <MdHotel size={25} />  
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <NewAccom event_id={props.event_id} newAccom={props.newAccom}/>                             
                    </Modal.Body>
                </Modal>
        </div>
    )
}
