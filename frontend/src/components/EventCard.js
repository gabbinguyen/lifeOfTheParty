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
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import NewAccomModal from './NewAccomModal.js'


export default function EventCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    return (
        <div>
        <Grid> 
            <Grid.Column width={4}> 
                <Card > 
                <h5>{props.name} <br/> </h5>
                {props.date} <br/> 
                {props.location} <br/><br/>

                <Button  > Show Details </Button> 
                <Button onClick={() => props.handleDelete(props.event)} > Delete Event </Button> 
                </Card> <br/>
            </Grid.Column>

{/* COL1  */}
    {/* COLLABORATORS */}
            <Grid.Column width={5}>
                <Card> 
                    <h6>Collaborators</h6>
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
                    <br/>

                    <Button variant="info" onClick={handleShow}>
                        <AiOutlineUsergroupAdd size={25} />  
                    </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <AddCollab users={props.users} event={props.event} addCollab={props.addCollab}/>
                            </Modal.Body>
                        </Modal>
                </Card>


    {/* ACCOMODATIONS */}

                <Card> 
                <h6> Accommodations</h6>
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
                        <br/>
                        <NewAccomModal               
                        event_id={props.event.id} 
                        newAccom={props.newAccom}
                        />
                </Card>
            </Grid.Column>

{/* END COL1 */}

{/* COL 2 */}                     
{/* ACTIVITIES */}

            <Grid.Column width={6} > 
            <Card> 

                        <h6> Activities </h6>
                        {props.activities.map(activity=> 
                            <ActCard 
                            event={props.event} 
                            activity={activity}
                            description={activity.description}
                            date={activity.date}
                            time={activity.time}
                            actDelete={props.actDelete}
                            /> 
                            )} <br/>
                            
                        <Button> 
                            <ActCRUD 
                            event_id={props.event.id} 
                            activities={props.activities}
                            newAct={props.newAct}
                            /> 
                        </Button> <br /> 
                </Card>
            </Grid.Column>
{/* Insert below here */}                
  
        </Grid>  

    </div>
    )
}
