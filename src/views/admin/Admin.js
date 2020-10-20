import React, { Component } from 'react';
import { Dashboard, Profile } from './pages';
import { AppHeader, Sidebar } from '../../layouts/index';
import { Switch, Route } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { sidebarStyles } from '../../styles/styles';
import { CssBaseline } from '@material-ui/core';

class Admin extends Component {

    state = {
        classes: this.props.classes,
        mobileOpen: false,
        handleDrawerToggle: () => {
            this.setState({mobileOpen: !this.state.mobileOpen})
        }
    }
    render() {
        return (
            <div className={this.state.classes.root}>
                <CssBaseline />
                <AppHeader {...this.state} />
                <Sidebar {...this.state} />
                <main className={ this.state.classes.content }>
                    <div className={ this.state.classes.toolbar } />
                    <Switch>
                        <Route path={`/dashboard`}><Dashboard {...this.state} /></Route>
                        <Route path={`/profile`}><Profile {...this.state} /></Route>
                        <Route path="/"> <Dashboard {...this.state} /> </Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withStyles(sidebarStyles)(Admin);