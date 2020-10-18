import React, { Component } from 'react';
import { Button, Paper, Typography } from '@material-ui/core';

class Dashboard extends Component {

    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <Paper className={this.props.classes.paperPadding}>
               <Typography>I am dashboard</Typography> 
               <Button> Sample </Button>
            </Paper>
        )
    }
}

export default Dashboard;