import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../Input/Input';
// import auth from '../../Auth/auth';

const Signup = props => {
  // useEffect(() => {
  //   if (auth.isAuthenticated()) {
  //     props.history.push('/dashboard');
  //   }
  // }, []);

  return (
    <div className='signup-page'>
      <div className='signup-header'>
        <p>
          Already have an account?{' '}
          <Link to='/login' className='login-button-link'>
            Log in
          </Link>
        </p>
      </div>
      <div className='signup-body'>
        <h2>Sign In</h2>
        <form>
          <div className='form-input-control first-last-names-inputs'>
            <Input type={'text'} placeholder={'First Name'} />
            <div className='input-spacer'></div>
            <Input type={'text'} placeholder={'Last Name'} />
          </div>
          <div className='form-input-control'>
            <Input type={'text'} placeholder={'Email address'} />
          </div>
          <div className='form-input-control'>
            <Input type={'password'} placeholder={'Password'} />
          </div>
          <button className='signup-button' type='submit'>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
