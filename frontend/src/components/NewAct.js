import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid} from 'semantic-ui-react'
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
        .then(json=>this.props.newAct(json))
        this.setState({
            event_id: " ",
            description: '',
            date: '',
            time: ' '
        })
        this.props.handleClose()
    }

    render() {
        return (
            <div>
                    <Form onSubmit={this.handleSubmit}> 
                    <Form.Field onChange={this.handleChange}>
                        <input type="text" name="description" value={this.state.description} placeholder ="Description" ></input>
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
            </div>
        )
    }
}
