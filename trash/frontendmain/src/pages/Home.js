import React, { Component } from 'react';
import { Router, Switch, Route, Link, useHistory } from "react-router-dom";
import ProjectForm from '../components/ProjectForm'
import ProjectsContainer from '../containers/ProjectsContainer'
import { Button } from 'semantic-ui-react'
import Header from '../components/Header';


const projectsURL = "http://localhost:3000/projects"


class Home extends Component {

state = {
    id: this.props.currentUser.id,
    events: [],
}

// componentDidMount(){
//     this.fetchProjects()
// }

// projectHandler = (data) => {
//     this.setState({ projects: [...this.state.projects, data] })
// }

// fetchProjects = () => {
//     fetch(projectsURL, 
//         {method:'GET',
//          headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
//         })
//     .then(res => res.json())
//     .then(projects => this.setState({projects: projects.filter(project => project.user_id == this.props.currentUser.id)}))
// }

// deleteProject = (project) => {
//     this.setState({ projects: this.state.projects.filter(newProject => newProject.id !== project.id) })
//     fetch(`http://localhost:3000/projects/${project.id}`, {
//       method: "DELETE", 
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem("token")}`,
//         Accepts: 'application/json',
//         "Content-type": 'application/json'
//       }
//     })
// }



    
    render() { 
        return ( 
            <div>
                Welcome to Life of the Party. <br />
                Let's get started with a few simple steps. <br /> <br />
                <Button href='/signup'> Sign up</Button> <br /> <br />
                <Button href='/login'> Log in</Button>
            </div>
         );
    }
}
 
export default Home;