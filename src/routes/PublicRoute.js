import React, { Component } from 'react';
import {Route, Redirect} from 'react-router'
import Authentication from '../views/account/Authentication';

class PublicRoute extends Component {

    render() {
        return (
            <Route
                render={() =>
                    this.props.auth.isAuthenticated ? (
                        <Redirect
                            to={{
                                pathname: "/dashboard"
                            }}
                        />
                    ) : <Authentication />
                }
            />
        )
    }
}

export default PublicRoute