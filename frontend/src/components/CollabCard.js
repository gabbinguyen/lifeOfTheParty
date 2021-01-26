import React, { Component } from 'react'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
// import {Button } from 'semantic-ui-react'
import NewAccom from './NewAccom.js'
import Avatar, { ConfigProvider } from 'react-avatar'
import { TiDelete } from 'react-icons/ti';


export default class CollabCard extends Component {

    render() {
        return (
            <div>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{this.props.name}</Tooltip>}>
                {({ ref, ...triggerHandler }) => (
                <Button variant="light" {...triggerHandler} className="d-inline-flex align-items-center">
                        <ConfigProvider colors={['#2A0A5E', '#6CCECB', '#E56365', '#4260B7']}> 
                            <Avatar round="20px" size="30" name = {this.props.name}> </Avatar>
                        </ConfigProvider>  
                </Button>
                )}
                </OverlayTrigger>
                <TiDelete onClick={() => this.props.collabDelete(this.props.collaborator)} />
            </div>
        )
    }
}
