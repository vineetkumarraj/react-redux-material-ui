import React, { Component, Fragment } from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import BreadCrumb from '../../../components/BreadCrumb';

class Dashboard extends Component {

    render() {
        return (
            <Fragment>
                <BreadCrumb />
                <Paper className={this.props.classes.content}>
                <Typography>I am dashboard</Typography> 
                <Button> Sample </Button>
                </Paper>
            </Fragment>
        )
    }
}

export default Dashboard;