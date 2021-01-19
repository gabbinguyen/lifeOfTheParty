import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Dashboard.css';
import NavBar from '../../NavBars/DashboardNav/NavBar';
import ModalDS from '../../Modals/ModalDS';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';

const Dashboard = props => {
  const [modalDS, setModalDS] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-layers'>
        <NavBar activateModal={() => setModalDS(!modalDS)} />
        <div className='dashboard-body'>
          <Route exact path='/dashboard' component={Projects} />
          <Route exact path='/dashboard/projects/:id' component={Project} />
        </div>
      </div>

      <CSSTransition
        in={modalDS}
        classNames='modal-ds'
        timeout={300}
        unmountOnExit
      >
        <ModalDS logout={logout} />
      </CSSTransition>
    </div>
  );
};

export default Dashboard;
