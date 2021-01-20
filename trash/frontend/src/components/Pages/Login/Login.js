import React, { useState } from 'react';
import Input from '../../Input/Input';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setError(res.error);
        } else if (res.success) {
          setError(false);
          localStorage.setItem('token', res.token);
          props.history.push('/dashboard');
        }
      });

    setEmail('');
    setPassword('');
  };

  return (
    <div className='login-page'>
      <div className='login-header'>
        {/* <p>
          Don't have an account?{' '}
          <Link to='/signup' className='signup-button-link'>
            Sign up
          </Link>
        </p> */}
      </div>
      <div className='login-body'>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-input-control'>
            <Input
              type={'email'}
              placeholder={'Email address'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-input-control'>
            <Input
              type={'password'}
              placeholder={'Password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {error ? <p className='auth-error-msg'>{error}</p> : null}
          </div>
          <button className='login-button' type='submit'>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
