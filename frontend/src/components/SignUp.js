import React from 'react'
import { Component } from 'react';
import {withRouter} from 'react-router';
import {Button} from 'react-bootstrap'

class SignUp extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:""
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
        const newUser= {
            user:{
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        }

        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(token=> {
            localStorage.setItem('auth_key', token["auth_key"])
            this.props.handleLogin()
            this.props.history.push('./')
          })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder ="Name" onChange={this.handleChange}/><br></br>
                <input type="text" name="email" value={this.state.email} placeholder ="Email" onChange={this.handleChange}/><br></br>
                <input type="password" name="password" value={this.state.password} placeholder= "Password" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
                
            </form>
        )
    }
}

export default withRouter(SignUp);