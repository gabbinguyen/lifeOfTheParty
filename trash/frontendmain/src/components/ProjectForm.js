import React, { Component } from 'react';
import { Form, Grid, Button, Header, Segment, Modal, Icon } from 'semantic-ui-react'



const projectsURL = "http://localhost:3000/projects"

class ProjectForm extends Component {

    state = {
        project_name: "",
        user_id: this.props.userId,
        modalOpen: false,
        projects: []
    }

    fetchProjects = () => {
      fetch(projectsURL, 
          {method:'GET',
           headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
          })
      .then(res => res.json())
      .then(projects => this.setState({projects: projects.filter(project => project.user_id == this.props.userId)}))
  }



    handleChange = (event) => { 
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.setState({ modalOpen: false })
        
    }

    handleSubmit = () => {
        fetch("http://localhost:3000/projects", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify ({
            "project_name": this.state.project_name,
            "user_id": this.state.user_id
          })
        })
        .then(res => res.json())
        .then(() => this.fetchProjects())
        this.props.newProjects(this.state)
        this.handleClose()
        
    }


    render() {
        
        return (
            <Modal
            trigger={<Button className="project-button" onClick={this.handleOpen}>+ Project</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Header icon='add' content='Project' />
            <Modal.Content>
              <h3>What is your projects name?</h3>
              <Form >
                            <input type="text" name="project_name" placeholder="Name" onChange={this.handleChange} />
                        </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleSubmit}  inverted>
                <Icon name='checkmark' /> Submit
              </Button>
            </Modal.Actions>
          </Modal>

        );
    }
}

export default ProjectForm;