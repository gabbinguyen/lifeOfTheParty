import React, { Component } from 'react'
import {Button, GridColumn} from 'semantic-ui-react'
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
import { Card, Grid } from 'semantic-ui-react'

export default class EventCard extends Component {
    
    render() {
        return (
            <div>
            <Grid> 
                <Grid.Column width={6}> 
                    <Card > 
                    <h5>{this.props.name} <br/> </h5>
                    {this.props.date} <br/> 
                    {this.props.location} <br/><br/>

                    <Button  > Show Details </Button> 
                    <Button onClick={() => this.props.handleDelete(this.props.event)} > Delete Event </Button> 
                    </Card> <br/>
                 </Grid.Column>
                 <Grid.Column width={10}>
                     <Card> 
                        {/* COLLABORATORS  */}
                                    
                        <h6>Collaborators</h6>
                        {this.props.collaborators.map(collaborator=> 
                        <CollabCard 
                            collaborator={collaborator}
                            name={collaborator.user.name}
                            collabDelete={this.props.collabDelete}
                        />                
                        )} <br/>
                        <Button > <AddCollab users={this.props.users} event={this.props.event} addCollab={this.props.addCollab}/> </Button>



                        {/* ACCOMODATIONS  */}

                        <h6> Accommodations</h6>
                        {this.props.accommodations.map(accommodation => 

                            <AccomCard 
                            event={this.props.event} 
                            accommodation={accommodation} 
                            location={accommodation.location} 
                            date={accommodation.date} 
                            accomDelete={this.props.accomDelete}
                            /> 
                            )}
                            <br/>
                        <Button> 
                                <NewAccom 
                                event_id={this.props.event.id} 
                                newAccom={this.props.newAccom}
                                /> 
                            </Button>

                        {/* ACTIVITIES */}

                        <h6> Activities </h6>
                        {this.props.activities.map(activity=> 
                            <ActCard 
                            event={this.props.event} 
                            activity={activity}
                            description={activity.description}
                            date={activity.date}
                            time={activity.time}
                            actDelete={this.props.actDelete}
                            /> 
                            )} <br/>
                            
                        <Button> 
                            <ActCRUD 
                            event_id={this.props.event.id} 
                            activities={this.props.activities}
                            newAct={this.props.newAct}
                            /> 
                        </Button> <br /> 

                        {/* FLIGHTS */}

                        <h6> Flights </h6>
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
                        )} <br/>

                        <Button> 
                            <FlightCRUD 
                            event_id={this.props.event.id}
                            flights={this.props.flights}
                            newFlight={this.props.newFlight}
                            collaborators={this.props.collaborators}
                            /> 
                        </Button>

                        {/* EXPENSE */}

                        <h6> Expenses</h6> 
                        {this.props.expenses.map(expense => 
                            <ExpenseCard 
                            expense={expense}
                            event={this.props.event} 
                            name={expense.collaborator.user.name}
                            description={expense.description}
                            total={expense.total}
                            expenseDelete={this.props.expenseDelete}

                            />
                            )} <br/>
                            
                            <Button> 
                            <ExpenseCRUD 
                            event_id={this.props.event.id}
                            expenses={this.props.expenses}
                            newExpense={this.props.newExpense}
                            collaborators={this.props.collaborators}
                            expenseDelete={this.props.expenseDelete}
                            /> 
                            </Button>
                     </Card>
                 </Grid.Column>
            </Grid>  

            </div>
        )
    }
}
