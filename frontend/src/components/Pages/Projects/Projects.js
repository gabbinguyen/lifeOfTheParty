import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Projects.css';
import ProjectCard from '../../ProjectCard/ProjectCard';
import ModalNP from '../../Modals/ModalNP';

const Projects = props => {
  const token = localStorage.getItem('token');
  const [projects, setProjects] = useState([]);
  const [modalNP, setModalNP] = useState(false);

  // Fetch initial projects data
  useEffect(() => {
    fetch('http://localhost:3000/projects', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(projects => setProjects(projects));
  }, []);

  // Creates a New Project
  const createNewProject = project => {
    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(project => {
        setProjects([...projects, project]);
      });
  };

  return (
    <>
      <div className='projects-page'>
        <div className='projects-header-nav'>
          <div className='new-project-btn-wrapper'>
            <button onClick={() => setModalNP(true)}>New Project</button>
          </div>
        </div>
        <div className='projects-section'>
          <div className='projects-container container'>
            <div className='row'>
              {projects.map(project => (
                <div className='col-xl-3 col-lg-6' key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Project Modal */}
      <CSSTransition
        in={modalNP}
        classNames='modal-np'
        timeout={300}
        unmountOnExit
      >
        <ModalNP
          modalClose={() => setModalNP(false)}
          createNewProject={createNewProject}
        />
      </CSSTransition>
    </>
  );
};

export default Projects;
