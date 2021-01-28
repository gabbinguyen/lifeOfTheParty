import React, { Component } from 'react'
import {Button, Col} from 'react-bootstrap'
import {Icon, Grid } from 'semantic-ui-react'
import NewAct from './NewAct.js'
import Itinerary from "./Itinerary"
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';


export default class ActCard extends Component {


    render() {

        const theme = createTheme(themes.default, {
            card: {
              backgroundColor: '#efefef',
            },
            date: {
              backgroundColor: 'rebeccapurple',
            },
            marker: {
              borderColor: 'rebeccapurple',
            },
            timelineTrack: {
              backgroundColor: 'rebeccapurple',
            },
          });

          console.log(this.props.activities)

        return (
            <div>
                {/* <Timeline theme={theme} >
                    <Events> 
                     
                    <TextEvent>

                    </TextEvent> 
                        
                            
                            
                            <br/>
                    </Events>
                </Timeline>
                <Itinerary 
                description={this.props.description} 
                date={this.props.date} 
                time={this.props.time}
                /> */}
            <Icon name='remove' size='small' onClick={() => this.props.actDelete(this.props.activity)} /><br/>

            {/* {this.props.description} <br/> 
            {this.props.date} <br/> 
            {this.props.time} <br/> <br/> */}
            {/* <Button onClick={() => this.props.actDelete(this.props.activity)} > Delete Activity </Button> */}
            </div>
        )
    }
}
