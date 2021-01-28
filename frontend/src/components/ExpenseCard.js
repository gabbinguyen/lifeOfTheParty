import React, { Component } from 'react'
import {Button, Col, OverlayTrigger, Tooltip} from 'react-bootstrap'
import NewAct from './NewAct.js'
import Avatar, { ConfigProvider } from 'react-avatar'
import {Icon, Grid } from 'semantic-ui-react'



export default class ExpenseCard extends Component {


    render() {
        return (
            <div>
            <Grid> 
                <Grid.Column width={5}> 
                    <Icon name='remove' size='small' onClick={() => this.props.expenseDelete(this.props.expense)} />
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">{this.props.name}</Tooltip>}>
                    {({ ref, ...triggerHandler }) => (
                            <ConfigProvider colors={['#2A0A5E', '#6CCECB', '#E56365', '#4260B7', ]}> 
                                <Avatar round="20px" size="30" name = {this.props.name} {...triggerHandler} className="d-inline-flex align-items-center"> </Avatar>
                            </ConfigProvider>  
                    )}
                    </OverlayTrigger>
                </Grid.Column>
                <Grid.Column width={6}>
                    {this.props.description}<br/> 
                </Grid.Column>
                <Grid.Column width={5}>
                    ${this.props.total} <br/> 
                </Grid.Column> 
            </Grid> <br/>
            </div>
        )
    }
}
