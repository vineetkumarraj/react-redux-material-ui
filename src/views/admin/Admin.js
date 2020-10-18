import React, { Component } from 'react';
import { Dashboard, Profile } from './pages';
import { AppHeader, Sidebar, Footer } from '../../layouts/index';
import { Switch, Route } from "react-router";
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
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

    theme = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
            main: "#2460A7FF",
            },
            secondary: {
            main: "#85B3D1FF",
            },
        },
        typography: {
            fontFamily: 'Roboto',
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': 'Roboto',
                },
            },
        },
    });

    render() {
        return (
            <ThemeProvider theme={this.theme}>
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
                    <Footer />
                </div>
            </ThemeProvider>
        )
    }
}

export default withStyles(sidebarStyles)(Admin);