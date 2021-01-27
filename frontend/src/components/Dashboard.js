import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'
import ControlPanel from './ControlPanel'
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


