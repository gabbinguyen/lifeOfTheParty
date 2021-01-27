import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

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

    handleCalChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ date: value });
        }
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
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Field onChange={this.handleChange}>
                        <input type="text" name="location" value={this.state.location} placeholder ="Location" ></input>
                    </Form.Field >
                    <Form.Field > 
                            <DateInput inline name = "date" value={this.state.date} onChange={this.handleCalChange} />
                    </Form.Field>
                    <Button type="submit" text-align="center">Submit</Button>
                </Form> <br/>              
            </div>
        )
    }
}
