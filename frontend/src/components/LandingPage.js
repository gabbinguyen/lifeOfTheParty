import React from 'react';
import {Button} from 'react-bootstrap'

class LandingPage extends React.Component {

    render(){    
    return (
        <>
        Welcome to Life of the Party. <br />
        Let's get started with a few simple steps. <br /> <br />
        <Button href='/signup'> Sign up</Button> <br /> <br />
        <Button href='/login'> Log in</Button>
        </>
    )}
}

export default LandingPage


