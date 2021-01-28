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
import { RiMenuAddFill } from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai'

import NewAccomModal from './NewAccomModal.js'

import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';
import NewExpenseModal from './NewExpenseModal.js'
import NewFlightModal from './NewFlightModal.js'
import ToggleDisplay from 'react-toggle-display';
import DetailsCont from './DetailsCont.js'
import DetailsCont2 from './DetailsCont2.js'

import React, { Component } from 'react'

export default class EventCard2 extends Component {
    constructor() {
        super();
        this.state = { show: false };
      }
     
      handleClick() {
        this.setState({
          show: !this.state.show
        });
      }

    render() {
        const style = {
            fontFamily: "Lato",
            fontSize: 24
            }
        const style2 = {
            fontFamily: "Lato",
            fontSize: 13
            }

// Collab view
    const collabMap = this.props.collaborators.map(collaborator=> 
        <CollabCard 
            collaborator={collaborator}
            name={collaborator.user.name}
            collabDelete={this.props.collabDelete}
        />)

    const col1 = []
        for (let i = 0; i < collabMap.length; i+=4) {
            col1.push(collabMap[i])
        } 
    const col2 = []
        for (let i = 1; i < collabMap.length; i+=4) {
            col2.push(collabMap[i])
        } 
    const col3 = []
        for (let i = 2; i < collabMap.length; i+=4) {
            col3.push(collabMap[i])
        } 
    const col4 = []
        for (let i = 3; i < collabMap.length; i+=4) {
            col4.push(collabMap[i])
        } 
// Activities theme
    const theme = createTheme(themes.default, {
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
            <Grid  > 
                <Grid.Column width={4}> 
                    <Card background="#2A0A5E"> 
                    <CardBody width="medium" pad="medium" > 
                    <h2 style={style}>{this.props.name} <br/> </h2>
                    <h6 style={style2}> {this.props.date}  <br/> 
                    {this.props.location} <br/><br/></h6>
                    </CardBody>
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }}> 
                    {/* <Button onClick={() => this.props.handleDelete(this.props.event)} >  */}
                    <AiFillDelete size={25} onClick={() => this.props.handleDelete(this.props.event)} />
                     {/* </Button>  */}
                    {/* <Button onClick={ () => this.handleClick() }> */}
                        <RiMenuAddFill  size={25} onClick={ () => this.handleClick() }/>
                         {/* </Button> */}
                    </CardFooter>
                    </Card> <br/>                
                </Grid.Column>


                <Grid.Column width={4}>
                    <ToggleDisplay show={this.state.show}> 
                        <DetailsCont 
                        event={this.props.event} 
                        collaborators={this.props.collaborators} 
                        collabDelete={this.props.collabDelete} 
                        accommodations={this.props.accommodations}
                        newAccom={this.props.newAccom}
                        accomDelete={this.props.accomDelete}
                        flights={this.props.flights}
                        flightDelete={this.props.flightDelete} 
                        newFlight={this.props.newFlight} 
                        expenses={this.props.expenses}
                        expenseDelete={this.props.expenseDelete}
                        newExpense={this.props.newExpense}
                        event_id={this.props.event.id}
                        users={this.props.users} 
                        addCollab={this.props.addCollab}
                        /> 
                   </ToggleDisplay>

                    <Card> 
                        <CardBody width="large" > 
                            <Grid> 
                                <Grid.Column width={2}> 
                                </Grid.Column>
                                <Grid.Column width={3}>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                </Grid.Column>
                                <Grid.Column width={3}> 
                                </Grid.Column>
                                <Grid.Column width={3}>
                                </Grid.Column>
                            </Grid>
                        </CardBody>
                    </Card>
            </Grid.Column>
<br/>
            <Grid.Column width={5} > 
                <ToggleDisplay show={this.state.show}>

                    <DetailsCont2 
                    event_id={this.props.event.id}
                    activities={this.props.activities}
                    newAct={this.props.newAct}
                    actDelete={this.props.actDelete}
                    />
                </ToggleDisplay>

            </Grid.Column>
        </Grid>  

        </div>
        )
    }
}