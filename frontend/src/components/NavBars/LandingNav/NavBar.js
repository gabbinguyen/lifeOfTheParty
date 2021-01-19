import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import auth from '../../Auth/auth';

const NavBar = () => {
  const navItems = () => {
    switch (auth.isAuthenticated()) {
      case true:
        return (
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Link to='/login'>Login</Link>
          </li>,
          <li key='3'>
            <Link to='/signup'>Sign Up</Link>
          </li>
        ];
    }
  };

  return (
    <nav>
      <h1>
        <Link to='/'>LOGO</Link>
      </h1>
      <ul>{navItems()}</ul>
    </nav>
  );
};

export default NavBar;
