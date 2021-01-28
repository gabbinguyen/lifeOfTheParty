import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


let usersURL = "http://localhost:3000/users/"

export default class AddCollab extends Component {
    state = {
        name: '',
        email: ''
    }

    handleChange=(e)=> {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        let user = this.props.users.filter(user => user.name == this.state.name)
        let newCollab = {
            user_id: user[0].id,
            event_id: this.props.event.id
        }        
        fetch("http://localhost:3000/collaborators", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newCollab)
        })
        .then(res=>res.json())
        .then(json=>this.props.addCollab(json))
        this.setState({
            email: ' ',
            name: ' '
        })
        this.props.handleClose()
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Field onChange={this.handleChange}>
                        <input type="text" name="name" value={this.state.name} placeholder ="Name"></input>
                    </Form.Field >
                    <Form.Field onChange={this.handleChange}>
                    <input type="text" name="email" value={this.state.date} placeholder= "Email"></input>
                    </Form.Field >
                    <Button fluid type="submit" text-align="center">Add</Button>
                </Form>
            </div>
        )
    }
}
