import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { loginStyles } from '../../../styles/styles';
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TiLockClosedOutline } from 'react-icons/ti';
import { loginUser } from '../../../actions/AuthActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withSnackbar } from 'notistack';
import { clearErrors } from '../../../actions/ErrorActions';


class Login extends Component {

    state = {
         username: "",
         password: ""
    };
    
    loginMe = () => {
        this.props.loginUser({
            email:  this.state.username, 
            password: this.state.password,
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if ( error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.props.enqueueSnackbar(error.message, {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });

                this.props.clearErrors();
            }
        }
    }

    render() {
        return (
            <Grid container component="main" className={this.props.classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={8} className={this.props.classes.image} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <div className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar}>
                        <TiLockClosedOutline />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={this.props.classes.form} noValidate>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="username" onChange={this.onChange}
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password" onChange={this.onChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={this.props.classes.submit}
                        onClick={this.loginMe}
                        >
                        Sign In
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link to="/" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        </Grid>
                    </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({error: state.error})

export default withSnackbar(compose(connect(mapStateToProps, {loginUser, clearErrors}), withStyles(loginStyles))(Login));

