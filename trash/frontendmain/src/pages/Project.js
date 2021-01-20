import React, { Component } from 'react';
import EditIssueForm from '../components/EditIssueForm';
import IssueForm from '../components/IssueForm'
import IssuesContainer from '../containers/IssuesContainer';


const issuesURL = "http://localhost:3000/issues"

class Project extends Component {

    state = {
        issues: [],
        modalOpen: false,
        issueId: ""
    }

    componentDidMount() {
        this.fetchIssues()
    }

    fetchIssues = () => {
        fetch(issuesURL,
            {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
            })
            .then(res => res.json())
            .then(issues => this.setState({ issues: issues.filter(issue => issue.project_id == this.props.project.id) }))
    }

    projectHandler = (data) => {
        this.setState({ issues: [...this.state.issues, data] })
    }

    deleteIssue = (issue) => {
        this.setState({ issues: this.state.issues.filter(newIssue => newIssue.id !== issue.id) })
        fetch(`http://localhost:3000/issues/${issue.id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                Accepts: 'application/json',
                "Content-type": 'application/json'
            }
        })
    }

    editIssue = (issue) => {
        
        this.setState({modalOpen: !this.state.modalOpen, issueId: issue.id})

    }

    changeIssue = (e) => {
        
        this.setState({modalOpen: !this.state.modalOpen})
    }

    

    render() {
        return (

            <div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/desktop_5.jpeg'})` }}>
                <div>
                    <div>
                        <h1 className="project-name">{this.props.project.project_name}</h1>
                    </div>
                    <div>
                        <IssueForm project={this.props.project}  modalOpen={this.state.modalOpen} newIssues={this.projectHandler} />
                        <IssuesContainer deleteIssue={this.deleteIssue} editIssue={this.editIssue} showIssuePage={this.props.showIssuePage} issues={this.state.issues} />
                        <EditIssueForm modalOpen={this.state.modalOpen} fetchIssues={this.fetchIssues} issueId={this.state.issueId} changeIssue={this.changeIssue} newIssues={this.projectHandler} project={this.props.project}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;