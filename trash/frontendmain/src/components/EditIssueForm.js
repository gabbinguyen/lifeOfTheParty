import React, { Component } from 'react';
import { Form, Grid, Button, Header, Segment, Modal, Icon, TextArea } from 'semantic-ui-react'

const issuesURL = "http://localhost:3000/issues"

class EditIssueForm extends Component {

    state = {
        
        issue_name: "",
        priority: "",
        description: "",
        in_progress: true,
        project_id: this.props.project.id,
        issues: [],
        
    }

    fetchIssues = () => {
        fetch(issuesURL, 
            {method:'GET',
             headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
            })
        .then(res => res.json())
        .then(issues => this.setState({issues: issues.filter(issue => issue.project_id == this.props.project.id)}))
    }


    handleChange = (event) => { 
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    
    handleSubmit = () => {
        fetch(`${issuesURL}/${this.props.issueId}`, {
          method: "PATCH",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify ({
            "issue_name": this.state.issue_name,
            "priority": this.state.priority,
            "description": this.state.description,
            "project_id": this.state.project_id,
            "in_progress":this.state.in_progress
          })
        })
        .then(res => res.json())
        .then(() => {      
        this.props.fetchIssues()
        this.props.changeIssue()
        }) }

  

    render() {
        return (
            <Modal
                // trigger={this.props.changeIssue}
                open={this.props.modalOpen}
                onClose={this.props.changeIssue}
                basic
                size='small'
            >
                <Header icon='add' content='Issue' />
                <Modal.Content>
                    <h3>Edit Issue</h3>
                    <Form >
                        <h4>Issue Name</h4>
                        <input type="text" name="issue_name" placeholder="Issue Name" onChange={this.handleChange} />
                        <h4>Priority</h4>
                        <select type="text" placeholder="select" name="priority" onChange={this.handleChange}> 
                            <option name="" ></option>
                            <option name="low"> Low</option>
                            <option name="medium">Medium</option>
                            <option name="high">High</option>
                         </select>
                         <h4>Description</h4>
                        <TextArea type="text" name="description" placeholder='Tell us more' onChange={this.handleChange}/>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleSubmit} inverted>
                        <Icon name='checkmark' /> Submit
              </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default EditIssueForm;