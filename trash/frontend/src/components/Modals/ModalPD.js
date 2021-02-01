import React from 'react';
import { GrStatusWarning } from 'react-icons/gr';

import './ModalPD.css';

const ModalPD = props => {
  const handleYesClick = () => {
    props.modalClose();
    props.deleteProject();
  };
  return (
    <div className='modal-window-overlay'>
      <div className='modal-pd'>
        <div className='modal-pd-warningtext-wrapper'>
          <GrStatusWarning />
          <p>Permanently delete this project?</p>
        </div>
        <div className='modal-pd-controls'>
          <button className='modal-pd-no-btn' onClick={props.modalClose}>
            No
          </button>
          <button className='modal-pd-yes-btn' onClick={handleYesClick}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPD;
