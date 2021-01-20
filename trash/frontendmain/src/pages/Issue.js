import React, { Component } from 'react';
import Reference from '../Cards/Reference';
import ReferenceForm from '../components/ReferenceForm';
import ReferencesContainer from '../containers/ReferencesContainer';
import ReferenceUrlContainer from '../containers/ReferenceUrlContainer';

const referencesURL = "http://localhost:3000/references"

class Issue extends Component {
    

state = {
    references: [],
    url: ""
}

componentDidMount() {
    this.fetchReferences()
}

fetchReferences = () => {
    fetch(referencesURL, 
        {method:'GET',
         headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
        })
    .then(res => res.json())
    .then(references => this.setState({references: references.filter(reference => reference.issue_id == this.props.issue.id)}))
}

    referenceHandler = (data) => {
        this.setState({ references: [...this.state.references, data] })
    }

    referenceHover = (reference) => {
        console.log(reference)
        this.setState({url: reference.url})
    }

    render() { 
        return ( 
            <div className="issue" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/desktop_3.jpeg'})` }}>
                <h2>{this.props.issue.issue_name}</h2>
                <ReferenceForm issue={this.props.issue} newReferences={this.referenceHandler}/>
                <ReferencesContainer referenceHover={this.referenceHover} references={this.state.references}/>
                <Reference url={this.state.url}/>
            </div>
         );
    }
}
 
export default Issue;