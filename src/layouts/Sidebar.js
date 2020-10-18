import React, { Component } from 'react'
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

class Sidebar extends Component {

    drawer = (
        <div>
            <div className={this.props.classes.drawerHeader}>
                <Typography variant="h4" className={this.props.classes.padding4}>  T Company  </Typography>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? 'in' : 'mail'}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? 'in' : 'mail'}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );

    render() {
        return (
            <nav className={this.props.classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={this.props.mobileOpen}
                    onClose={this.props.handleDrawerToggle}
                    classes={{
                    paper: this.props.classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true,
                    }}
                >
                    {this.drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: this.props.classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {this.drawer}
                </Drawer>
                </Hidden>
            </nav>
        )
    }
}

export default Sidebar;