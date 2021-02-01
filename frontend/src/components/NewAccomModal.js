import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { IoMdAddCircle } from 'react-icons/io'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import NewAccom from './NewAccom.js'


export default function NewAccomModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
                <IoMdAddCircle size={25} onClick={handleShow} />  
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <NewAccom handleClose={handleClose} event_id={props.event_id} newAccom={props.newAccom}/>                             
                    </Modal.Body>
                </Modal>
        </div>
    )
}
