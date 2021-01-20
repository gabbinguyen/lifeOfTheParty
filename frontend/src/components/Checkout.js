import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReceiptContainer from './ReceiptContainer';

let item_orderUrl = "http://localhost:3000/item_orders"

class Checkout extends React.Component { 
    state={
        cart_items: [],
        // new_items: []
    }


    componentDidMount(){
        fetch(item_orderUrl)
        .then(res=>res.json())
        .then(cart_items=> this.setState({cart_items}))
    }
    removeOrder = (item) => {
        
        fetch(`http://localhost:3000/item_orders/${item.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
            })
            let array = this.state.cart_items;
        
        let i = array.indexOf(item);
            if (i > -1) {
                array.splice(i, 1);
            }
        this.setState({
            cart_items: array
        })
        
    }

    addItem = (item) => {
        console.log(item.menu_item_id)
        const order_item={
            cart_id: localStorage.getItem('cart_id'),
            menu_item_id: item.menu_item_id
        }
        fetch(item_orderUrl,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(order_item)
            })
                    .then(res=>res.json())
                    .then(order=> { console.log(order)
                        // const newOrder=[...this.state.cart_items, order]
                        // this.setState({cart_items: newOrder})
                        // this.setState({new_items: order})
                    })

                    // fetch(item_orderUrl)
                    // .then(res=>res.json())
                    // .then(cart_items=> this.setState({cart_items}))
    }
    
     componentDidUpdate(prevProps, prevState){
         if (prevState.cart_items !== this.state.cart_items){
            fetch(item_orderUrl)
                    .then(res=>res.json())
                    .then(cart_items=> this.setState({cart_items}))
         }

     }

    
    render(){
        const style = {
            fontFamily: "Russo One",
            fontSize: 35,
            backgroundColor: '#F1F1E2',
            justifyContent: 'center',
            color: "#A370A7"
    
        }
    
        const sub = {
            fontFamily: "PT Sans",
            fontSize: 20
        }
        let filteredItems = this.state.cart_items.filter(item=> item.cart_id == localStorage.getItem('cart_id'))

        return(
            <Container fluid> 
                <Row style={style}> 
                    <Col> R E C E I P T </Col>
                    <Col> C O N F I R M A T I O N </Col>
                </Row> 
                <Row style={sub}> 
                    <Col> <ReceiptContainer filteredItems={filteredItems} removeOrder={this.removeOrder} addItem={this.addItem} ></ReceiptContainer></Col>
                    <Col> <br/> Thank you for your order! It will be ready for pick up in 20 minutes. </Col>
                <br/> <br/>
                </Row>
                {/* <Row style={style}></Row><br></br>
                <Row> <ReceiptContainer filteredItems={filteredItems} removeOrder={this.removeOrder} addItem={this.addItem} > </ReceiptContainer>
                </Row> */}
                <br></br>
            </Container>
        )
    }
}

export default Checkout; 
