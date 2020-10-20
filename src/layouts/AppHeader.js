import React, { Component } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { RiMenu2Line } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { logoutUser } from '../actions/AuthActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
}

class AppHeader extends Component {
    state = {
        anchorEl: null,
        open: false,
    }

    handleClose = () => {
        this.setState({anchorEl: null});
        this.setState({open: false});
    };

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget});
        this.setState({open: true});
    };

    logout = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <AppBar position="fixed" className={this.props.classes.appBar}>
                <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={this.props.handleDrawerToggle}
                    className={this.props.classes.menuButton}
                >
                    <RiMenu2Line />
                </IconButton>

                </Toolbar>

                <Toolbar>
                    <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    align='right'
                    >
                    <MdAccountCircle size={30} />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                        <Link style={linkStyle} to="/profile" ><MenuItem onClick={this.handleClose}>  Profile</MenuItem> </Link >
                        <Link style={linkStyle} to="/" ><MenuItem onClick={this.handleClose}>  My account </MenuItem></Link >
                    </Menu>

                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.logout}
                        color="inherit"
                        align='right'
                    >
                        <FaSignOutAlt size={30} />
                    </IconButton>

                </Toolbar>
            </AppBar>
        )
    }
}

export default connect(null, { logoutUser })(AppHeader)