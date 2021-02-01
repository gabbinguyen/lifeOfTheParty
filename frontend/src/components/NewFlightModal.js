import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { IoMdAddCircle } from 'react-icons/io'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import FlightCRUD from './FlightCRUD'


export default function NewFlightModal(props) {

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

                        <FlightCRUD 
                        handleClose={handleClose}
                        event_id={props.event_id}
                        flights={props.flights}
                        newFlight={props.newFlight}
                        collaborators={props.collaborators}
                        
                        />
                    {/* <NewExpense 
                        event_id={props.event_id} 
                        newExpense={props.newExpense} 
                        filter={props.filter} 
                        collaborators={props.collaborators} 
                    /> */}
                    </Modal.Body>
                </Modal>
        </div>
    )
}
