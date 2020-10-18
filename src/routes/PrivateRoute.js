import React, { Component } from 'react';
import Admin from '../views/admin/Admin';
import { Route, Redirect } from "react-router";

class PrivateRoute extends Component {

    render() {
        return (
            <Route
                render={() =>
                    this.props.auth.isAuthenticated ? (
                        <Admin />
                    ) : <Redirect
                            to={{
                                pathname: "/login"
                            }}
                        />
                }
            />
        )
    }
}

export default PrivateRoute;