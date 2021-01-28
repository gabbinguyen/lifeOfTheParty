import React, { Component } from 'react'
import { Col, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Avatar, { ConfigProvider } from 'react-avatar'
import {Icon, Grid, Button} from 'semantic-ui-react'


export default class FlightCard extends Component {

    render() {
        const style = {
            fontFamily: "Duru Sans",
            fontSize: 12
            }
    
        return (
            <div>
             <Button fluid> 
                <Grid> 
                    <Grid.Column width={5}> 
                        <Icon name='remove' size='small' onClick={() => this.props.flightDelete(this.props.flight)} />
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{this.props.collabname}</Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                                <ConfigProvider colors={['#2A0A5E', '#6CCECB', '#E56365', '#4260B7', ]}> 
                                    <Avatar round="20px" size="30" name = {this.props.collabname} {...triggerHandler} className="d-inline-flex align-items-center"> </Avatar>
                                </ConfigProvider>  
                        )}
                        </OverlayTrigger>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h6 style={style}> 
                        {this.props.date} <br/> 
                        {this.props.time}
                        </h6>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h6 style={style}> 
                        {this.props.flight_info}
                        </h6>
                    </Grid.Column> 
                </Grid> 
            </Button>
            <br/>
            </div>
        )
    }
}
