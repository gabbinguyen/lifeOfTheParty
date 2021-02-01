import React, { useState, useEffect } from 'react';
import { MdSubtitles } from 'react-icons/md';
import { MdSubject } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { GrContactInfo } from 'react-icons/gr';

import './ModalTI.css';

const ModalTI = props => {
  const task = props.task;
  const buckets = props.buckets;

  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [placedInBucket, setPlacedInBucket] = useState(task.task_bucket_id);
  const [placedInBucketChanged, setPlacedInBucketChanged] = useState(false);
  const [date, setDate] = useState('');
  const [tdFocus, setTdFocus] = useState(false);

  useEffect(() => {
    if (task.due_date) {
      const dueDate = new Date(task.due_date);
      setDate(dueDate);
    }
  }, []);

  const updateTaskName = () => {
    if (taskName !== '') {
      props.updateTaskInfo(task.id, { name: taskName });
    }
  };

  const bucketDropdownChange = e => {
    if (e.value !== task.task_bucket_id) {
      setPlacedInBucketChanged(true);
    } else if (e.value === task.task_bucket_id) {
      setPlacedInBucketChanged(false);
    }
    setPlacedInBucket(e.value);
  };

  const updateTaskPIBucket = () => {
    buckets.forEach(bucket => {
      if (bucket.id === task.task_bucket_id) {
        props.updateTaskInfo(
          task.id,
          { task_bucket_id: placedInBucket },
          { bucketChange: true, task: task, bucket: bucket }
        );
      }
    });

    setPlacedInBucketChanged(false);
  };

  const updateTaskDueDate = e => {
    const datetime = new Date(e.value);
    const datetimeFormatted = datetime.toISOString();
    if (datetimeFormatted) {
      props.updateTaskInfo(task.id, { due_date: datetimeFormatted });
    }
    setDate(e.value);
  };

  const updateTaskDesc = () => {
    if (taskDescription !== '') {
      props.updateTaskInfo(task.id, { description: taskDescription });
    }
    setTdFocus(false);
  };

  return (
    <div className='modal-window-overlay'>
      <div className='modal-ti'>
        <div className='modal-ti-close-wrapper' onClick={props.modalClose}>
          <MdClose />
        </div>
        <div className='modal-ti-banner'></div>
        <div className='modal-ti-body'>
          <div className='modal-ti-task-name'>
            <MdSubtitles />
            <input
              type='text'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              onBlur={updateTaskName}
            />
          </div>

          <div className='modal-ti-task-items'>
            <div className='bucket-dropdown'>
              <h4>Bucket</h4>
              <div className='bd-w-btn-wrapper'>
                <Dropdown
                  optionLabel='name'
                  optionValue='id'
                  value={placedInBucket}
                  options={buckets}
                  onChange={bucketDropdownChange}
                />
                {placedInBucketChanged ? (
                  <button onClick={updateTaskPIBucket}>Move task</button>
                ) : null}
              </div>
            </div>
            <div className='duedate-dropdown'>
              <h4>Due date</h4>
              <Calendar
                showIcon
                showTime
                showSeconds
                showButtonBar
                dateFormat='yy-mm-dd'
                hourFormat='24'
                value={date}
                onChange={updateTaskDueDate}
              ></Calendar>
            </div>
          </div>

          <div className='modal-ti-task-description'>
            <div className='modal-ti-td-title'>
              <MdSubject />
              <h3>Description</h3>
            </div>
            <div className='modal-ti-td-textarea'>
              <textarea
                onFocus={() => setTdFocus(true)}
                onBlur={updateTaskDesc}
                placeholder='Task description...'
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}
              />
              {tdFocus ? <button>Save</button> : null}
            </div>
          </div>

          <div className='modal-ti-task-comments'>
            <div className='modal-ti-tc-title'>
              <GrContactInfo />
              <h3>Comments</h3>
            </div>
            <div className='modal-ti-tc-textarea'>
              <textarea placeholder='Type your message here' defaultValue='' />
              <div className='comment-send-btn-wrapper'>
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTI;
