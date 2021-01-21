import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class NewFlight extends Component {
    constructor(){
        super()
        this.state = {
            event_id: " ",
            flight_info: '',
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
        const newFlight={
            event_id: this.props.event_id,
            flight_info: this.state.flight_info,
            date: this.state.date,
            time: this.state.time,
        }
        fetch("http://localhost:3000/flights", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newFlight)
        })
        .then(res=>res.json())
        .then(console.log(newFlight))
        .then(event=>{this.props.newFlight(this.state)})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="flight_info" value={this.state.flight_info} placeholder ="Flight Number" onChange={this.handleChange}/><br></br>        
                <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                <input type="text" name="time" value={this.state.time} placeholder= "Time" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>  
            </div>
        )
    }
}
