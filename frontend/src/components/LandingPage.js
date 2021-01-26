import React, { useState }  from 'react'
import { Button} from 'semantic-ui-react'
import {Jumbotron, Nav, NavDropdown, Modal, Tabs, Tab, Row, Col, Container} from 'react-bootstrap'
import Hero from '../images/Hero.gif'
import Middle from '../images/Middle.gif'
import Last from '../images/Last.gif'
import Login from './Login.js'
import SignUp from './SignUp.js'
import ScrollUpButton from "react-scroll-up-button";
import { FaArrowCircleUp } from 'react-icons/fa';


export default function LandingPage(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style = {
        fontFamily: "Lato",
    }

    return (
        <div>
        <Jumbotron fluid style={{ backgroundImage: `url(${Hero})`, backgroundSize: 'cover' }}> 
        <Container>         
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        <Row> 
            <Col></Col>
            <Col xs={7}> 
            <Button variant="info" onClick={handleShow} size='big'> Get Started </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav align= "center" variant="pills" className="flex-column" >
                                <Nav.Item>
                                <Nav.Link eventKey="first" style={style}>  Log in</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">  Register </Nav.Link>
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
            </Col>
        </Row>
        <br/> <br/><br/> <br/>
            {/* <Button href='/signup'> Sign up</Button> <br /> <br />
            <Button href='/login'> Log in</Button> */}
        
        </Container>
        </Jumbotron>
        
        <Jumbotron fluid style={{ backgroundImage: `url(${Middle})`, backgroundSize: 'cover' }}> 
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/>
        </Jumbotron>

        <Jumbotron fluid style={{ backgroundImage: `url(${Last})`, backgroundSize: 'cover' }}> 
        <Container>         
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/>
        
        <Row>
            <Col> </Col>
            <Col> 
            <ScrollUpButton style={{width: 25}} ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
            <FaArrowCircleUp color="#2A0A5E" size="30"/>
            </ScrollUpButton> 
            </Col>
        </Row> 


       </Container>
        </Jumbotron>
        </div>
    )
}



