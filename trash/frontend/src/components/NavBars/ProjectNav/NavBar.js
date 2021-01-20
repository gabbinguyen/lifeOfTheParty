import React from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { TiStar } from 'react-icons/ti';
import { GoSettings } from 'react-icons/go';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className='project-header-nav'>
      <div className='project-info-items'>
        <div className='psp-project-name-wrapper'>
          <h2>{props.project.name}</h2>
        </div>
        <div className='fav-icon-wrapper'>
          {props.favorite ? <TiStar /> : <TiStarOutline />}
        </div>
        <div className='phn-divider'></div>
        <div className='project-members-wrapper'>
          {props.projectMembers.map(pm => (
            <div className={`project-member-icon ${pm.role}`} key={pm.id}>
              <img src={pm.user.avatar} alt={pm.user.username} />
            </div>
          ))}
          <button>Invite</button>
        </div>
      </div>
      <div className='project-settings-btn-wrapper'>
        <button onClick={props.modalPS}>
          <GoSettings />
          Settings
        </button>
      </div>
    </div>
  );
};

export default NavBar;
