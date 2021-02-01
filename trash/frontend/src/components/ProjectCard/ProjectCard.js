import React, { useState, useEffect } from 'react';
import { GoCalendar } from 'react-icons/go';
import { Link } from 'react-router-dom';

import './ProjectCard.css';

const Card = props => {
  const project = props.project;
  const [statusStyling, setStatusStyling] = useState('status-box--no-status');

  useEffect(() => {
    switch (project.status) {
      case 'Planned':
        setStatusStyling('status-box--planned');
        break;
      case 'Active':
        setStatusStyling('status-box--active');
        break;
      case 'Completed':
        setStatusStyling('status-box--completed');
        break;
      case 'On hold':
        setStatusStyling('status-box--onhold-cancelled');
        break;
      case 'Cancelled':
        setStatusStyling('status-box--onhold-cancelled');
        break;
      default:
        return;
    }
  }, [project.status]);

  return (
    <Link to={`/dashboard/projects/${project.id}`}>
      <div className='project-card'>
        <div
          className='project-card-banner'
          style={{
            backgroundImage: `url(${project.banner})`
          }}
        >
          <span className='banner-gradient'></span>
        </div>
        <div className='project-card-header'>
          <h3>{project.name}</h3>
        </div>
        <div className='project-card-info'>
          <div className='card-info-left-items'>
            <div className={statusStyling}>
              <p className='status-text'>{project.status}</p>
            </div>
            <div className='project-duedate-wrapper'>
              <GoCalendar className='go-calendar-icon' />
              <p>Sep 7</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
