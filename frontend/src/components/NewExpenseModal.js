import React, { useState } from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
import { MdAttachMoney } from 'react-icons/md'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import NewExpense from './NewExpense.js'
import ExpenseCRUD from './ExpenseCRUD'


export default function NewExpenseModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                <MdAttachMoney size={25} />  
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>

                        <ExpenseCRUD 
                        
                        event_id={props.event_id}
                        expenses={props.expenses}
                        newExpense={props.newExpense}
                        collaborators={props.collaborators}
                        expenseDelete={props.expenseDelete}
                        handleClose={handleClose}
                        
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
