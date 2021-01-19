import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';

import './ModalDS.css';

const ModalDS = props => {
  return (
    <div className='modal-ds'>
      <div className='profile-section modal-ds-section'>
        <BsPerson className='bs-person-icon' /> <p>My Profile</p>
      </div>
      <div className='logout-section modal-ds-section' onClick={props.logout}>
        <IoIosLogOut className='io-logout-icon' /> <p>Logout</p>
      </div>
    </div>
  );
};

export default ModalDS;
