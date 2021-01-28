import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { IoMdAddCircle } from 'react-icons/io'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import AddCollab from './AddCollab.js'


export default function AddCollabModal(props) {

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
                        <AddCollab handleClose={handleClose} users={props.users} event={props.event} addCollab={props.addCollab}/>
                    </Modal.Body>
                </Modal>
        </div>
    )
}
