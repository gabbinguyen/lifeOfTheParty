import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { MdAdd } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';

import './TaskBucket.css';
import Task from '../Task/Task';

const TaskBucket = props => {
  const [bucketName, setBucketName] = useState(props.taskBucket.name);
  const [newTaskActive, setNewTaskActive] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [tbDropToggled, settbDropToggled] = useState(false);

  // Checks for task name before task creation
  const createNewTask = () => {
    if (taskName !== '') {
      props.createNewTask(taskName, props.taskBucket);
      setTaskName('');
    }
  };

  const deleteBucketClick = () => {
    settbDropToggled(false);
    props.bucketDeleteConf(props.taskBucket);
  };

  const updateBucketName = () => {
    if (bucketName !== '') {
      props.updateBucketName(props.taskBucket, bucketName);
    }
  };

  return (
    <div className='task-bucket-wrapper'>
      <div className='task-bucket'>
        <div className='task-bucket-header-wrapper'>
          <input
            type='text'
            value={bucketName}
            onChange={e => setBucketName(e.target.value)}
            onBlur={updateBucketName}
          />
          <div className='task-bucket-settings-toggle-wrapper'>
            <HiDotsVertical onClick={() => settbDropToggled(!tbDropToggled)} />
            <CSSTransition
              in={tbDropToggled}
              classNames='task-bucket-settings-dropdown'
              timeout={300}
              unmountOnExit
            >
              <div className='task-bucket-settings-dropdown'>
                <ul>
                  <li onClick={deleteBucketClick}>Delete bucket</li>
                </ul>
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className='task-bucket-tasks-container'>
          {props.taskBucket.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              activateTaskModal={props.activateTaskModal}
            />
          ))}
        </div>
        {!newTaskActive ? (
          <div
            className='new-task-button'
            onClick={() => setNewTaskActive(true)}
          >
            <MdAdd /> <p>Add task</p>
          </div>
        ) : (
          <div className='new-task-button-active'>
            <input
              type='text'
              placeholder='Task name...'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              autoFocus
            />
            <div className='new-task-controls'>
              <button onClick={createNewTask}>Add task</button>
              <MdClose onClick={() => setNewTaskActive(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskBucket;
