import React from 'react';
import { GrStatusWarning } from 'react-icons/gr';

import './ModalTBD.css';

const ModalTBD = props => {
  const deleteTaskBucket = () => {
    props.modalClose();
    props.deleteTaskBucket(props.taskBucket);
  };

  return (
    <div className='modal-window-overlay'>
      <div className='modal-tbd'>
        <div className='modal-tbd-warningtext-wrapper'>
          <GrStatusWarning />
          <p>Are you absolutely positive?</p>
        </div>
        <div className='modal-tbd-controls'>
          <button className='modal-tbd-no-btn' onClick={props.modalClose}>
            No
          </button>
          <button className='modal-tbd-yes-btn' onClick={deleteTaskBucket}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTBD;
