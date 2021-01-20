import React, { useState }  from 'react'
import {Navbar, Nav, NavDropdown, Modal, Button, Tabs, Tab, Row, Col, Container} from 'react-bootstrap'
import Login from './Login'
import SignUp from './SignUp'
import Logo from '../images/Logo.svg'
import LoginModal from "react-login-modal";

function NavBar(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleLoginRender=(isLoggedIn)=>{
        if (isLoggedIn){
            return (
                <>
                {/* <Nav.Link href="/logout">Logout</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link> */}
                </>
            )
        }else{
        return (
            <>
            <Button variant="info" onClick={handleShow}>
                    Login 
            </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav align= "center" variant="pills" className="flex-column" >
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">  Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">  Signup</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Login handleLogin={props.handleLogin}></Login>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                         <SignUp handleLogin={props.handleLogin}></SignUp>
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                </Modal>
            </>
            )
        }
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top" >
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src= {Logo}
                    width="120"
                    height="65"
                    className="d-inline-block align-top"
                 />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
            <Nav className="mr-auto" >
                <Nav.Link href ="/menu"> Menu </Nav.Link>
                <Nav.Link href="/contact">Contact & Info </Nav.Link>

                {handleLoginRender(props.isLoggedIn)}
            
            </Nav>
        </Navbar>
    )
}

export default NavBar;
