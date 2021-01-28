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
import AddCollabModal from './AddCollabModal'

import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';
import NewExpenseModal from './NewExpenseModal.js'
import NewFlightModal from './NewFlightModal.js'
import React, { Component } from 'react'

export default class DetailsCont extends Component {
    
    render() {
        const style = {
            fontFamily: "Abril Fatface",
            fontSize: 20
            }
        const style2 = {
                fontFamily: "Abril Fatface",
                fontSize: 17
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
    {/* COLLABORATORS */}
                    <Card background="#EFCAC1"> 
                     <CardBody width="large" > 
                        <Grid> 
                            <Grid.Column width={2}> 
                            </Grid.Column>
                            <Grid.Column width={3}>
                            {col1} 
                            </Grid.Column>
                            <Grid.Column width={3}>
                            {col2}
                            </Grid.Column>
                            <Grid.Column width={3}> 
                            {col3}
                            </Grid.Column>
                            <Grid.Column width={3}>
                            {col4}
                            </Grid.Column>
                        </Grid>
                    </CardBody>
                    <br/>                    
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} > 
                    <h6 style={style}>Collaborators</h6><AddCollabModal users={this.props.users} event={this.props.event} addCollab={this.props.addCollab}/> 
                    
                    {/* <AiOutlineUsergroupAdd size={20} /> */}
                    </CardFooter>
        
                        {/* <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <AddCollab handleClose={handleClose} users={this.props.users} event={this.props.event} addCollab={this.props.addCollab}/>
                            </Modal.Body>
                        </Modal>      */}
                     </Card> <br/>

{/* ACCOMODATIONS */}
                    <Card background="#195D7E"> 
                    <CardBody> 
                        {this.props.accommodations.map(accommodation => 
                            <AccomCard 
                            event={this.props.event} 
                            accommodation={accommodation} 
                            location={accommodation.location} 
                            date={accommodation.date} 
                            accomDelete={this.props.accomDelete}
                            event_id={this.props.event_id} 
                            newAccom={this.props.newAccom}
                            /> 
                            )}
                    </CardBody> <br/>
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                        <h6 style={style2}>Accommodations</h6><NewAccomModal event_id={this.props.event_id} newAccom={this.props.newAccom}/>
                    </CardFooter>
                </Card> <br/>

{/* FLIGHTS */}
                <Card  background="#79A7AF">
                <CardBody> 
                    <br/>
                    {/* {console.log(this.props.expenses)}
                    {console.log(this.props.flights)} */}
                    {this.props.flights.map(flight => 
                        <FlightCard 
                        collabname={flight.collaborator.user.name}
                        event={this.props.event} 
                        flight = {flight}
                        flight_info={flight.flight_info} 
                        date={flight.date} 
                        time={flight.time}
                        flightDelete={this.props.flightDelete} 
                    /> 
                    )} 
                 </CardBody>
                 <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                        <h6 style={style}> Flights </h6> <NewFlightModal event_id={this.props.event_id} flights={this.props.flights} newFlight={this.props.newFlight} collaborators={this.props.collaborators}/>    
                    </CardFooter>
                </Card> <br/>

{/* EXPENSES */}
                <Card background="#BAAECD">
                <CardBody> 
                    <br/>
                    {this.props.expenses.map(expense => 
                        <ExpenseCard 
                        expense={expense}
                        event={this.props.event} 
                        name={expense.collaborator.user.name}
                        description={expense.description}
                        total={expense.total}
                        expenseDelete={this.props.expenseDelete}

                        />
                        )} 
                 </CardBody> 
                 <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                    <h6 style={style}> Expenses</h6> <NewExpenseModal
                            event_id={this.props.event_id}
                            expenses={this.props.expenses}
                            newExpense={this.props.newExpense}
                            collaborators={this.props.collaborators}
                            expenseDelete={this.props.expenseDelete}
                        />                  
                    </CardFooter>
                </Card>
            </div>
        )
    }
}
