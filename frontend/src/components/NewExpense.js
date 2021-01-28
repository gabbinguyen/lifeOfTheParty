import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default class NewExpense extends Component {
    constructor(){
        super()
        this.state = {
            event_id: " ",
            collaborator_id: " ",
            description: '',
            total: " "
        }
    }

    handleChange=(e)=> {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        const newExpense={
            event_id: this.props.event_id,
            collaborator_id: this.props.filter,
            description: this.state.description,
            total: this.state.total,
        }
        fetch("http://localhost:3000/expenses", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newExpense)
        })
        .then(res=>res.json())
        .then(json=>this.props.newExpense(json))
        this.setState({
            event_id: " ",
            collaborator_id: " ",
            description: '',
            total: " "
        })
        this.props.handleClose()
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Field onChange={this.handleChange}>
                        <input type="text" name="description" value={this.state.description} placeholder= "Description" ></input>
                    </Form.Field >
                    <Form.Field onChange={this.handleChange}>
                        <input type="number" name="total" value={this.state.total} placeholder= "Total" ></input>
                    </Form.Field >
                    <Button fluid type="submit" text-align="center">Submit</Button>
                </Form> <br/>   


                {/* <form onSubmit={this.handleSubmit}>
                <input type="text" name="description" value={this.state.description} placeholder ="Description" onChange={this.handleChange}/><br></br>        
                <input type="text" name="total" value={this.state.total} placeholder= "Total" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>   */}
            </div>
        )
    }
}
