import React, { Component } from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { RiMenu2Line } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';


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
        this.setState({AnchorEl: event.currentTarget});
        this.setState({open: true});
    };

    render() {
        return (
            <AppBar position="fixed" className={this.props.classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={this.props.handleDrawerToggle}
                    className={this.props.classes.menuButton}
                >
                    <RiMenu2Line />
                </IconButton>

                <div >
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
                align='right'
                alignItems="flex-end"
                >
                <MdAccountCircle size={30} />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={null}
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
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default AppHeader;