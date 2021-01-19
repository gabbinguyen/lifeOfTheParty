import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components/Auth/ProtectedRoute';

import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
