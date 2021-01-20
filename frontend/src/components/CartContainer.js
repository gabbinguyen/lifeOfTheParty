import React from 'react'
import CartChild from './CartChild';
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function cartContainer(props) {

    let prices = props.filteredItems.map(food => parseFloat(food.menu_item.price))
    let totalBeforeTaxes = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    
    let price = props.filteredItems.length
    let button
    let subtotal
    let taxes = totalBeforeTaxes * .082
    let totalAfterTaxes = totalBeforeTaxes + taxes
    let tax
    let total
    const style = {
        fontFamily: "Russo One",
        fontSize: 35,
        backgroundColor: '#F1F1E2',
        justifyContent: 'center',
        color: "#A370A7"
    }

    const subStyle = {
        fontsize: 20
    }

    const totalStyle = {
        fontSize: 25
    }

    subtotal = <p style={subStyle}>  Subtotal: ${totalBeforeTaxes.toFixed(2)} </p>
    tax = <p style={subStyle}>Taxes: ${taxes.toFixed(2)}</p>
    total = <p style={totalStyle}> Total: ${totalAfterTaxes.toFixed(2)}</p>

    if (price > 0) {
      button = <Button variant="info" onClick={() =>  window.location.href='checkout'}> Pay at Restaurant</Button>
    }
    
    localStorage.setItem('total',`${totalAfterTaxes}`)
    const showTitle = props.filteredItems.length > 0

    return (
        <div>
            <h1 style={style} >{showTitle ? 'My Order' : 'No Items Added...' }</h1>
            { props.filteredItems.map((order, index) =>
                    <CartChild
                        key={index}
                        myorder={order}
                        removeOrder={props.removeOrder} 
                        addItem={props.addItem} />)
            }
            <br></br>

            <Container> 
                <Row>
                    <Col align="right"> {subtotal}</Col>
                </Row> 
                <Row>
                    <Col align="right"> {tax}</Col>
                </Row> 
                <Row>
                    <Col align="center"> {total}</Col>
                </Row> 
                <Row> 
                    <Col align="center"> {button}</Col>
                </Row>
            </Container>
          
        </div>
    )
}
