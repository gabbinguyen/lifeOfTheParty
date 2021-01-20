import React, { useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Cart from './Cart'
import { FiShoppingCart } from 'react-icons/fi';



export default function CartSideBtn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="outline-info" onClick={handleShow}>
                <FiShoppingCart size="20" /> 
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton /> 
                    <Modal.Body>
                        <Cart />
                    </Modal.Body>
            </Modal>
        </div>
    )
}
