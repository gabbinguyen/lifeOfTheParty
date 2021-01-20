import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

import './ModalPS.css';

const ModalPS = props => {
  const project = props.project;
  const [projName, setProjName] = useState(project.name);
  const [projDesc, setProjDesc] = useState(project.description);
  const [status, setStatus] = useState(project.status);
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const statuses = [
    { label: 'Planned', value: 'Planned' },
    { label: 'Active', value: 'Active' },
    { label: 'Completed', value: 'Completed' },
    { label: 'On hold', value: 'On hold' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'No status', value: 'No status' }
  ];

  useEffect(() => {
    const { start_date, due_date, actual_completion_date } = project;

    if (project.start_date) {
      const projectStartDate = new Date(start_date);
      setStartDate(projectStartDate);
    }

    if (project.due_date) {
      const projectDueDate = new Date(due_date);
      setDueDate(projectDueDate);
    }

    if (project.actual_completion_date) {
      const projectCompletionDate = new Date(actual_completion_date);
      setCompletionDate(projectCompletionDate);
    }
  }, []);

  // Update Project Start Date
  const startDateChange = e => {
    const date = new Date(e.value).toISOString();
    if (date) {
      props.updateProjectInfo({ start_date: date });
    }
    setStartDate(e.value);
  };

  // Update Project Due Date
  const dueDateChange = e => {
    const date = new Date(e.value).toISOString();
    if (date) {
      props.updateProjectInfo({ due_date: date });
    }
    setDueDate(e.value);
  };

  // Update Project Completion Date
  const completionDateChange = e => {
    const date = new Date(e.value).toISOString();
    if (date) {
      props.updateProjectInfo({ actual_completion_date: date });
    }
    setCompletionDate(e.value);
  };

  const projDeleteModal = () => {
    props.modalClose();
    props.projDeleteModal();
  };

  // const dateChange = (data) => {
  //   const date = new Date(data.date).toISOString();
  //   if(date) {
  //     props.updateProjectInfo(info)
  //   }
  // }

  return (
    <div className='project-settings-window-overlay'>
      <div className='project-settings-sidebar'>
        <div className='sidebar-close-btn-wrapper' onClick={props.modalClose}>
          <IoIosArrowForward />
        </div>
        <div className='ps-project-banner'></div>
        <div className='ps-body'>
          <div className='project-name-section'>
            <input
              type='text'
              value={projName}
              onChange={e => setProjName(e.target.value)}
              onBlur={() => props.updateProjectInfo({ name: projName })}
            />
          </div>
          <div className='project-description-section'>
            <div className='ps-pd-title'>
              <h3>Project Description</h3>
            </div>
            <div className='ps-pd-textarea'>
              <textarea
                placeholder='Project description...'
                value={projDesc}
                onChange={e => setProjDesc(e.target.value)}
                onBlur={() =>
                  props.updateProjectInfo({ description: projDesc })
                }
              />
            </div>
          </div>
          <div className='project-startdate-section'>
            <h4>Start date</h4>
            <Calendar
              showIcon
              showTime
              showSeconds
              showButtonBar
              dateFormat='yy-mm-dd'
              hourFormat='24'
              value={startDate}
              onChange={startDateChange}
            ></Calendar>
          </div>
          <div className='project-duedate-section'>
            <h4>Due date</h4>
            <Calendar
              showIcon
              showTime
              showSeconds
              showButtonBar
              dateFormat='yy-mm-dd'
              hourFormat='24'
              value={dueDate}
              onChange={dueDateChange}
            ></Calendar>
          </div>
          <div className='project-completion-section'>
            <h4>Completion date</h4>
            <Calendar
              showIcon
              showTime
              showSeconds
              showButtonBar
              dateFormat='yy-mm-dd'
              hourFormat='24'
              value={completionDate}
              onChange={completionDateChange}
            ></Calendar>
          </div>
          <div className='project-status-section'>
            <h4>Project status</h4>
            <Dropdown
              options={statuses}
              value={status}
              onChange={e => {
                props.updateProjectInfo({ status: e.value });
                setStatus(e.value);
              }}
            />
          </div>
          <div className='project-admins-section'>
            <h4>Project admins</h4>
            <div className='project-members-container'>
              {project.project_members.map(pm =>
                pm.role === 'Admin' ? (
                  <div key={pm.id} className='project-member-wrapper'>
                    <img src={pm.user.avatar} alt={pm.user.username} />
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className='project-members-section'>
            <h4>Project members</h4>
            <div className='project-members-container'>
              {project.project_members.map(pm =>
                pm.role === 'Member' ? (
                  <div key={pm.id} className='project-member-wrapper'>
                    <img src={pm.user.avatar} alt={pm.user.username} />
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className='project-dangerzone-section'>
            <h4>DANGER ZONE</h4>
            <button onClick={projDeleteModal}>Delete Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPS;
