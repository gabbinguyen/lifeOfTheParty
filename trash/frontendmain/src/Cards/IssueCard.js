import React, { Component, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';


const IssueCard = (props) => {

    const [selected, setSelected] = React.useState(false);

    const [state, setState] = useState({
        color: ""
      });


    const backgroundStyle = () => {

        if (props.in_progress === false) {
            setState({color: "green"})
        } else if (props.priority === "Low") {
            setState({color: "yellow"})
        } else if (props.priority === "Medium") {
            setState({color: "orange"})
        } else if (props.priority === "High") {
            setState({color: "red"})
        }

    }

        return (

            <div >
                <div onClick={() => props.handleClick(props.issues)} className="issue-card" style={{ backgroundColor: state.color}}>
                    <List>
                        <ListItem>
                            <ListItemText className="issue-card-title" primary={props.issues.issue_name} />
                            <ListItemSecondaryAction>
                                {/* <ToggleButton className="resolved-button" size="small" onClick={(e) => {
                                    e.stopPropagation();
                                    setState({color: "green"})

                                }}

                                    value="check"
                                    selected={selected}

                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    Resolved <CheckIcon />
                                </ToggleButton> */}

                                <EditOutlinedIcon className="issue-card-edit" onClick={(e) => {
                                    e.stopPropagation()
                                    props.editIssue(props.issues)
                                }} />
                                <DeleteIcon className="issue-card-delete" onClick={(e) => {
                                    e.stopPropagation()
                                    props.deleteIssue(props.issues)
                                }} />

                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
            </div>
        )

    }

    export default IssueCard