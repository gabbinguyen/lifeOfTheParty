import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


export default function CartChild(props) {
    const style = {
        fontSize: 20
    }     
    
    return (
        <div>
            <br></br>
            <Container fluid>
                  <Row>
                  <Col><Button size="sm" onClick={() => props.addItem(props.myorder)}>+</Button></Col>
                   <Col sm={6} style={style} > 
                    {props.myorder.menu_item.name}
                    </Col> 
                    <Col style={style} >${props.myorder.menu_item.price}</Col> 
                    <Col><Button size="sm" variant="danger" onClick={()=>props.removeOrder(props.myorder)}>X</Button></Col>
                  </Row>
                  <Row>
                  </Row>
                  <Row></Row>
                </Container>

            
        </div>
    )
}