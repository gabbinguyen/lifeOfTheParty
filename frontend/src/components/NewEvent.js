import React, { Component } from 'react'
// import {Button} from 'react-bootstrap'
import moment from 'moment';
import { Button, Form, Grid, Segment} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
 

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

    handleCalChange = (event, {name, value}) => {
        var dateString = value;

        var dateMomentObject = moment(dateString, "DD/MM/YYYY");
        var dateObject = dateMomentObject.format('MMM DD, YYYY'); 
        this.setState({
            date: dateObject.toString()
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
        .then(json=>this.props.newEvent(json))
        this.setState({
            name: '',
            date: '',
            location: '',
            event: ' '
        })
        this.props.handleClose()
        // .then(event=>{this.props.history.push('/dashboard')})
        // this.fetchLastEvent()
    }

    // fetchLastEvent() {
    //     fetch(eventsURL, {
    //         method:'GET',
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Auth-Key': localStorage.getItem('auth_key')
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(function(json){
    //           eventsJSON = json;
    //           eventID = eventsJSON[eventsJSON.length -1]
    //           const newCollab={
    //             event_id: eventID.id,
    //             user_id: eventID.user_id
    //         }
    //         fetch("http://localhost:3000/collaborators", {
    //             method: "POST",
    //             headers:{
    //                 'Content-Type': 'application/json',
    //                 'Auth-Key': localStorage.getItem('auth_key')
    //             },
    //             body: JSON.stringify(newCollab)
    //         })
    //             .then(res => res.json())
    //         })      
    // }

    render() {
        return (
            <div>

                <Form onSubmit={this.handleSubmit}> 
                        <Form.Field onChange={this.handleChange}> 
                        <input type="text" name="name" value={this.state.name} placeholder ="Event" />
                        </Form.Field>
                        <Form.Field onChange={this.handleChange}> 
                        <input type="text" name="location" value={this.state.location} placeholder= "Location" />
                        </Form.Field>
                        <Form.Field > 
                            <DateInput inline name = "date" value={this.state.date} onChange={this.handleCalChange} />
                        </Form.Field>
                        <Button fluid type="submit" text-align="center">Submit</Button>
                    </Form>

                {/* <Grid> 
                    <Grid.Column width ={9}> 
                    <Form size="huge" onSubmit={this.handleSubmit}> 
                        <Form.Field onChange={this.handleChange}> 
                        <input type="text" name="name" value={this.state.name} placeholder ="Event" />
                        </Form.Field>
                        <Form.Field onChange={this.handleChange}> 
                        <input type="text" name="location" value={this.state.location} placeholder= "Location" />
                        </Form.Field>
                        <Form.Field > 
                            <DateInput inline name = "date" value={this.state.date} onChange={this.handleCalChange} />
                        </Form.Field>
                        <Button  size="huge" type="submit" text-align="center">Submit</Button>
                    </Form>
                    </Grid.Column>

                    <Grid.Column width ={1}> 
                    </Grid.Column>
                </Grid> */}

            {/* <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} placeholder ="Type of Event" onChange={this.handleChange}/><br></br>        
                <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                <input type="text" name="location" value={this.state.location} placeholder= "Location" onChange={this.handleChange}/><br></br>
                <Button type="submit" text-align="center">Submit</Button>
            </form>             */}
        </div>
        )
    }
}
