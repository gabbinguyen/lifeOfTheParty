import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'
import ControlPanel from './ControlPanel'
import Itinerary from './Itinerary'
import NewEvent from './NewEvent.js'

class Dashboard extends Component {

    render() {
        return (
            <div>
                <ControlPanel/> 
            </div>
        )
    }
}


export default Dashboard


