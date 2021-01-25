import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

let eventsURL = 'http://localhost:3000/events/'
let eventsJSON = []
let eventID = ""

export default class NewEvent extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            date: '',
            location: '',
            event: ' '
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
        const newEvent={
            name: this.state.name,
            date: this.state.date,
            location: this.state.location
        }
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            },
            body: JSON.stringify(newEvent)
        })
        .then(res=>res.json())
        .then(event=>{this.props.history.push('/dashboard')})
        this.fetchLastEvent()
    }

    fetchLastEvent() {
        fetch(eventsURL, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(function(json){
              eventsJSON = json;
              eventID = eventsJSON[eventsJSON.length -1]
              const newCollab={
                event_id: eventID.id,
                user_id: eventID.user_id
            }
            fetch("http://localhost:3000/collaborators", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                },
                body: JSON.stringify(newCollab)
            })
                .then(res => res.json())
            })      
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder ="Type of Event" onChange={this.handleChange}/><br></br>        
                <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                <input type="text" name="location" value={this.state.location} placeholder= "Location" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>            
        </div>
        )
    }
}
