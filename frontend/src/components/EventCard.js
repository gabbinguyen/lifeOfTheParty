import React, { useState } from 'react'
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



export default function EventCard(props) {

// Font
const style = {
    fontFamily: "Abril Fatface",
    fontSize: 20
    }

// Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// Collab view
    const collabMap = props.collaborators.map(collaborator=> 
        <CollabCard 
            collaborator={collaborator}
            name={collaborator.user.name}
            collabDelete={props.collabDelete}
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
        <Grid> 
            <Grid.Column width={3}> 
                <Card background="#2A0A5E"> 
                <CardBody width="large" > 
                <h5>{props.name} <br/> </h5>
                {props.date} <br/> 
                {props.location} <br/><br/>
                </CardBody>
                <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }}> 

                <Button  > Show Details </Button> 
                <Button onClick={() => props.handleDelete(props.event)} > Delete Event </Button> 
                </CardFooter>
                </Card> <br/>                
            </Grid.Column>

{/* COL1  */}
    {/* COLLABORATORS */}
            <Grid.Column width={4}>
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
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} onClick={handleShow}> 
                    {/* <Box direction="row" align="center" gap="small">  */}
                    <h6 style={style}>Collaborators</h6> <AiOutlineUsergroupAdd size={20} />
                    {/* </Box> */}
                    </CardFooter>
        
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <AddCollab handleClose={handleClose} users={props.users} event={props.event} addCollab={props.addCollab}/>
                            </Modal.Body>
                        </Modal>     
                </Card> <br/>
{/* ACCOMODATIONS */}

                <Card background="#195D7E"> 
                    <CardBody> 
                        {props.accommodations.map(accommodation => 
                            <AccomCard 
                            event={props.event} 
                            accommodation={accommodation} 
                            location={accommodation.location} 
                            date={accommodation.date} 
                            accomDelete={props.accomDelete}
                            event_id={props.event.id} 
                            newAccom={props.newAccom}
                            /> 
                            )}
                    </CardBody> <br/>
                    <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                        {/* <Box direction="row" align="center" gap="small">  */}
                        <h6 style={style}>Accommodations</h6><NewAccomModal event_id={props.event.id} newAccom={props.newAccom}/>
                        {/* </Box> */}
                    </CardFooter>
                </Card> <br/>

{/* FLIGHTS */}

                <Card  background="#79A7AF">
                <CardBody> 
                    <br/>
                    {props.flights.map(flight => 
                        <FlightCard 
                        collabname={flight.collaborator.user.name}
                        event={props.event} 
                        flight = {flight}
                        flight_info={flight.flight_info} 
                        date={flight.date} 
                        time={flight.time}
                        flightDelete={props.flightDelete} 
                    /> 
                    )} 
                 </CardBody> <br/>
                 <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                        {/* <Box direction="row" align="center" gap="small">  */}
                        <h6 style={style}> Flights </h6> <NewFlightModal event_id={props.event.id} flights={props.flights} newFlight={props.newFlight} collaborators={props.collaborators}/>    
                        {/* </Box> */}
                    </CardFooter>
                </Card> <br/>

{/* EXPENSES */}
                <Card background="#BAAECD">
                <CardBody> 
                    <br/>
                    {props.expenses.map(expense => 
                        <ExpenseCard 
                        expense={expense}
                        event={props.event} 
                        name={expense.collaborator.user.name}
                        description={expense.description}
                        total={expense.total}
                        expenseDelete={props.expenseDelete}

                        />
                        )} 
                 </CardBody> <br/>
                 <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                    {/* <Box direction="row" align="center" gap="small">         */}
                    <h6 style={style}> Expenses</h6> <NewExpenseModal
                            event_id={props.event.id}
                            expenses={props.expenses}
                            newExpense={props.newExpense}
                            collaborators={props.collaborators}
                            expenseDelete={props.expenseDelete}
                        />                  
                        {/* </Box> */}
                    </CardFooter>
                </Card>

            </Grid.Column>

{/* END COL1 */}

{/* COL 2 */}                     
{/* ACTIVITIES */}

            <Grid.Column width={5} > 
            <Card background="#EDEAE1">
            <CardBody> 
                <Timeline theme={theme}>
                    <Events> 
                    {props.activities.map(activity=>
                        <TextEvent date={activity.date} text={activity.description}>
                            <div>
                                {activity.time} <br/>
                                <Icon name='remove' onClick={() => props.actDelete(activity)} />

                            </div>
                        </TextEvent> 
                    )}
                    </Events>
                </Timeline>
                    </CardBody> <br/>
                 <CardFooter background="#FFFFFF27" pad={{ horizontal: 'medium', vertical: 'small' }} >
                 <h6 style={style}> Itinerary</h6> 
                    <ActCRUD 
                    event_id={props.event.id} 
                    activities={props.activities}
                    newAct={props.newAct}
                    /> 
                </CardFooter>
                </Card>
            </Grid.Column>
{/* Insert below here */}                
  
        </Grid>  

    </div>
    )
}
