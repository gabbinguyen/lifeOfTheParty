import React from 'react';

import './Task.css';

const Task = props => {
  return (
    <div
      className='task-wrapper'
      onClick={() => props.activateTaskModal(props.task)}
    >
      <div className='task-name'>
        <p>{props.task.name}</p>
      </div>
    </div>
  );
};

export default Task;

// import { GoCalendar } from 'react-icons/go';
// import { BsChat } from 'react-icons/bs';
// import { BsPerson } from 'react-icons/bs';

// <div className='task-labels-container'>
//   <div className='task-label-wrapper' style={{ backgroundColor: '#ff3a5b' }}>
//     <p>Priority</p>
//   </div>
//   <div className='task-label-wrapper' style={{ backgroundColor: '#cfcf00' }}>
//     <p>Enclosed</p>
//   </div>
// </div>;

// <div className='task-extra-info-container'>
//  <div className='task-duedate'>
//    <GoCalendar /> <p>Sep 7</p>
//  </div>
//  <div className='task-chat'>
//    <BsChat /> <p>2</p>
//  </div>
//  <div className='task-assignees'>
//    <BsPerson /> <p>1</p>
//  </div>
// </div>;
