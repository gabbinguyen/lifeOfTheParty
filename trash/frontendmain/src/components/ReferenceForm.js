import React, { Component } from 'react';
import { Form, Grid, Button, Header, Segment, Modal, Icon, TextArea } from 'semantic-ui-react'



const referencesURL = "http://localhost:3000/references"

class ReferenceForm extends Component {
    state = { 
        modelOpen: false,
        url: "",
        note: "",
        issue_id: this.props.issue.id,
        references: [],
     }





     fetchReferences = () => {
        fetch(referencesURL, 
            {method:'GET',
             headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
            })
        .then(res => res.json())
        .then(references => this.setState({references: references.filter(reference => reference.issue_id == this.props.issue.id)}))
    }

     handleChange = (event) => { 
        this.setState({[event.target.name]: event.target.value})
      }

    handleOpen = () => { this.setState({ modalOpen: true }) }

    handleClose = () => { this.setState({ modalOpen: false }) }

    handleSubmit = () => {
        fetch(referencesURL, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify ({
            "url": this.state.url,
            "note": this.state.note,
            "issue_id": this.state.issue_id,
          })
        })
        .then(res => res.json())
        .then(() => this.fetchReferences())
        this.props.newReferences(this.state)
        this.handleClose()
            }



    render() { 
        return ( 
            <Modal
            trigger={<Button className="add-reference-button" onClick={this.handleOpen}>+ Reference</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
        >
            <Header icon='add' content='Reference' />
            <Modal.Content>
                <h3>Add a reference</h3>
                <Form >
                    <h4>URL</h4>
                    <input type="url" name="url" placeholder="paste url" onChange={this.handleChange} />
                     <h4>Note</h4>
                    <TextArea type="text" name="note" placeholder='how did this reference help solve the issue?' onChange={this.handleChange}/>
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
 
export default ReferenceForm;