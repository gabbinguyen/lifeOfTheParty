import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Icon, Grid, Button, GridColumn} from 'semantic-ui-react'

import NewAccom from './NewAccom.js'


export default function AccomCard(props) {
    const style = {
        fontFamily: "Duru Sans",
        fontSize: 12
        }

    return (
        <div>
            <br/>
            <Button fluid> 
            <Grid> 
                <Grid.Column width={1}> 
                    <Icon name='remove' size='small' onClick={() => props.accomDelete(props.accommodation)} /> 
                </Grid.Column>
                 <Grid.Column width={8}>
                    <h6 style={style}> {props.location} </h6>
                </Grid.Column>  
                <Grid.Column width={5}>
                <h6 style={style}> {props.date} </h6>
                </Grid.Column> 
             <br/>
            </Grid>
            </Button>
        </div>
    )
}

