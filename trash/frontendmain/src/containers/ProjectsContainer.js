import React, { Component } from 'react';
import ProjectCard from '../Cards/ProjectCard'

const ProjectsContainer = (props) => {
    return (
        <div className="projects-column-container">
            <div className="projects-column">
                {props.projects.map(projects => <ProjectCard deleteProject={props.deleteProject} handleClick={props.showProjectPage} key={projects.id} projects={projects} />)}
            </div>
        </div>

    );
}

export default ProjectsContainer;