import React, { Component } from 'react';
import Admin from './views/admin/Admin';
import Authentication from './views/account/Authentication';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { loadUser } from './actions/AuthActions';

class App extends Component {

  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <div className="App" id="wrapper">
        <Router>
          <Switch>
            <PublicRoute {...this.props} path="/login"><Authentication /></PublicRoute>
            <PublicRoute {...this.props} path="/reset-password"><Authentication /></PublicRoute>
            <PublicRoute {...this.props} path="/confirm-password"><Authentication /></PublicRoute>
            <PrivateRoute {...this.props} path="/"><Admin /></PrivateRoute>
          </Switch>
        </Router>
      </div>
    )
  };
}
const mapStateToProps = state => ({auth: state.auth})
export default connect(mapStateToProps, {loadUser} )(App);
