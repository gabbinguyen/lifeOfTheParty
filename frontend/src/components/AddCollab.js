import React, { Component } from 'react'
import {Button, Col} from 'react-bootstrap'


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
        console.log(user[0].id)
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
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder ="Name" onChange={this.handleChange}/><br></br>        
                <input type="text" name="email" value={this.state.date} placeholder= "Email" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Add A Collaborator</Button>
            </form>     
            </div>
        )
    }
}
