import React, { Component } from 'react'
import { Box, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import  { RiCreativeCommonsFill } from 'react-icons/ri';

class Sidebar extends Component {

    drawer = (
        <div>
            <div className={this.props.classes.drawerHeader}>
                <Box alignItems="center" display="flex">
                    <RiCreativeCommonsFill size={100} />
                </Box>
                <Box p={1}>
                    <Typography variant="body2" align="center">  kumarrajvineet@gmail.com  </Typography>
                    <Typography variant="body2" align="center" style={{marginTop: 10}}>  Admin  </Typography>
                </Box>
            </div>
            <List>
                {['Dashboard', 'Users', 'Flyers', 'Local News', 'Local Events', 'Library', 'Account'].map((text, index) => (
                <ListItem button key={text} className={this.props.classes.listItem}>
                    <ListItemIcon>{index % 2 === 0 ? <RiCreativeCommonsFill size="1.5rem" className={this.props.classes.listIcon} /> : <RiCreativeCommonsFill size="1.5rem" className={this.props.classes.listIcon} />}</ListItemIcon>
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