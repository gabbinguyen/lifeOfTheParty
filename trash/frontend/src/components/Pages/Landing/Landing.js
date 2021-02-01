import React from 'react';
import {Button} from 'react-bootstrap'

const Landing = () => {
  return (
    <>
      Welcome to Life of the Party. <br />
      Let's get started with a few simple steps. <br /> <br />
      <Button> Sign up</Button> <br /> <br />
      <Button href='/login'> Log in</Button>

    </>
  );
};

export default Landing;
