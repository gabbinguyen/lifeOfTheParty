import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class NewAct extends Component {
    constructor(){
        super()
        this.state = {
            event_id: " ",
            description: '',
            date: '',
            time: ''
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
        const newAct={
            event_id: this.props.event_id,
            description: this.state.description,
            date: this.state.date,
            time: this.state.time,
        }
        fetch("http://localhost:3000/activities", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newAct)
        })
        .then(res=>res.json())
        .then(console.log(newAct))
        .then(event=>{this.props.newAct(this.state)})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="description" value={this.state.description} placeholder ="Description" onChange={this.handleChange}/><br></br>        
                <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                <input type="text" name="time" value={this.state.time} placeholder= "Time" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>  
            </div>
        )
    }
}
