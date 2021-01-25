import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class NewAccom extends Component {
    constructor(){
        super()
        this.state = {
            event_id: " ",
            location: '',
            date: ''
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
        const newAccom={
            event_id: this.props.event_id,
            location: this.state.location,
            date: this.state.date,
        }
        fetch("http://localhost:3000/accommodations", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newAccom)
        })
        .then(res=>res.json())
        .then(json=>this.props.newAccom(json))
        this.setState({
            event_id: " ",
            location: '',
            date: ''
        })
    }

  


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="location" value={this.state.location} placeholder ="Location" onChange={this.handleChange}/><br></br>        
                <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>  
            </div>
        )
    }
}
