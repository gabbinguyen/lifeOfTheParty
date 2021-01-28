import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import {Icon, Grid } from 'semantic-ui-react'

import NewAccom from './NewAccom.js'


export default function AccomCard(props) {
    return (
        <div>
            <br/>
             <Icon name='remove' size='small' onClick={() => props.accomDelete(props.accommodation)} />
            {props.location} {props.date} <br/>
        </div>
    )
}

