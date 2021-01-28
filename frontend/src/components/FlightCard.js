import React, { Component } from 'react'
import {Button, Col, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Avatar, { ConfigProvider } from 'react-avatar'
import {Icon, Grid } from 'semantic-ui-react'


export default class FlightCard extends Component {

    render() {
        
        return (
            <div>
                <Grid> 
                <Grid.Column width={5}> 
                    <Icon name='remove' size='small' onClick={() => this.props.flightDelete(this.props.flight)} />
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{this.props.collabname}</Tooltip>}>
                    {({ ref, ...triggerHandler }) => (
                            <ConfigProvider colors={['#2A0A5E', '#6CCECB', '#E56365', '#4260B7', ]}> 
                                <Avatar round="20px" size="25" name = {this.props.collabname} {...triggerHandler} className="d-inline-flex align-items-center"> </Avatar>
                            </ConfigProvider>  
                    )}
                    </OverlayTrigger>
                </Grid.Column>
                <Grid.Column width={5}>
                {this.props.flight_info}<br/> 
                </Grid.Column>
                <Grid.Column width={6}>
                {this.props.date} {this.props.time}<br/> 
                </Grid.Column> 
            </Grid> <br/>
            </div>
        )
    }
}
