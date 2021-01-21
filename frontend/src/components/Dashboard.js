import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'
import EventContainer from './EventContainer'

class Dashboard extends Component {

    render() {
        return (
            <div>
                This is your dashboard <br /><br />
                <Button href="/logout"> Log out </Button> <br /><br />
                <Button href="/event"> New Event </Button> <br /><br />
                Exisiting Events <br/><br/>
                <EventContainer/> 
            </div>
        )
    }
}


export default Dashboard

