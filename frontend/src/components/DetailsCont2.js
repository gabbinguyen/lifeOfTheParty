import {Row, Col, Modal} from 'react-bootstrap'
import AccomCard from './AccomCard.js'
import ActCard from './ActCard.js'
import FlightCard from './FlightCard.js'
import ActCRUD from './ActCRUD.js'
import FlightCRUD from './FlightCRUD.js'
import CollabCard from './CollabCard.js'
import AddCollab from './AddCollab.js'
import ExpenseCard from './ExpenseCard.js'
import ExpenseCRUD from './ExpenseCRUD.js'
import NewAccom from './NewAccom.js'
import {  Card, CardHeader, CardBody, CardFooter, Box } from 'grommet'

import { Button, Grid, Icon } from 'semantic-ui-react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

import NewAccomModal from './NewAccomModal.js'

import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';
import NewExpenseModal from './NewExpenseModal.js'
import NewFlightModal from './NewFlightModal.js'
import React, { Component } from 'react'

export default class DetailsCont2 extends Component {
    render() {
        const style = {
            fontFamily: "Abril Fatface",
            fontSize: 20
            }

            const theme = createTheme(themes.default, {
                "timeline": {
                    "backgroundColor": "inherit",
                    "fontSize": "1rem",
                    "fontFamily": "Duru Sans"
                  },
                card: {
                  backgroundColor: '#FAF9F3',
                },
                date: {
                  backgroundColor: '#4260B7',
                  "fontSize": "1rem",
                },
                marker: {
                  backgroundColor: '#FAF9F3',
                  borderColor: '#4260B7',
                },
                timelineTrack: {
                  backgroundColor: '#4260B7',
                },
              });

        return (
            <div>
                <Card background="#EDEAE1">
                    <CardBody> 
                        <Timeline theme={theme}>
                            <Events> 
                            {this.props.activities.map(activity=>
                                <TextEvent date={activity.date} text={activity.description}>
                                    <div>
                                        {activity.time} <br/>
                                        <Icon name='remove' onClick={() => this.props.actDelete(activity)} />
                                    </div>
                                </TextEvent> 
                            )}
                            </Events>
                            </Timeline>
                        </CardBody> <br/>
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                        <h6 style={style}> Itinerary</h6> 
                        <ActCRUD 
                        event_id={this.props.event_id} 
                        activities={this.props.activities}
                        newAct={this.props.newAct}
                        /> 
                    </CardFooter>
                </Card> 
            </div>
        )
    }
}
