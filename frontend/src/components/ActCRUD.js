
import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { IoMdAddCircle } from 'react-icons/io'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import NewAct from './NewAct.js'


export default function ActCRUD(props) {

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
                        <NewAct handleClose={handleClose} event_id={props.event_id} newAct={props.newAct}/>                             
                    </Modal.Body>
                </Modal>
        </div>
    )
}
