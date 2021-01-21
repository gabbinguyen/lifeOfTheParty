import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import EventContainer from '../containers/EventContainer'

let eventsURL = 'http://localhost:3000/events'

class Dashboard extends Component {
    state={
        id: this.props.currentUser.id,
        events: [],
    }

    componentDidMount(){
        this.fetchEvents()
        console.log('aksdhfadkjfb')
    }

    // eventHandler = (data) => {
    //     this.setState({ events: [...this.state.events, data]})
    // }

    fetchEvents = () => {
        debugger
        fetch(eventsURL, {
            method:'GET',
            headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
        })
        .then(res => res.json())
        .then(events => {
            console.log(events)
            this.setState({events})})
        
    }

    render() {
        return (
            <div>
                This is your dashboard <br /><br /> 
                
                <Button href="/logout"> Log out </Button> <br /><br />
                <Button href="/event"> New Event </Button> <br /><br />
                Exisiting Events <br/><br/>
                <EventContainer events={this.state.events} /> 
            </div>
        )
    }
}


export default Dashboard