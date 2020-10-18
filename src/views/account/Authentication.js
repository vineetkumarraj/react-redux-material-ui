import React, { Component, Fragment } from 'react';
import { Login, ResetPass, ConfirmPass } from './pages/';
import { Switch, Route } from "react-router";

class Authentication extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path={`/login`}><Login /></Route>
                    <Route path={`/reset-password`}><ResetPass /></Route>
                    <Route path={`/confirm-password`}> <ConfirmPass /> </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default Authentication;