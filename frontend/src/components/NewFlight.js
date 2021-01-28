import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';
  
import moment from 'moment';
import TimePicker from 'rc-time-picker';


const format = 'h:mm a';
const now = moment().hour(0).minute(0);
export default class NewFlight extends Component {
    constructor(){
        super()
        this.state = {
            event_id: " ",
            flight_info: '',
            date: '',
            time: '',
            collaborator_id: " "
        }
    }

    handleTimeChange = (value) => {
        this.setState({time: value.format(format)})
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
        var dateObject = dateMomentObject.format('MMM DD'); 
        this.setState({
            date: dateObject.toString()
        })
      }


    handleSubmit=(e)=>{
        e.preventDefault()
        const newFlight={
            collaborator_id: this.props.filter,
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
        .then(json=>this.props.newFlight(json))
        this.setState({
            event_id: " ",
            flight_info: '',
            date: '',
            time: ' ',
            collaborator_id: " "
        })
        this.props.handleClose()
    }

    render() {
        return (
            <div>
                    <Form onSubmit={this.handleSubmit}> 
                    <Form.Field onChange={this.handleChange}>
                     <input type="text" name="flight_info" value={this.state.flight_info} placeholder ="Flight Number"></input>
                    </Form.Field >
                    <Form.Field > 
                            <DateInput inline name = "date"  value={this.state.date} onChange={this.handleCalChange} />
                    </Form.Field>
                    <Form.Field > 
                        <Grid> 
                            <Grid.Row> </Grid.Row>
                            <Grid.Column width={5} />
                             <TimePicker name="time" showSecond={false} defaultValue={now} onChange={this.handleTimeChange}  use12Hours/>
                             <Grid.Row> </Grid.Row>
                        </Grid>
                    </Form.Field>
                    <Button fluid type="submit" text-align="center">Submit</Button>
                </Form> <br/>   


                {/* <form onSubmit={this.handleSubmit}>
                    <input type="text" name="flight_info" value={this.state.flight_info} placeholder ="Flight Number" onChange={this.handleChange}/><br></br>        
                    <input type="text" name="date" value={this.state.date} placeholder= "Date" onChange={this.handleChange}/><br></br>
                    <input type="text" name="time" value={this.state.time} placeholder= "Time" onChange={this.handleChange}/><br></br>
                    <Button type="submit" text-align="center">Submit</Button>
                </form>   */}
            </div>
        )
    }
}
