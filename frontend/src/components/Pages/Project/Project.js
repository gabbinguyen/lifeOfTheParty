import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { IoLogoBitbucket } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

import './Project.css';
import NavBar from '../../NavBars/ProjectNav/NavBar';
import TaskBucket from '../../TaskBucket/TaskBucket';
import ModalPS from '../../Modals/ModalPS';
import ModalTI from '../../Modals/ModalTI';
import ModalTBD from '../../Modals/ModalTBD';
import ModalPD from '../../Modals/ModalPD';

const Project = props => {
  let { id } = useParams();
  const token = localStorage.getItem('token');

  const [project, setProject] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [projectMembers, setProjectMembers] = useState([]);
  const [taskBuckets, setTaskBuckets] = useState([]);

  // State: Project Settings Modal
  const [modalPS, setModalPS] = useState(false);
  const [modalPD, setModalPD] = useState(false);

  // State: New Task Bucket states
  const [newBucketActive, setNewBucketActive] = useState(false);
  const [newBucketName, setNewBucketName] = useState('');

  // State: Bucket Delete Confirmation Modal
  const [modalTBD, setModalTBD] = useState(false);
  const [clickedBucketDelete, setClickedBucketDelete] = useState({});

  // State: Task Info or Data Modal
  const [modalTI, setModalTI] = useState(false);
  const [clickedTask, setClickedTask] = useState({});

  // Fetch initial project data
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(project => {
        setProject(project);
        setFavorite(project.favorite);
        setProjectMembers(project.project_members);
        setTaskBuckets(project.task_buckets);
      });
  }, []);

  const updateProjectInfo = info => {
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(project => setProject(project));
  };

  const deleteProject = () => {
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          props.history.push('/dashboard');
        }
      });
  };

  const handleCreateBucket = () => {
    fetch(`http://localhost:3000/task_buckets`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        project_id: project.id,
        name: newBucketName
      })
    })
      .then(res => res.json())
      .then(taskBucket => {
        setTaskBuckets([...taskBuckets, taskBucket]);
        setNewBucketName('');
      });
  };

  // Creates new task for a bucket
  const createNewTask = (task, bucket) => {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        bucket_id: bucket.id,
        task_name: task
      })
    })
      .then(res => res.json())
      .then(taskBucket => {
        const updatedBuckets = taskBuckets.map(bucket => {
          let bucketCopy = { ...bucket };
          if (bucketCopy.id === taskBucket.id) {
            bucketCopy = taskBucket;
          }
          return bucketCopy;
        });
        setTaskBuckets(updatedBuckets);
      });
  };

  // Modal popup for a specific task
  const activateTaskModal = task => {
    setModalTI(true);
    setClickedTask(task);
  };

  // Updates any info or data for a task
  const updateTaskInfo = (taskId, info, taskExtra = {}) => {
    let taskPIBucketChange;
    const { bucketChange, task, bucket } = taskExtra;
    if (bucketChange) {
      taskPIBucketChange = true;
    }

    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(taskBucket => {
        if (taskPIBucketChange) {
          removeTaskFromBucket(task, bucket, taskBucket);
        } else {
          const updatedBuckets = taskBuckets.map(bucket => {
            let bucketCopy = { ...bucket };
            if (bucketCopy.id === taskBucket.id) {
              bucketCopy = taskBucket;
            }
            return bucketCopy;
          });
          setTaskBuckets(updatedBuckets);
        }
      });
  };

  // Frontend: Moves task from one bucket to another
  const removeTaskFromBucket = (task, bucket, newPIBucket) => {
    const updatedTasks = bucket.tasks.filter(taskObj => taskObj.id !== task.id);
    const upTasksForBuckets = taskBuckets.map(taskBucket => {
      const bucketCopy = { ...taskBucket };
      if (bucketCopy.id === bucket.id) {
        bucketCopy.tasks = updatedTasks;
      }
      return bucketCopy;
    });

    const updatedBuckets = upTasksForBuckets.map(bucketObj => {
      if (bucketObj.id === newPIBucket.id) {
        bucketObj = newPIBucket;
      }
      return bucketObj;
    });

    setTaskBuckets(updatedBuckets);
  };

  // Bucket delete confirmation Modal
  const bucketDeleteConf = bucket => {
    setModalTBD(true);
    setClickedBucketDelete(bucket);
  };

  // Deletes a task Bucket
  const deleteTaskBucket = bucket => {
    fetch(`http://localhost:3000/task_buckets/${bucket.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(project => {
        const updatedBuckets = project.task_buckets;
        setTaskBuckets(updatedBuckets);
      });
  };

  // Updates a task Buckets Name
  const updateBucketName = (bucket, name) => {
    fetch(`http://localhost:3000/task_buckets/${bucket.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name })
    });
  };

  return (
    <>
      <div className='project-show-page'>
        <NavBar
          project={project}
          favorite={favorite}
          projectMembers={projectMembers}
          modalPS={() => setModalPS(true)}
        />
        <div className='project-contents-section'>
          <div
            className='pcs-project-banner'
            style={{
              backgroundImage: `url(${project.banner})`
            }}
          ></div>
          <div className='project-task-buckets-container'>
            {taskBuckets.map(taskBucket => (
              <TaskBucket
                key={taskBucket.id}
                taskBucket={taskBucket}
                createNewTask={createNewTask}
                activateTaskModal={activateTaskModal}
                bucketDeleteConf={bucketDeleteConf}
                updateBucketName={updateBucketName}
              />
            ))}
            <div className='task-bucket-wrapper'>
              <div className='task-bucket'>
                {newBucketActive ? (
                  <div className='new-task-bucket-btn-active'>
                    <input
                      type='text'
                      placeholder='Task bucket name...'
                      value={newBucketName}
                      onChange={e => setNewBucketName(e.target.value)}
                      autoFocus
                    />
                    <div className='new-task-bucket-btn-controls'>
                      <button onClick={handleCreateBucket}>
                        Create bucket
                      </button>
                      <MdClose onClick={() => setNewBucketActive(false)} />
                    </div>
                  </div>
                ) : (
                  <div
                    className='new-task-bucket-btn-wrapper'
                    onClick={() => setNewBucketActive(true)}
                  >
                    <IoLogoBitbucket />
                    <h4>New Task Bucket</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Info Modal */}
      <CSSTransition
        in={modalTI}
        classNames='modal-ti'
        timeout={300}
        unmountOnExit
      >
        <ModalTI
          modalClose={() => setModalTI(false)}
          updateTaskInfo={updateTaskInfo}
          removeTaskFromBucket={removeTaskFromBucket}
          task={clickedTask}
          buckets={taskBuckets}
        />
      </CSSTransition>

      {/* Task Bucket Delete mini popup */}
      <CSSTransition
        in={modalTBD}
        classNames='modal-tbd'
        timeout={300}
        unmountOnExit
      >
        <ModalTBD
          modalClose={() => setModalTBD(false)}
          taskBucket={clickedBucketDelete}
          deleteTaskBucket={deleteTaskBucket}
        />
      </CSSTransition>

      {/* Project Settings Sidebar */}
      <CSSTransition
        in={modalPS}
        classNames='sidebar-ps'
        timeout={300}
        unmountOnExit
      >
        <ModalPS
          project={project}
          updateProjectInfo={updateProjectInfo}
          modalClose={() => setModalPS(false)}
          projDeleteModal={() => setModalPD(true)}
        />
      </CSSTransition>

      <CSSTransition
        in={modalPD}
        classNames='modal-pd'
        timeout={300}
        unmountOnExit
      >
        <ModalPD
          deleteProject={deleteProject}
          modalClose={() => setModalPD(false)}
        />
      </CSSTransition>
    </>
  );
};

export default Project;
