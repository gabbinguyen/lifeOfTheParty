import React, { Component } from 'react'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Icon, Grid } from 'semantic-ui-react'
import Avatar, { ConfigProvider } from 'react-avatar'


export default class CollabCard extends Component {

    render() {
        return (
            <div>
              <Icon name='remove' size='small' onClick={() => this.props.collabDelete(this.props.collaborator)} /><br/>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{this.props.name}</Tooltip>}>
                {({ ref, ...triggerHandler }) => (
                        <ConfigProvider colors={['#2A0A5E', '#6CCECB', '#E56365', '#4260B7', ]}> 
                            <Avatar round="20px" size="30" name = {this.props.name} {...triggerHandler} className="d-inline-flex align-items-center"> </Avatar>
                        </ConfigProvider>  
                )}
                </OverlayTrigger> <br/>
            </div>
        )
    }
}
