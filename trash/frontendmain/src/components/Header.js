import React, { Component } from 'react';
import { Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({

    appbar: {
        background: 'none',
        
    },
    icon: {
        color: "#fff",
        fontSize: "2rem",
    },
    appbarTitle: {
        flexGrow: "1!important",
        fontFamily: 'Nunito',
        color: "white"
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    }
}));
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        window.location.reload();
        return false;
    }

    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Link to="/"><h1 className={classes.appbarTitle}>Tab-Tracker</h1></Link>
                    <IconButton >
                        <DehazeIcon className={classes.icon} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/signup">Sign Up</Link></MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
